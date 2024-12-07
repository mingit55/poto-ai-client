<script setup>
const $emit = defineEmits(['submit']);
const form = reactive({});
const inputs = reactive([
  {
    type: 'select-button',
    label: '촬영 시간대',
    key: 'time',
    props: {
      generator: [
        { name: '아침', value: 'Morning' },
        { name: '주간', value: 'Daytime' },
        { name: '저녁', value: 'Evening' },
        { name: '야간', value: 'Night Time' },
      ],
    },
  },
  {
    type: 'select-button',
    label: '촬영 장소',
    key: 'locationType',
    props: {
      generator: [
        { name: '실내', value: 'Indoor' },
        { name: '야외', value: 'Outdoor' },
        { name: '스튜디오', value: 'Studio' },
      ],
    },
    onChange: (value) => {
      useFetchApi('/ai/category', { params: { locationType: value } }).then(
        (res) => {
          inputs[2].props.generator = res;
        },
      );
    },
  },
  {
    type: 'select-button',
    label: '세부장소',
    key: 'locationDetail',
    props: {
      generator: [],
    },
  },
  {
    type: 'dropdown',
    label: '촬영 위치',
    key: 'region',
    props: {
      generator: [
        { name: '서울특별시', value: '서울특별시' },
        { name: '경기도', value: '경기도' },
        { name: '인천광역시', value: '인천광역시' },
        { name: '부산광역시', value: '부산광역시' },
        { name: '광주광역시', value: '광주광역시' },
        { name: '울산광역시', value: '울산광역시' },
        { name: '대구광역시', value: '대구광역시' },
        { name: '대전광역시', value: '대전광역시' },
        { name: '세종특별자치시', value: '세종특별자치시' },
        { name: '강원특별자치도', value: '강원특별자치도' },
        { name: '전북특별자치도', value: '전북특별자치도' },
        { name: '제주특별자치도', value: '제주특별자치도' },
        { name: '경상남도', value: '경상남도' },
        { name: '경상북도', value: '경상북도' },
        { name: '전라남도', value: '전라남도' },
        { name: '충청남도', value: '충청남도' },
        { name: '충청북도', value: '충청북도' },
      ],
    },
  },
]);

const canSubmit = computed(() => inputs.every((input) => form[input.key]));

async function handleSubmit() {
  if (!canSubmit.value) {
    return;
  }

  $emit('submit', form);
}
</script>

<template>
  <Wrap>
    <div class="request-form">
      <Transition v-for="(input, i) in inputs" :key="i" name="fade">
        <FormItem
          v-if="i === 0 || form[inputs[i - 1].key]"
          v-model="form[input.key]"
          :type="input.type"
          :label="input.label"
          :props="input.props"
          @input="$emit('submit', null)"
          @change="input.onChange"
        />
      </Transition>
      <FormButton
        type="primary"
        top="20px"
        :disabled="!canSubmit"
        @click="handleSubmit"
      >
        <fa icon="search" />
        촬영요건 알아보기
      </FormButton>
    </div>
  </Wrap>
</template>

<style lang="scss" scoped>
.request-form {
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
