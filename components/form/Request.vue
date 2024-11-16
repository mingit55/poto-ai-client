<script setup>
const form = [
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
        '서울특별시',
        '경기도',
        '인천광역시',
        '부산광역시',
        '광주광역시',
        '울산광역시',
        '대구광역시',
        '대전광역시',
        '세종특별자치시',
        '강원특별자치도',
        '전북특별자치도',
        '제주특별자치도',
        '경상남도',
        '경상북도',
        '전라남도',
        '충청남도',
        '충청북도',
      ],
    },
  },
];
</script>

<template>
  <div class="request-form"></div>
</template>
