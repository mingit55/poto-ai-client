<script setup>
const result = ref(null);

async function handleSubmit(form) {
  if (form === null) {
    result.value = null;
    return;
  }

  useLoading(true);
  const response = await useFetchApi('ai/request', {
    method: 'post',
    body: {
      time: form.time,
      locationType: form.locationType,
      locationDetail: form.locationDetail,
      region: form.region,
    },
  });
  if (!response) return useLoading(false);

  result.value = await Promise.all(
    response.map(async (item) => {
      const placeInfo = await findPlaceInfo(
        [item.location_address, item.location_name].join(' '),
      );
      return { ...item, ...placeInfo };
    }),
  );

  useLoading(false);
}
async function findPlaceInfo(keyword) {
  const { Place } = await google.maps.importLibrary('places');
  //@ts-ignore
  const request = {
    textQuery: keyword,
    fields: ['displayName', 'location'],
    // includedType: 'restaurant',
    language: 'ko-KR',
    isOpenNow: true,
    maxResultCount: 7,
    minRating: 3.2,
    region: 'kr',
    useStrictTypeFiltering: false,
  };
  //@ts-ignore
  const { places } = await Place.searchByText(request);

  if (places.length && places[0]) {
    const place = places[0];
    await place.fetchFields({ fields: ['photos'] });

    let google_map_url = `https://www.google.com/maps/place/?q=place_id:${place.id}`;
    let image, auth_name, auth_url, auth_photo;
    if (place.photos[0]) {
      image = place.photos[0].getURI({ maxHeight: 400 });
      auth_name = place.photos[0].authorAttributions[0].displayName;
      auth_url = place.photos[0].authorAttributions[0].uri;
      auth_photo = place.photos[0].authorAttributions[0].photoURI;
    }

    return { google_map_url, image, auth_name, auth_url, auth_photo };
  } else {
    return null;
  }
}
</script>

<template>
  <div class="index-wrap">
    <FormRequest @submit="handleSubmit" />
    <template v-if="result">
      <hr />
      <LocationResult :result="result" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.index-wrap {
  padding: 40px 0;

  hr {
    border-top: 1px solid $color-divider;
    width: 100%;
    margin: 50px auto;
    height: 0;
  }
}
</style>
