<script setup>
defineProps({
  result: {
    type: Array,
    default: null,
  },
});

function handleImgError(e) {
  e.target.remove();
}
</script>

<template>
  <Wrap v-if="result">
    <div class="result-wrap">
      <div v-for="(item, i) in result" :key="i" class="result-item">
        <img v-if="item.image" :src="item.image" :alt="item.location_name" @error="handleImgError" />
        <div class="result-info">
          <h5 class="location-name">
            {{ item.location_name }}
            <span class="location-address">{{ item.location_address }}</span>
          </h5>
          <div class="visit-date">{{ item.suggested_visit_date }}</div>
          <div class="description">{{ item.description }}</div>
          <a v-if="item.google_map_url" :href="item.google_map_url" target="_blank">
            <fa icon="link" />
            Google Map으로 보기
          </a>
        </div>
      </div>
    </div>
  </Wrap>
</template>

<style lang="scss" scoped>
.result-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .result-item {
    color: $color-text;

    & + .result-item {
      margin-top: 50px;
    }

    img {
      width: 100%;
      height: 350px;
      border: 1px solid $color-divider;
      background-color: $color-light;
      margin-bottom: 25px;
    }

    .location-name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;

      .location-address {
        color: $color-secondary;
        font-size: 16px;
        font-weight: 400;
      }
    }

    .description {
      line-height: 1.44;
      margin-bottom: 25px;
    }

    a {
      padding: 8px 10px;
      border-radius: 4px;
      background-color: $color-accent;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      text-decoration: none;

      svg {
        font-size: 12px;
      }
    }
  }
}
</style>
