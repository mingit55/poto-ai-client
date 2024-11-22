<script setup>
const inputs = [
  {
    type: 'select-button',
    label: '촬영 시간대',
    key: 'take_time',
    props: {
      generator: [
        { name: '아침', value: '아침' },
        { name: '주간', value: '주간' },
        { name: '저녁', value: '저녁' },
        { name: '야간', value: '야간' },
      ],
    },
  },
  {
    type: 'select-button',
    label: '촬영 장소',
    key: 'take_position',
    props: {
      generator: [
        { name: '실내', value: '실내' },
        { name: '야외', value: '야외' },
        { name: '스튜디오', value: '스튜디오' },
      ],
    },
  },
  {
    type: 'select-button',
    label: '세부장소',
    key: 'take_position',
    props: {
      generator: [
        { name: '실내', value: '실내' },
        { name: '야외', value: '야외' },
        { name: '스튜디오', value: '스튜디오' },
      ],
    },
  },
  {
    type: 'dropdown',
    label: '촬영 위치',
    key: 'address',
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
];
</script>

<template>
  <div class="request-form">
    <FormItem
      v-for="(input, i) in inputs"
      :key="i"
      :type="input.type"
      :label="input.label"
      :props="input.props"
    />
  </div>
</template>
