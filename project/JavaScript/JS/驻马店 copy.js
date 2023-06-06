let data = [
  {
    code: '0',
    msg: 'success',
    data: {
      list: [
        {
          identifier: 'b_CRoomAirCoolerOverload_01',
          time: '1675992637050',
          value: 'true',
          data_type: 'bool',
          access_mode: '只读',
          expect_value: '',
          name: '冷却室1冷风机过载',
          description: '有故障',
        },
        {
          identifier: 'b_CRoomAirCoolerOverload_02',
          time: '1675992637052',
          value: 'false',
          data_type: 'bool',
          access_mode: '只读',
          expect_value: '',
          name: '冷却室2冷风机过载',
          description: '无故障',
        },
      ],
    },
  },
];

// 根据name获取value，如果有description，将description用括号括起来拼接到value后面
function getValueByName(name) {
  let value = '';
  let description = '';
  data[0].data.list.forEach((item) => {
    if (item.name === name) {
      value = item.value;
      description = item.description;
    }
  });
  if (description) {
    return `${value}(${description})`;
  }
  return value;
}

let value = getValueByName('冷却室1冷风机过载');
// 如果value里面含true则
// return [{
//   value: value,
//   color: '#01FF00'
// }]
// 否则
// return [{
//   value: value,
//   color: '#333333'
// }]
if (value.indexOf('true') !== -1) {
  return [
    {
      value: value,
      color: '#01FF00',
    },
  ];
} else {
  return [
    {
      value: value,
      color: '#aaaaaa',
    },
  ];
}