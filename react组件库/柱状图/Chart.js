import React from 'react';
import echarts from "../../assets/echart.js";
import s from './AppList.css';

class Chart extends React.Component { 
    constructor(props) {
        super(props)
        // this.loadChart = this.loadChart.bind(this)
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.refs.chartArea)
        const option = {
            title:{
                text:'错误报告数据总览',
                left:'80px',
                top:'15px',
            },
            backgroundColor:'white',
            // tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {
            //         type: 'cross',
            //         crossStyle: {
            //             color: '#999'
            //         }
            //     }
            // },
            // grid:{show:false},
            // toolbox: {
            //     feature: {
            //         dataView: {show: true, readOnly: false},
            //         magicType: {show: true, type: ['line', 'bar']},
            //         restore: {show: true},
            //         saveAsImage: {show: true}
            //     }
            // },
            legend: {
                top:'20px',
                right:'110px',
                data:['bug数量','访问次数']
            },
            xAxis: 
                {
                    axisTick:{alignWithLabel:true},
                    type: 'category',
                    data: ['06-04','06-06','06-06','06-07','06-08','06-09','06-10','06-11','06-12','06-13','06-14','06-15'],
                    // axisPointer: {
                    //     type: 'shadow'
                    // }
                }
            ,
            yAxis: [
                {
                    // show:false,
                    splitLine:{show:false},
                    type: 'value',
                    name: '',
                    min: 0,
                    max: 28,
                    interval: 7,
                    axisLabel: {
                        formatter: '{value} 次'
                    }
                },
                {
                    show:false,
                    type: 'value',
                    name: '访问次数',
                    min: 0,
                    max: 160,
                    interval: 40,
                    axisLabel: {
                        formatter: '{value} 次'
                    }
                }
            ],
            series: [
                {
                    itemStyle:{normal:{color:'#ffa6a6'}},
                    name:'bug数量',
                    type:'bar',
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                },
                // {
                //     itemStyle:{normal:{color:'#108ee9'}},
                //     name:'访问次数',
                //     type:'line',
                //     yAxisIndex: 1,
                //     data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                // }
            ]
        };
        myChart.setOption(option);
    }
    render(){
        return (
            <div className={s.chart} ref="chartArea"></div>
        )
    }
}

export default Chart
