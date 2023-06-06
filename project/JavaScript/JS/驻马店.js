// 装瓶机输送线02
let zhuangpingji = { userCustomID: '10', configID: 101000017, clientID: 21, attribute: {} };
// 装瓶机原料输送线
let zhuangpingjiyuanliao = { userCustomID: '4', configID: 101000017, clientID: 7, attribute: {} };
// 新风及循环风系统-冷却室
// BYJQ - SCSB - 001009 - SCWG - 0016;
// 新风及循环风系统-接种室
// BYJQ - SCSB - 001008 - SCWG - 0016;
// 新风及循环风系统-隔热间
// BYJQ - SCSB - 001010 - SCWG - 0016;
// 接种后输送线

// 制冷机组-弗德里希制冷剂

//

if (variables.isOpen == 1 || variables.isOpen == 2 || variables.isOpen == 3 || variables.isOpen == 4) {
  return [
    {
      value: 'ncghngkoc7',
    },
  ];
}

//

if (variables.isOpen == 4) {
  return [
    {
      value: 'BYJQ-SCSB-001017-SCWG-0023',
    },
  ];
} else if (variables.isOpen == 3) {
  return [
    {
      value: 'BYJQ-SCSB-001016-SCWG-0022',
    },
  ];
} else if (variables.isOpen == 2) {
  return [
    {
      value: 'BYJQ-SCSB-001015-SCWG-0021',
    },
  ];
} else if (variables.isOpen == 1) {
  return [
    {
      value: 'BYJQ-SCSB-001014-SCWG-0020',
    },
  ];
}

//
if (variables.isOpen == 4) {
  return [
    {
      value: 89,
    },
  ];
} else if (variables.isOpen == 3) {
  return [
    {
      value: 88,
    },
  ];
} else if (variables.isOpen == 2) {
  return [
    {
      value: 87,
    },
  ];
} else if (variables.isOpen == 1) {
  return [
    {
      value: 86,
    },
  ];
}
