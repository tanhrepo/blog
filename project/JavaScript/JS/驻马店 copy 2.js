const data = [
  {
    msg: 'success',
    code: 200,
    data: [
      {
        wareCode: '1e75baa5a1a84db2acbcb14b82bc9858',
        wareName: '玉米粉',
        mayRealWeight: 5301,
        unitName: '千克',
      },
      {
        wareCode: '3343226fa9474e3aab23f562bad074bf',
        wareName: '蟹味菇A',
        mayRealWeight: 95,
        unitName: '箱',
      },
      {
        wareCode: '3fc8c597893249f5b60aefe4a629bd9c',
        wareName: '鲜菇礼盒',
        mayRealWeight: 1984,
        unitName: '个',
      },
      {
        wareCode: '44d0181d8dc1427aadaa63e48f1e3c4b',
        wareName: '蟹味菇方箱',
        mayRealWeight: 5248,
        unitName: '个',
      },
      {
        wareCode: '48b0549d85ff492693c9dacb133f04a9',
        wareName: '白玉菇方箱',
        mayRealWeight: 3978,
        unitName: '个',
      },
      {
        wareCode: '4d2dc9ca8ef24a8796c9d49c8df2c261',
        wareName: '蟹味菇酱',
        mayRealWeight: 1885,
        unitName: '瓶',
      },
      {
        wareCode: '538f489147f04dedb898a35263ec2374',
        wareName: '包装机卷膜',
        mayRealWeight: 4,
        unitName: '卷',
      },
      {
        wareCode: '6bb8d748d1714137ad9777687d7d20a9',
        wareName: '干菇礼盒',
        mayRealWeight: 1932,
        unitName: '个',
      },
      {
        wareCode: '6cf057c8fe644f23bc8199e4690e5423',
        wareName: '蟹味菇简装箱',
        mayRealWeight: 566,
        unitName: '个',
      },
      {
        wareCode: '7d5f66aa3f3d409e9c216707d7bed01b',
        wareName: '玉米芯',
        mayRealWeight: 30485,
        unitName: '千克',
      },
      {
        wareCode: '9813a866b2b34161ba73304012a03254',
        wareName: '白玉菇A',
        mayRealWeight: 393,
        unitName: '箱',
      },
      {
        wareCode: 'aff50d7b2e1441d6a69151910d2318dc',
        wareName: '白玉菇C',
        mayRealWeight: 1,
        unitName: '箱',
      },
      {
        wareCode: 'b8ce247d0a234597a0e92c3eacdaf22f',
        wareName: '蟹味菇包装袋',
        mayRealWeight: 23347,
        unitName: '个',
      },
      {
        wareCode: 'bf35aff80566479eb366e0eda44b862d',
        wareName: '红色包装绳',
        mayRealWeight: 4,
        unitName: '盘',
      },
      {
        wareCode: 'c4b4f539f200476d86a8f66f0968ff79',
        wareName: '蟹味菇B',
        mayRealWeight: 94,
        unitName: '箱',
      },
      {
        wareCode: 'c666832b49c641289fc7f6b1d25350f6',
        wareName: '锯末',
        mayRealWeight: 136720,
        unitName: '千克',
      },
      {
        wareCode: 'c91e47249f58468aba97ca90d7182e67',
        wareName: '碳酸钙',
        mayRealWeight: 5644,
        unitName: '千克',
      },
      {
        wareCode: 'cd82a37fc7f2442abd1bf996ce727510',
        wareName: '白玉菇包装袋',
        mayRealWeight: 18190,
        unitName: '个',
      },
      {
        wareCode: 'cecc98556ef542d7a744eb78246ff844',
        wareName: '豆粕',
        mayRealWeight: 12146,
        unitName: '千克',
      },
      {
        wareCode: 'd3ea5640e7484c8e85502661ad348502',
        wareName: '白玉菇B',
        mayRealWeight: 548,
        unitName: '箱',
      },
      {
        wareCode: 'fcd43e2bc6414883b3965e988c1d05de',
        wareName: '白玉菇酱',
        mayRealWeight: 2157,
        unitName: '瓶',
      },
      {
        wareCode: 'fd95b15262a24b09bd0962a264e7f0be',
        wareName: '麦麸',
        mayRealWeight: 32536,
        unitName: '千克',
      },
      {
        wareCode: 'fe41dc25f7fb47a1846eeb0ee36a23f8',
        wareName: '棉籽壳',
        mayRealWeight: 47898,
        unitName: '千克',
      },
      {
        wareCode: 'fead2518df1a4069a09a45666d17d4ac',
        wareName: '蟹味菇长箱',
        mayRealWeight: 1209,
        unitName: '个',
      },
    ],
  },
];
// 将data[0].data中的wareName和mayRealWeight取出来，组成一个新的数组,赋值给新数组的name和value
const data1 = data[0].data.map((item) => {
  return {
    name: item.wareName,
    value: item.mayRealWeight,
  };
});

let a = [
  { value: 0, name: '锯末', color: '#325eff' },
  { value: 0, name: '玉米芯', color: '#ca2631' },
  { value: 0, name: '棉籽壳', color: '#f3ab00' },
  { value: 0, name: '麦麸', color: '#49c600' },
  { value: 0, name: '玉米粉', color: '#62b6ff' },
  { value: 0, name: '豆粕', color: '#62b6ff' },
];

data1.forEach((item) => {
  a.forEach((item1) => {
    if (item.name === item1.name) {
      item1.value = item.value;
    }
  });
});

console.log(a);
