let a = 
[
    {
      "id": "fYWgLr0Y12",
      "name": "default 2D",
      "type": "pc",
      "isDefault": false,
      "style": {
        "background": "#FFFFFF",
        "customHeight": 0,
        "customWidth": 0,
        "resolution": "1920*1080"
      },
      "viewPattern": "fullScreen",
      "vRefLines": [],
      "hRefLines": [],
      "elements": [
        {
          "id": "sC6O16JUG",
          "visible": true,
          "com": {
            "componentId": "main-img",
            "version": "1.0.5",
            "name": "单张图片"
          },
          "attr": {
            "rotate": 0,
            "left": 459,
            "top": 285,
            "zIndex": 2,
            "width": 672,
            "height": 405,
            "minWidth": 5,
            "minHeight": 5
          },
          "layerInfo": {
            "x": null,
            "y": null
          },
          "type": "element",
          "group": null,
          "view": {
            "background-image": "/uploads/65324a1469062a00401174a3.png",
            "background-color": "rgba(0,0,0,0)",
            "urlConfig": {
              "url": "",
              "ifBlank": false
            },
            "rotate": false,
            "speed": 50
          },
          "data": {
            "type": "2d",
            "dataSource": null,
            "ownDataFilter": {
              "id": "private",
              "value": "private",
              "label": "私有过滤器",
              "code": "return [\n  {\n    \"img\": \"https://cos.linguochi.com/view/default-img.png\" \n }\n]",
              "using": true,
              "name": "私有过滤器",
              "validated": true
            },
            "useFilter": false,
            "dataFilterArr": [
              {
                "id": "private",
                "using": true
              }
            ],
            "dcFields": {
              "img": []
            }
          },
          "variables": [],
          "behaviors": [],
          "children": [],
          "dataType": "dataSource",
          "dataModel": {
            "id": "",
            "uid": "194",
            "config": {
              "needAutoRefresh": true,
              "autoRefreshInterval": 900,
              "dataCounts": 100,
              "dataModel": {
                "img": []
              }
            }
          }
        },
        {
          "id": "8kv0JlYHL",
          "visible": true,
          "com": {
            "componentId": "main-title",
            "version": "1.1.2",
            "name": "标题"
          },
          "attr": {
            "rotate": 0,
            "left": 483,
            "top": 331,
            "zIndex": 3,
            "width": 200,
            "height": 60,
            "minWidth": 20,
            "minHeight": 10
          },
          "layerInfo": {
            "x": null,
            "y": null
          },
          "type": "element",
          "group": null,
          "view": {
            "content": "标题名称",
            "padding": {
              "top": 0,
              "bottom": 0,
              "left": 0,
              "right": 0
            },
            "background": "rgba(0,0,0,0)",
            "borderRadius": 0,
            "textAlign": "center",
            "actionAfterClick": "null",
            "textStyle": {
              "fontSize": 32,
              "color": "#FFFFFF",
              "fontFamily": "Microsoft Yahei",
              "fontWeight": "normal",
              "useHover": false,
              "hoverColor": "rgba(0, 0, 0, 0)",
              "shadowColor": "#999",
              "shadowSize": 0,
              "letterSpacing": 0,
              "transform": 0
            },
            "page": {
              "id": ""
            },
            "urlConfig": {
              "url": "",
              "ifBlank": true
            }
          },
          "data": {
            "type": "2d",
            "dataSource": null,
            "ownDataFilter": {
              "id": "private",
              "value": "private",
              "label": "私有过滤器",
              "code": "return [{\n    \"value\": \"标题内容\"\n}]",
              "using": true,
              "name": "私有过滤器",
              "validated": true
            },
            "useFilter": true,
            "dataFilterArr": [
              {
                "id": "private",
                "using": true
              }
            ],
            "dcFields": {
              "value": [],
              "color": [],
              "bgColor": []
            }
          },
          "variables": [
            {
              "fieldName": "value",
              "key": "value",
              "use": false
            }
          ],
          "behaviors": [
            {
              "fieldName": "value",
              "key": "value",
              "relatedDatasources": [],
              "action": "click"
            }
          ],
          "children": [],
          "dataType": "dataSource",
          "dataModel": {
            "id": "",
            "uid": "194",
            "config": {
              "needAutoRefresh": true,
              "autoRefreshInterval": 900,
              "dataCounts": 100,
              "dataModel": {
                "value": [],
                "color": [],
                "bgColor": []
              }
            }
          }
        }
      ],
      "groups": [],
      "uiConfigs": [],
      "modelInfo": ""
    }
  ]