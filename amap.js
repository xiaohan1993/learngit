

      var map = new AMap.Map('container', {
          zoom: 15,
          center: [120.459334, 36.141378]
      });
      AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
          var toolBar = new AMap.ToolBar();
          var scale = new AMap.Scale();
          map.addControl(toolBar);
          map.addControl(scale);
      });
      var marker = new AMap.Marker({
          position: [120.459334, 36.141378],
          map: map
      });

      AMap.plugin('AMap.AdvancedInfoWindow',function(){
          var infowindow = new AMap.AdvancedInfoWindow({
                  content: '<h3 class="title">高德地图</h1>'+
                      '<div class="content">高德是中国领先的数字地图内容、'+
                      '导航和位置服务解决方案提供商。</div>',
                  offset: new AMap.Pixel(0, -30),
                  asOrigin:false
          });
          var clickHandle = AMap.event.addListener(marker, 'click', function() {
              infowindow.open(map, marker.getPosition())
          });
          })
      var infowindow = new AMap.InfoWindow({
          content: '<h3>高德地图</h1><div>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
          offset: new AMap.Pixel(0, -30),
          size:new AMap.Size(230,0)
      });
      var clickHandle = AMap.event.addListener(marker, 'click', function() {
              infowindow.open(map, marker.getPosition())
          });

          //在地图上绘制折线
          var editor={};
          editor._line=(function(){
            var lineArr = [
              marker.getPosition(),
              [116.382122, 39.901176],
              [116.387271, 39.912501],
              [116.388258, 39.904600]
            ];
            return new AMap.Polyline({
              map: map,
              path: lineArr,
              strokeColor: "#FF33FF",//线颜色
              strokeOpacity: 1,//线透明度
              strokeWeight: 3,//线宽
              strokeStyle: "solid"//线样式
            });
          })();
          map.setFitView();
          editor._lineEditor= new AMap.PolyEditor(map, editor._line);
