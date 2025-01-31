const arr1 = [
  {
    field: 1,
    weight: undefined,
  },
  {
    field: 1,
    weight: 2,
  },
  {
    field: 1,
    weight: 5,
  },
  {
    field: 1,
    weight: 3,
  },
  {
    field: 1,
    weight: 76,
  },
  {
    field: 1,
    weight: 45,
  },
  {
    field: 1,
    weight: undefined,
  },
  {
    field: 1,
    weight: undefined,
  },
  {
    field: 1,
    weight: 3,
  },
  {
    field: 1,
    weight: undefined,
  },
  {
    field: 1,
    weight: 1,
  },
];

arr1.sort((a, b) => Number(a.weight) - Number(b.weight));

console.log(arr1);
