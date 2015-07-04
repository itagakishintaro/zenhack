'use strict';

$(function() {
	drawLine();
    drawPie(1);
});

var chartData = [
    ['x', '2015-06-08', '2015-06-09', '2015-06-10', '2015-06-11', '2015-06-12', '2015-06-13', '2015-06-14'],
    ['戒律1', 2, 5, 3, 1, 2, 0, 5],
    ['戒律2', 0, 5, 3, 7, 5, 8, 4],
    ['戒律3', 0, 3, 2, 0, 1, 4, 2],
    ['戒律4', 0, 3, 1, 0, 3, 4, 2],
    ['戒律5', 0, 3, 2, 0, 1, 2, 3],
    ['戒律6', 0, 3, 5, 0, 1, 4, 2],
    ['戒律7', 0, 3, 2, 0, 3, 2, 4],
    ['戒律8', 0, 3, 2, 0, 1, 4, 2]
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
        bindto: '#pie1',
        data: {
            columns: [
                ['data1', 30],
                ['data2', 120],
            ],
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
}