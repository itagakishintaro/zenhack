'use strict';

var LEVEL = ['できなかった', 'できた'];

$(function() {
	drawLine();
    chartData.forEach(function(v, i){
        if(i > 0){
            drawPie(i);
        }
    });
});

var chartData = [
    ['x', '2015-06-08', '2015-06-09', '2015-06-10', '2015-06-11', '2015-06-12', '2015-06-13', '2015-06-14'],
    ['ケーキを食べない', 1, 0, 1, 1, 1, 0, 0],
    ['カップラーメンを食べない', 0, 0, 1, 0, 0, 0, 1],
    ['お酒を控える', 0, 1, 1, 0, 1, 1, 1],
    ['コーヒーを飲まない', 0, 1, 1, 0, 1, 1, 1],
    ['おやつを食べない', 0, 1, 1, 0, 1, 1, 1],
    ['夕食後にヨガをする', 0, 1, 0, 0, 1, 1, 1],
    ['間食をしない', 0, 1, 1, 0, 1, 1, 1],
    ['夕食に有機野菜を使用する', 0, 1, 1, 0, 1, 1, 1]
];

function drawLine() {
    var chart = c3.generate({
        bindto: '#line',
        data: {
            x: 'x',
            // xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
            columns: chartData
        },
        subchart: {
            show: true
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
    });
}

function drawPie(i) {
    var target = '#pie' + i

    var chart = c3.generate({
        bindto: target,
        size: {
          width: 150
        },
        color: {
          pattern: ['#aec7e8', '#1f77b4']
        },
        data: {
            columns: createPieData(i),
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });

    d3.select(target + ' svg').append('text')
        .attr('x', d3.select(target + ' svg').node().getBoundingClientRect().width / 2)
        .attr('y', 50)
        .attr('text-anchor', 'middle')
        .style('font-size', '.8rem')
        .text(chartData[i][0]);
}

function createPieData(pieId){
    var org = chartData[pieId];
    var pieData = [];
    LEVEL.forEach(function(level, i){
        var data = [ level ];
        data.push(
            org.filter(function(v){
                return v === i;
            }).length
        );
        console.log(data);
        pieData.push(data);
    });
    return pieData;
}