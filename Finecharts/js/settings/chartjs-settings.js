"use strict";
document.addEventListener('DOMContentLoaded', function () {
    $(function () {

        var transactionData = populate_trans(jsonFile);
        var lineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September,", "October", "November", "December"],
            datasets: [

                {
                    label: "Transactions",
                    backgroundColor: 'rgba(26,179,148,0.5)',
                    borderColor: "rgba(26,179,148,0.7)",
                    pointBackgroundColor: "rgba(26,179,148,1)",
                    pointBorderColor: "#fff",
                    data: transactionData
                }
            ]
        };



        var lineOptions = {
            responsive: true
        };


        var ctx = document.getElementById("lineChart").getContext("2d");
        new Chart(ctx, { type: 'line', data: lineData, options: lineOptions });

        var barData = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September,", "October", "November", "December"],
            datasets: [
                {
                    label: "Data 1",
                    backgroundColor: 'rgba(220, 220, 220, 0.5)',
                    pointBorderColor: "#fff",
                    data: [65, 59, 80, 81, 56, 55, 40, 10, 10, 10, 10, 10, 10, 10]
                },
                {
                    label: "Data 2",
                    backgroundColor: 'rgba(26,179,148,0.5)',
                    borderColor: "rgba(26,179,148,0.7)",
                    pointBackgroundColor: "rgba(26,179,148,1)",
                    pointBorderColor: "#fff",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        var barOptions = {
            responsive: true
        };


        var ctx2 = document.getElementById("barChart").getContext("2d");
        new Chart(ctx2, { type: 'bar', data: barData, options: barOptions });

        var polarData = {
            datasets: [{
                data: [
                    300, 140, 200
                ],
                backgroundColor: [
                    "#a3e1d4", "#dedede", "#b5b8cf"
                ],
                label: [
                    "My Radar chart"
                ]
            }],
            labels: [
                "App", "Software", "Laptop"
            ]
        };

        var polarOptions = {
            segmentStrokeWidth: 2,
            responsive: true

        };

        var ctx3 = document.getElementById("polarChart").getContext("2d");
        new Chart(ctx3, { type: 'polarArea', data: polarData, options: polarOptions });

        var doughnutData = {
            labels: ["App", "Software", "Laptop"],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ["#a3e1d4", "#dedede", "#b5b8cf"]
            }]
        };


        var doughnutOptions = {
            responsive: true
        };


        var ctx4 = document.getElementById("doughnutChart").getContext("2d");
        new Chart(ctx4, { type: 'doughnut', data: doughnutData, options: doughnutOptions });


        var radarData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(220,220,220,0.2)",
                    borderColor: "rgba(220,220,220,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    backgroundColor: "rgba(26,179,148,0.2)",
                    borderColor: "rgba(26,179,148,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        var radarOptions = {
            responsive: true
        };

        var ctx5 = document.getElementById("radarChart").getContext("2d");
        new Chart(ctx5, { type: 'radar', data: radarData, options: radarOptions });

    });

    // Line Chart

    const CHART = document.getElementById("LineChart");
    console.log(CHART);
    let lineChart = new Chart(CHART, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        }
    });


    // Line Chart with fill

    const CHARTFILL = document.getElementById("LineChartFill");
    console.log(CHARTFILL);
    let lineChartFill = new Chart(CHARTFILL, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September,", "October", "November", "December"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.4,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        }
    });



    //  Multiple Lines Chart

    const MULTILINECHART = document.getElementById("MultipleLineChart");
    console.log(MULTILINECHART);
    let MultiLineChart = new Chart(MULTILINECHART, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                },
                {
                    label: "My Second dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(169,68,66,0.98)",
                    borderColor: "rgba(169,68,66,0.98)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(169,68,66,0.98)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(169,68,66,0.98)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [60, 79, 90, 61, 76, 56, 80],
                    spanGaps: false,
                }
            ]
        }
    });

    // Line Chart One Fill One Without Fill

    const MULTILINEONEFILL = document.getElementById("MultipleLineOneFill");
    console.log(MULTILINEONEFILL);
    let MultiLineOneFill = new Chart(MULTILINEONEFILL, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                },
                {
                    label: "My Second dataset",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "rgba(169,68,66,0.98)",
                    borderColor: "rgba(169,68,66,0.98)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(169,68,66,0.98)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(169,68,66,0.98)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [60, 79, 90, 61, 76, 56, 80],
                    spanGaps: false,
                }
            ]
        }
    });

    // Bar Chart Without Fill

    const BARCHARTNOFILL = document.getElementById("BarChartNoFill");
    console.log(BARCHARTNOFILL);
    let BarChartNoFill = new Chart(BARCHARTNOFILL, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                }
            ]
        }
    });


    // Multiple Bar Chart No Fill

    const MBARCHARTNOFILL = document.getElementById("MBarChartNoFill");
    console.log(MBARCHARTNOFILL);
    let MBarChartNoFill = new Chart(MBARCHARTNOFILL, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                },

                {
                    label: "My Second dataset",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(169,68,66,0.98)',
                        'rgba(169,68,66,0.98)',
                        'rgba(169,68,66,0.98)',
                        'rgba(169,68,66,0.98)',
                        'rgba(169,68,66,0.98)',
                        'rgba(169,68,66,0.98)'
                    ],
                    borderWidth: 1,
                    data: [45, 54, 40, 71, 96, 65, 49],
                }
            ]
        }
    });

    // Pie Chart


    const PIECHART = document.getElementById("piechart");
    console.log(PIECHART);
    let PieChart = new Chart(PIECHART, {
        type: 'pie',
        data: {
            labels: ["Color 1", "Color 2", "Color 3", "Color 4"],
            datasets: [
                {
                    data: [150, 50, 100, 70],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#1ab394"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#1ab394"
                    ]
                }
            ]
        }
    });



    // Bubble Chart

    const BUBBLECHART = document.getElementById("bubblechart");
    console.log(BUBBLECHART);
    let BubbleChart = new Chart(BUBBLECHART, {
        type: 'bubble',
        data: {
            labels: ["Color 1", "Color 2", "Color 3", "Color 4"],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [
                        {
                            x: 20,
                            y: 30,
                            r: 15
                        },
                        {
                            x: 40,
                            y: 10,
                            r: 10
                        }
                    ],
                    backgroundColor: "#FF6384",
                    hoverBackgroundColor: "#FF6384",
                },
                {
                    label: 'Second Dataset',
                    data: [
                        {
                            x: 10,
                            y: 20,
                            r: 10
                        },
                        {
                            x: 30,
                            y: 10,
                            r: 10
                        }
                    ],
                    backgroundColor: "#333",
                    hoverBackgroundColor: "#333",
                },
                {
                    label: 'Third Dataset',
                    data: [
                        {
                            x: 28,
                            y: 10,
                            r: 15
                        },
                        {
                            x: 25,
                            y: 5,
                            r: 10
                        }
                    ],
                    backgroundColor: "#1ab394",
                    hoverBackgroundColor: "#1ab394",
                }
            ]
        }
    });

    // Number At Top Vertical Chart

    var ctx = $("#numberAtTopbar-chart");
    var data = {
        labels: ["2011", "2012", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            backgroundColor: ['#CFCFB5', '#DEDEDE', '#DEDEDE', '#1AB394', '#83D0C0', '#B5B8CF', '#8ED6D5', '#45C0BE'],
            borderWidth: 1,
            data: [109, 40, 246, 211, 261, 147, 119, 73],

        }]
    };
    var options = {
        events: false,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        animation: {
            onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                var chart = this;
                var datasets = this.config.data.datasets;

                datasets.forEach(function (dataset, i) {
                    ctx.font = "24px Lobster Two";
                    ctx.fillStyle = "#4F4C4D";
                    chart.getDatasetMeta(i).data.forEach(function (p, j) {
                        ctx.fillText(datasets[i].data[j], p._model.x, p._model.y - 20);
                    });
                });
            }
        },
        scales: {
            xAxes: [{
                barPercentage: 0.6,
                gridLines: {
                    display: false
                }
            }]
        }
    }

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    // Horizontal Chart Example

    new Chart(document.getElementById("numberAtHoribar-chart"), {
        type: 'horizontalBar',
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#8ED6D5", "#DEDEDE", "#3cba9f", "#CFCFB5", "#45C0BE"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Population Prediction (millions) by 2050'
            }
        }
    });

    // Multi Line Chart Example

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "North America",
                borderColor: "#c45850",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Regional Population (in millions)'
            }
        }
    });

    // Line & Bar Chart

    new Chart(document.getElementById("lineAndBarchart"), {
        type: 'bar',
        data: {
            labels: ["1900", "1950", "1999", "2050"],
            datasets: [{
                label: "Europe",
                type: "line",
                borderColor: "#8e5ea2",
                data: [408, 547, 675, 734],
                fill: false
            }, {
                label: "Africa",
                type: "line",
                borderColor: "#3e95cd",
                data: [133, 221, 783, 2478],
                fill: false
            }, {
                label: "Europe",
                type: "bar",
                backgroundColor: "#dedede",
                data: [408, 547, 675, 734],
            }, {
                label: "Africa",
                type: "bar",
                backgroundColor: "#8ed6d5",
                backgroundColorHover: "#3e95cd",
                data: [133, 221, 783, 2478]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Population growth (millions): Europe & Africa'
            },
            legend: { display: false }
        }
    });

});

function populate_trans(jsonString) {
    const jsonData = JSON.parse(jsonString);
    var monthlyTransactions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (const jsonObj of jsonData) {
        try {
            var time = get_time(jsonObj);
            if (time != "N/A") {
                const transactionDate = new Date(time);
    
                const pastYearThreshold = new Date();
                pastYearThreshold.setFullYear(pastYearThreshold.getFullYear() - 1);
    
                if ((transactionDate > pastYearThreshold))
                {
                    monthlyTransactions[transactionDate.getMonth()+1]++;
                }
            }
        } catch (error) {
            continue;
        }
    }
    return monthlyTransactions;
}