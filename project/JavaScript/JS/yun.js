/*
 * @Author: tanhong
 * @Date: 2022-02-22 09:40:05
 * @LastEditTime: 2022-02-28 11:29:09
 * @LastEditors: tanhong
 * @FilePath: \blog\project\JavaScript\JS\yun.js
 */
const rootData = {
  uniqueId: '403492003553214464',
  imei: '867572057539512',
  unitId: '403472938528931840',
  belongBuild: '403472938365353984',
  belongFloor: '403472938377936896',
  deviceName: '三号楼四单元五楼',
  deviceModel: '132',
  deviceType: 1,
  deviceLocation: '',
  deviceStatus: 2,
  connectStatus: 2,
  abnormal: 0,
  signalClass: '3',
  isOnMap: 0,
  classificationType: 1,
  pic: 0,
  olPosition: '',
  createTime: '2022-01-18 10:13:10',
  unitInfo: {
    uniqueId: '403472938528931840',
    unitName: '化肥厂家属院',
    firstAreaCode: '410000',
    firstAreaName: '河南省',
    secondAreaCode: '411600',
    secondAreaName: '周口市',
    thirdAreaCode: '411627',
    thirdAreaName: '太康县',
    address: '河南省周口市太康县逊母口镇',
  },
  buildingInfo: {
    uniqueId: '403472938365353984',
    buildingName: '化肥厂家属院',
    fireRating: 1,
    longitude: 114.70680562123769,
    latitude: 34.0261030372217,
    address: '河南省周口市太康县逊母口镇',
    groundFloor: 1,
    ungroundFloor: 0,
    groundFloorArea: null,
    ungroundFloorArea: null,
    createTime: '2022-01-18 22:57:24',
  },
};

function filter(rootData) {
  const kafka = rootData;
  if (kafka) {
    let zb = [];
    const arrayD = kafka;
    let array = [];
    array.push(arrayD);
    let dataArr = [];
    array.map((mapItem) => {
      if (dataArr.length == 0) {
        dataArr.push({ createTime: mapItem.createTime.slice(5, 10), List: [mapItem] });
      } else {
        let res = dataArr.some((item) => {
          //判断相同日期，有就添加到当前项
          if (item.createTime == mapItem.createTime.slice(5, 10)) {
            item.List.push(mapItem);
            return true;
          }
        });
        if (!res) {
          //如果没找相同日期添加一个新对象
          dataArr.push({ createTime: mapItem.createTime.slice(5, 10), List: [mapItem] });
        }
      }
    });
    dataArr.forEach((item) => {
      zb.push({
        x: item.createTime,
        y: item.List.length,
      });
    });
    zb.sort(function (a, b) {
      return Date.parse(b.x) - Date.parse(a.x);
    });
    zb = zb.slice(0, 7);
    zb.reverse();

    return zb;
  }
}

console.log(filter(rootData));
