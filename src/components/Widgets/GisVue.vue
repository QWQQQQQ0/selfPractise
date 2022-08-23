<template>
  <div id="map_wrap">
    <div v-if="showTool" style="margin-top: 15px;">
      <el-input id="mapSearch" v-model="search" placeholder="请输入内容" class="input-with-select" @change="handleSearch">
        <el-button slot="append" icon="el-icon-search"/>
      </el-input>
      <el-input id="mapSearch" v-model="lng" placeholder="请输入内容" class="input-with-select" @change="handleSearch"/>
      <el-input id="mapSearch" v-model="lat" placeholder="请输入内容" class="input-with-select" @change="handleSearch"/>
    </div>

    <div id="container"/>
  </div>
</template>

<script>

import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig = {
  securityJsCode: ''
}
export default {
  props: {
    geographicInfo: {
      default: () => null
    },
    bindValues: {
      type: Object,
      default: () => {}
    },
    showTool: {
      type: Boolean,
      default: () => true
    },
    dialogItem: {
      type: Object,
      required: false
    },
    intable: {
      type: Boolean,
      default: () => false
    }
  },

  data() {
    return {
      search: '',
      Amap: null,
      map: null,
      placeSearch: null,
      autoOptions: {
        input: ''
      },
      auto: null,
      inputValue: '南昌',
      address: '',
      lng: '',
      lat: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.autoOptions.input = 'mapSearch'
      this.inputValue = this.search
      this.initMap()
    })
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: '', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType', 'AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.AutoComplete'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then(AMap => {
          this.Amap = AMap
          this.map = new AMap.Map('container', {
            // 设置地图容器id
            viewMode: '3D', // 是否为3D地图模式
            layers: [// 使用多个图层
            // new AMap.TileLayer.Satellite(),
            // new AMap.TileLayer.RoadNet()
            ],
            zoom: 15, // 初始化地图级别
            // center: [this.geographicInfo?this.geographicInfo.lnt:this.bindValues.lnt?this.bindValues.lnt : 116.1596596, this.geographicInfo?this.geographicInfo.lat:this.bindValues.lnt?this.bindValues.lat:28.86719757] //初始化地图中心点位置
            center: [116.1596596, 28.86719757] // 初始化地图中心点位置
          })
          const geolocation = new AMap.Geolocation()
          this.map.addControl(new AMap.Scale())
          this.map.addControl(new AMap.ToolBar())
          this.map.addControl(new AMap.HawkEye({ width: '20vw', height: '15vh' }))
          this.map.addControl(new AMap.MapType())
          this.map.addControl(geolocation)
          geolocation.getCurrentPosition((state, result) => {
            console.log(result)
          })
          this.auto = new AMap.AutoComplete(this.autoOptions)
          this.placeSearch = new AMap.PlaceSearch({
            map: this.map,
            pageSize: 1, // 单页显示结果条数
            pageIndex: 1, // 页码
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker
          }) // 构造地点查询类
          this.auto.on('select', this.select)
          this.map.on('click', e => {
            const position = [e.lnglat.lng, e.lnglat.lat]
            this.placeSearch.searchNearBy('', position, 200, (status, result) => {
              if (status === 'complete') {
                this.search = result.poiList.pois[0].address
                this.lng = position[0]
                this.lat = position[1]
              } else {
                this.search = '无法查询位置信息'
              }
              // this.bindValues['lng'] = e.lnglat.lng
              // this.bindValues['lat'] = e.lnglat.lat
              // if (result && result.poiList && result.poiList.pois) {
              //   this.bindValues['address'] = result.poiList.pois[0].address
              // } else {
              //   this.bindValues['address'] = ''
              // }
            })
          })
          //    var marker = new AMap.Marker({
          //         position:[116.1596596, 28.86719757]//位置
          //     })
          //     this.map.add(marker);//添加到地图
          // var path = [ [116,39], [116,40], [117,39] ]; //简写

          // var polyline = new AMap.Polyline({
          //     path : path,
          // })
          // this.map.add(polyline);
          // var lnglat1 = new AMap.LngLat(116, 39);
          // var lnglat2 = new AMap.LngLat(117, 39);
          // var distance = lnglat1.distance(lnglat2);//计算lnglat1到lnglat2之间的实际距离(m)

          // var lnglat3 = lnglat1.offset(100,50)//lnglat1向东100m，向北50m的位置的经纬度
        })
        .catch(e => {
          console.log(e)
        })
    },
    handleSearch() {
      const address = this.search
      this.placeSearch.search(address, (status, result) => {
        console.log(status, result, 'search');
      })
      console.log(this.placeSearch, this.search);
    },
    // autoInput(keyword, AMap) {

    //   var keywords = keyword;
    //   AMap.plugin('AMap.PlaceSearch', function(){
    //     var autoOptions = {
    //       city: '全国'
    //     }
    //     var placeSearch = new AMap.PlaceSearch(autoOptions);
    //     placeSearch.search(keywords, function(status, result) {
    //       // 搜索成功时，result即是对应的匹配数据
    //       console.log(result)
    //       // var node = new PrettyJSON.view.Node({
    //       //     el: document.querySelector("#input-info"),
    //       //     data: result
    //       // });
    //     })
    //   })
    // },
    select(e) {
      this.placeSearch.setCity(e.poi.adcode)
      this.placeSearch.search(e.poi.name) // 关键字查询查询
    }
  }
  //   watch:{
  //     'inputObject.search'(nvale, ovalue) {

  //       if(!this.inputObject.input) return
  //       this.placeSearch.search(this.inputObject.input)
  //     }
  //   }

}
</script>

<style lang="less">
#map_wrap {
  height: 100vh;
  width:100%;
}
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 60%;
  // height: 500px;
}
</style>
