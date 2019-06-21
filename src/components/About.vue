<template>
  <div class="about container">
    <h1 v-if="their_name">Hello {{ their_name }}, this is an about page</h1>
    <h1 v-else>This is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <ECharts class="echart1" theme="vintage" :options="chartOptions" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'

// thehe
var colorPalette = ['#d87c7c','#919e8b', '#d7ab82',  '#6e7074','#61a0a8','#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'];
ECharts.registerTheme('vintage', {
    color: colorPalette,
    backgroundColor: '#fef8ef',
    graph: {
        color: colorPalette
    }
});

export default {
  name: 'About',
  components: {
    ECharts
  },
  data () {
    return {
      their_name: this.$route.params.name,
      chartOptions: {
        title: {
          text: 'title #1',
          subtext: 'subtext #1',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          data: [ 'item 1', 'item 2', 'item 3', 'item 4', 'item5' ]
        },
        series: [
          {
            name: 'series 1',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: 'd 1' },
              { value: 310, name: 'd 2' },
              { value: 234, name: 'd 3' },
              { value: 135, name: 'd 4' },
              { value: 1548, name: 'd 5' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                sadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

.container {
  box-shadow: 0 0 40px darkgray;
  padding: 30px;
  border-radius: 12px;
}

.echart1 {
  width: 100%;
  height: 300px;
}

</style>


