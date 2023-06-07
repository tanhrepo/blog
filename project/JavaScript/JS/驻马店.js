const data = [
  {
    code: '0',
    msg: 'success',
    data: {
      list: [
        {
          identifier: 'w_jarStatus',
          time: '1675992637035',
          value: '0',
          data_type: 'int32',
          access_mode: '只读',
          expect_value: '',
          name: '接种罐位状态',
          description: '',
        },
        {
          identifier: 'w_liquidRoomCoolDiff',
          time: '1675992637033',
          value: '0',
          data_type: 'int32',
          access_mode: '只读',
          expect_value: '',
          name: '液体菌种培养室制冷偏差值',
          description: '',
        },
        {
          identifier: 'w_liquidRoomStatus',
          time: '1675992637045',
          value: '0',
          data_type: 'int32',
          access_mode: '只读',
          expect_value: '',
          name: '液体菌种培养室状态',
          description: '',
        },
        {
          identifier: 'w_liquidRoomTemperatureSet',
          time: '1675992637032',
          value: '0',
          data_type: 'int32',
          access_mode: '只读',
          expect_value: '',
          name: '液体菌种培养室温度设定值',
          description: '',
        },
      ],
    },
    ovDataSourceId: 'education',
  },
];FURl6e6di

// 将name为‘液体菌种培养室温度设定值’的value取出来，先判断他是否存在
// 如果存在，将value转换为number类型，再将value转换为string类型，再将value转换为number类型
// 如果不存在，则返回0
function getTemperatureSet() {
  if (data && data[0] && data[0].data && data[0].data.list) {
    const temperatureSet = data[0].data.list.find((item) => item.name === '液体菌种培养室温度设定值');
    if (temperatureSet) {
      return [
        {
          value: Number(String(Number(temperatureSet.value))),
        },
      ];
    }
  } else {
    return [
      {
        value: 0,
      },
    ];
  }
}

console.log(getTemperatureSet());
