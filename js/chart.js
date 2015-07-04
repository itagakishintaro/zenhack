'use strict';

var LEVEL = ['負けた', '妥協した', '勝った'];

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
    ['戒律1', 2, 0, 2, 1, 2, 0, 0],
    ['戒律2', 0, 0, 2, 0, 0, 0, 2],
    ['戒律3', 0, 2, 2, 0, 1, 2, 2],
    ['戒律4', 0, 2, 1, 0, 2, 2, 2],
    ['戒律5', 0, 2, 2, 0, 1, 2, 2],
    ['戒律6', 0, 2, 0, 0, 1, 2, 2],
    ['戒律7', 0, 2, 2, 0, 2, 2, 2],
    ['戒律8', 0, 2, 2, 0, 1, 2, 2]
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
    var chart = c3.generate({
        bindto: '#pie' + i,
        size: {
          width: 150
        },
        data: {
            columns: createPieData(i),
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
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