"use strict";
document.addEventListener('DOMContentLoaded', function () {
    $(function () {

        var transactionData = create_dictionary_of_transactions();
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


function create_dictionary_of_transactions() {
    const jsonString = '[{"id": "eafc703db122c391b956acaf47c49a465c737158b2248a31aaa5df1bb04e94b8", "version": 0.1, "inputs": {"sender": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "recipient": "0x00000000000000000000000000000000", "quantity": "5000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1701286862"}},{"id": "cb5d7f34658d683d1a9d27cd0bf1b44f4db85007b5f8a34d7658a54ce1504f07", "version": 0.1, "inputs": {"sender": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "recipient": "0x00000000000000000000000000000000", "quantity": "2500"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700599662"}},{"id": "553d1b59ae3b83b613d200727fabb2639f29139afb36d266ec821068848a50bd", "version": 0.1, "inputs": {"sender": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": "2500"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700598662"}},{"id": "7057f2bea612c685b4e654e45cfd7da7ffe8fe890ec8086e163d874f31f9b9a9", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "quantity": "5000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700596662"}},{"id": "487cc0d4c9c03cd4fd45124644e4bd77b2e3e04521de2136abbd55f6da48edba", "version": 0.1, "inputs": {"sender": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "recipient": "0x00000000000000000000000000000000", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700509262"}},{"id": "9b894f2e29301270dbb1606e26606110614b0fbc3b96da7d02841b571da8cddf", "version": 0.1, "inputs": {"sender": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700193662"}},{"id": "22c6e8f8347b854c8852c92008fc574b9bb61904becf8de717804c58aa31870c", "version": 0.1, "inputs": {"sender": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "recipient": "0x00000000000000000000000000000000", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700183662"}},{"id": "5bdba3899daef90999048a6ab0c2b55352f84ac04d47a65fed627a0173b55372", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "0x00000000000000000000000000000000", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700173662"}},{"id": "104b6aa9110b91c9d789089f1c2e627c7b9382ae999182519a5cb58bf44a6bbe", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "0x00000000000000000000000000000000", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700163662"}},{"id": "de3a0a7c72a0919dd55b8c3728d41cd4d69995b0f9b040b0e54cb32aa455fa39", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699339760"}},{"id": "485fdf34b0a6c3756290322967f91d863e452619984e20587736e0215d2f11ba", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699329760"}},{"id": "4fcec2b052534d282747a5f1ed63a51c0f962f9b7dacff2968d53f472afb3759", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699319760"}},{"id": "ffb3396ba24586a2fb46cfd78f35c7c96f81f0dd8b274b788f6f32d77f02a43f", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699299760"}},{"id": "6b5a5fffc0c7b318f063bcc403e51b65f6057e7f81ac776791a5c3309c2f920f", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699289760"}},{"id": "c0be330ad5010b597a015da81089795880af0576f5ba5238f279b877f5a795da", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699279760"}},{"id": "f02dfcb30f518446bb134d90c31b915c103a7db855db72a20360256f4afe73e4", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699269760"}},{"id": "2f2dd4c34ee0b5473f02c4a4ad1750be08de0d8863cca7de9ff0449aae9925a2", "version": 0.1, "inputs": {"sender": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "recipient": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "quantity": "100000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699093360"}},{"id": "659416200c42445155124caa376879c84ebd0bc04d3362498a505a859dccaf2c", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": "111"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1701674931"}},{"id": "53281e2ec0178c1de652826703f127a0dc844d07e907b6c43989509289314a54", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": 152}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142695}},{"id": "36292419c1a8fcfaf829a417a24703a72a04ef05169485b7e7a743be59d3f205", "version": 0.1, "inputs": {"sender": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "recipient": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "quantity": 85}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142689}},{"id": "94818fe7175fd7dfec8308eaa4bab1902ba6bf8df1de82cc8e62fb50b1d2efe0", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 31}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142164}},{"id": "1e11111866874e6ef25c3934466eec3b3e9344f01eef2a731b0b7a858de4910f", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 106}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142794}},{"id": "cf46f254def707eef2b11fd39c9d58421215a406c0b1a4a80f4c2406c44c8471", "version": 0.1, "inputs": {"sender": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 104}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142615}},{"id": "a70ab6ae19e1aa5fc2e78bfe64a5cfea87656b0f9d7d0bd3e4c0a29a27e757f9", "version": 0.1, "inputs": {"sender": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": 44}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142780}},{"id": "e1065e7d3fb83d84f15c8b96f3c60678a341e947950f9b560828ad515d692f54", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 101}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142005}},{"id": "0dbd3579ca4717a36d1194a59ea54e56c64ddbb78c90d96fd6f42501fbdcf177", "version": 0.1, "inputs": {"sender": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "recipient": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "quantity": 79}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142784}},{"id": "23c2c8fb09ff87400b7dc710a1d1f9137c8e8de21526e6a2ca1b8a5334f6d187", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "quantity": 93}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142119}},{"id": "9b61147f33d7283bf4c1710a4ca2f1a771f05ddd7d31538e2582ccecb92dbeb6", "version": 0.1, "inputs": {"sender": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": 78}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142890}},{"id": "601c93f4aad031f271b19d2e52888aecdca4f1993d37c09c5cea6d5bf7d89ec6", "version": 0.1, "inputs": {"sender": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "recipient": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "quantity": 53}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142351}},{"id": "ad2ad41d1ca00316517a2cb3c83363f0e15831c9b3fc4e0cef3704357ec5d397", "version": 0.1, "inputs": {"sender": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "recipient": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "quantity": 30}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142543}},{"id": "8c48271bfb2c51625706a5d62d69228354a823e48e6d746f7436660a46aeef9f", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": 132}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142091}},{"id": "7e2c7d6c3ade9f186a0d0a9cdc22cf156b212966c0965fec22d03d278cf58738", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "quantity": 87}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142350}},{"id": "7f246ddea62ba23b91e47811a0f6d423540f31fd21dc78f2f6e07e5e947cff67", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "quantity": 23}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142650}},{"id": "9dfbfbe9e634f19d3fe5f1263d4489e48635ea79a1a912044d8ddca75920372c", "version": 0.1, "inputs": {"sender": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "recipient": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "quantity": 179}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142006}},{"id": "c71785f066dd1e4b104ff1a13912f24406ecae2355b08eed02d6e11c3e16a4b0", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 175}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142608}},{"id": "fafac3c55c6b698d6e57d721d46489e387967a28de6407c65dc482b06dee212a", "version": 0.1, "inputs": {"sender": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "recipient": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "quantity": 18}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142498}},{"id": "31a438c34c8655eedb52372be8b7c918cfada371fd5bb8698f9fe7af7769c05f", "version": 0.1, "inputs": {"sender": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "recipient": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "quantity": 196}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142179}},{"id": "1da293ab1a78bbcdfc5527e0eaacc36567d372f5b5e17ef6121109179341af67", "version": 0.1, "inputs": {"sender": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": 180}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142856}},{"id": "f3b77036c5c819da315ea265d6302bb6e2e75fdbc9318f84a5262ff6b477aa44", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": 72}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142334}},{"id": "c8aa55714d065ab10f93eef7c8472868edb7cd728860938d56305958474e31ea", "version": 0.1, "inputs": {"sender": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": 158}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142361}},{"id": "bb917d9631634b1fd7c985873aaeebbaa883011fc8b88dcd98522f2d974a03f6", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "quantity": 125}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142077}},{"id": "dbba6e114bdd5e92e554f7115c4dcfccbe9a65880dfda94b1d6afd3275ea4854", "version": 0.1, "inputs": {"sender": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": 27}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142717}},{"id": "99627702640aeec3387ad0f21608219a4b1ac4d055e9c0cc0b9a6c5c49b7c698", "version": 0.1, "inputs": {"sender": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "recipient": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "quantity": 47}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142711}},{"id": "adc295e3c71a802ca8a3aef7c2a63fcf8d1e1c7f495ff0b73c78f9fc52296f9d", "version": 0.1, "inputs": {"sender": "1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 85}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142015}},{"id": "6f79c26180b261d8ca3003e33f05e7793493ba5eb53197779b313f51fea63794", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "quantity": 105}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142337}},{"id": "808deb6783c72ce63f1d2e29432a870c17fded7e7813ed980b96b10edb3d5a23", "version": 0.1, "inputs": {"sender": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 174}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142440}},{"id": "dfbaaea845849ee79f53378e93b3cb905541a8fea2d2f628acd5ea0749a6d195", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699349760"}},{"id": "07aa9056c0347f8cba341a6d797e0d2f1558de65ce0e2cf95024f131ec15c713", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "quantity": 89}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142693}},{"id": "1220aa1face46a8d73a589a0495ba0ef69b7149c318498638a87b5f4d8b374d1", "version": 0.1, "inputs": {"sender": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 38}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142296}},{"id": "aeaab327cfbadcdfb9dfdf0adeb5f9ae64af371a120863e565b110262e5a60df", "version": 0.1, "inputs": {"sender": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "recipient": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "quantity": 143}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142273}},{"id": "777068441f1dcec2f53d8c17e3b39c1c25fc283888a2b58b5c270a2d00bac294", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "quantity": 76}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142353}},{"id": "8ec51b80078df12d39c258208860b11972d34ce3cf4c310ac14bb2ddec1ad4b6", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 76}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142499}},{"id": "2bd0ad6182e3e979731774f732205c8a3e02a2d3ef031397987f148fb61aea6c", "version": 0.1, "inputs": {"sender": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": 60}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142371}},{"id": "f26acf8cc12b95e77510b8ffb7c1b247d877c0c1d1f4255c132ff34e1a32dd23", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": 55}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142092}},{"id": "62ecec834dae71a863a19efa1a8be07a5cfe16527f8e11aed23e5c7a6c8dd3a4", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "quantity": 12}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142463}},{"id": "b1d4402d913967003ee51f587c248f23bf094cc692f2a06d2bfca9e7f756ad07", "version": 0.1, "inputs": {"sender": "1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK", "recipient": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "quantity": 146}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142630}},{"id": "zmpTVghQwY", "value": 2288248231},{"id": "vGdKIJiDyo", "value": 9755600816},{"id": "cyGXedWQEi", "value": 4231268355},{"id": "a685860f91f7bf999dbe2c3b853d49b21bed128821e1dde614f72bbcc5af9465", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "2eb67cdaa4e4c8721116457fdbab9c8777f9c770b2b725e678ffb5c8f026e059", "version": 0.1, "inputs": {"sender": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "recipient": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "quantity": 50}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142424}},{"id": "ILtlXuqFGH", "value": 6951143693},{"id": "7083d6ce3a7c4d7940a5e65aaaef187dd45bfd2bf97a3466af1ca8f7ca7178a6", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": 86}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142267}},{"id": "TwbApCVNsj", "value": 1745324102},{"id": "UyWSlUACUb", "value": 6200804500},{"id": "JOwjMXzsKy", "value": 3357390198},{"id": "14fb4e800c2e3700f8ef01720e306e3787d9afc47a491d92794afb7414662f42", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 55}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142598}},{"id": "ggRNSRrxXY", "value": 4923308653},{"id": "ed792a273362e3c3bcd4a83781c07cb60118d887e20121072e2ca7ff0e9ebdab", "version": 0.1, "inputs": {"sender": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": 180}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142051}},{"id": "b4e0d3b82529599d85253d53030d3a7f5412d32625f4b0882806ae446555558c", "version": 0.1, "inputs": {"sender": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": 55}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142325}},{"id": "HXlJEeCHSY", "value": 7614758970},{"id": "BTznLMUStM", "value": 1794130791},{"id": "eQaKcVEWIf", "value": 4493203294},{"id": "KgZQPeBXyf", "value": 6175115035},{"id": "JFaqCmpqlk", "value": 3312376861},{"id": "fafedce7949550daf453728e8e0032906f1da959ebee0285857d785f338e565c", "version": 0.1, "inputs": {"sender": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "recipient": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "quantity": 200}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142386}},{"id": "AUqvJTWlCc", "value": 9499176998},{"id": "e81e7e1f8d3a235f905dfaf87aaaa003f767dd0bed1ee9a00910836b4b611b60", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "quantity": 80}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142151}},{"id": "ASNGybaUGV", "value": 8606471492},{"id": "wSnLgRPLSw", "value": 8672228814},{"id": "vgAMITvfpn", "value": 9400520590},{"id": "e18b427d5f7ee03a703fbb3ef8734567df3801b02c9ee226bb55479df3dcbf36", "version": 0.1, "inputs": {"sender": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": 126}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142298}},{"id": "fdEtaOQrmA", "value": 4949197105},{"id": "YaRSxLGmMI", "value": 1819419291},{"id": "tYFZjxRNyL", "value": 7537100007},{"id": "f3a0716674e96ce0ef758f557e555caee32372e3b65cc39e151ade73b19e59f0", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "quantity": 183}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142749}},{"id": "CIkevziPKX", "value": 8265940248},{"id": "saOjiMoAec", "value": 6785595893},{"id": "7494604e6f0f8426a251b7ecfacf0128a6112a42c38f06a091ca547dd8ebb1b4", "version": 0.1, "inputs": {"sender": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 76}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142593}},{"id": "fmDOiZxLJg", "value": 8743880493},{"id": "shJigtaltg", "value": 4002761177},{"id": "EICZuZOMeP", "value": 5353046767},{"id": "c3e65f3c07226b76ae4baced426f862f7d2556ccc20fcc011abdf77efdc4c67c", "version": 0.1, "inputs": {"sender": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 92}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142341}},{"id": "deYigzzQUa", "value": 4996982116},{"id": "35dc021b06b96bf9265a217a70b3147e9a57e7a9c9626a44c0b585700f60fdfd", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "quantity": 140}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142434}},{"id": "pNpMaIPzpw", "value": 4396752139},{"id": "XHtOXsBvnC", "value": 5023224895},{"id": "UBBumItlhf", "value": 7180364710},{"id": "CdtZPHmMZh", "value": 9378268839},{"id": "b86f2aeb9eea72b4083e823534509f6f3c28dd01d001ef520a5e918377c658c2", "version": 0.1, "inputs": {"sender": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 110}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142257}},{"id": "DBqInsTXyD", "value": 4172394528},{"id": "XfEbfqBPpR", "value": 4677136437},{"id": "vHYaQlmznv", "value": 4350656070},{"id": "KmXNrKiQbc", "value": 9231767505},{"id": "068707965d8a36520b48097bf2d673d4eea079ac9119d79eb14c3c0dd679505b", "version": 0.1, "inputs": {"sender": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "recipient": "1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK", "quantity": 176}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142438}},{"id": "dDniXKAWYT", "value": 3616570611},{"id": "AupqXazWbM", "value": 6277220965},{"id": "AIarMmeVXo", "value": 2874128497},{"id": "pCdGztIxvm", "value": 7816668515},{"id": "kdnliTJSaw", "value": 1436535570},{"id": "bYPAytxxwn", "value": 9111803985},{"id": "SCICsnPBeY", "value": 1644535860},{"id": "dbUIduvhNs", "value": 6239633711},{"id": "67d4ba70cb76f5e55d1903e438c8b11df3c8db09480f4f3b077b1f524beb2161", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK", "quantity": 124}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142830}},{"id": "kwtlbghyLN", "value": 8560371433},{"id": "cthLZmuUDl", "value": 3714008498},{"id": "iqvdUiVnpj", "value": 9699752946},{"id": "dyMBzgxpsI", "value": 1981934455},{"id": "fc0e6546a6e2ce18b586c4d147b449214395bf511b862968299f038f3f3b1c0e", "version": 0.1, "inputs": {"sender": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": 25}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142248}},{"id": "MVhcHmgRuK", "value": 5955342575},{"id": "3481fba02153b28dbcac39c7148969befc23e4bab7a36eee766b42fd485ec393", "version": 0.1, "inputs": {"sender": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": 140}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142458}},{"id": "beoqlHfguA", "value": 3669663931},{"id": "EOcmBqajDG", "value": 9841202405},{"id": "ZhwMtYDJgo", "value": 8637742179},{"id": "xSiywCMkWz", "value": 5686397455},{"id": "hFnBnBadWl", "value": 5679371163},{"id": "HaerlIsejH", "value": 3650380307},{"id": "kbKmmbVvSM", "value": 2942763055},{"id": "55c863998bb6c41d5f527db72296c99974590b01a4d5772f54b45ad8dfca9942", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": 169}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142386}},{"id": "6452d8c334cb62cf7db907fd5282c71765ccdca8a6537dd3eb1b1251b11f8516", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "quantity": "5000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700597662"}},{"id": "KRglDgrKJk", "value": 9955035019},{"id": "oYAnWNNzaw", "value": 9919351394},{"id": "ryvlsydUvc", "value": 3350752606},{"id": "da81d552e641ffd2720dd742abcffeee7edfcd9e6ddb8e49d5dfaa2531c82e5a", "version": 0.1, "inputs": {"sender": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "recipient": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "quantity": 182}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142071}},{"id": "ZPKYnRVifM", "value": 6818472625},{"id": "ce832e8b84e65cf2427ce8163cf4787d32f34a5de3e65648a18758ef4fabd911", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "NFqsVWcquV", "value": 1607635245},{"id": "68894175a5afdb7ee8e766c359a4d969aaf53342d363d2244cba7fcfc9b8153e", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "quantity": 38}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142357}},{"id": "EuTjwlQLnr", "value": 3251249319},{"id": "zrKVCJQvug", "value": 3279858369},{"id": "VMotkUxDmG", "value": 3012776026},{"id": "qlJsysNiRc", "value": 3024651742},{"id": "BKTrfVsiwO", "value": 9785031534},{"id": "kcABcEWBmr", "value": 9030915768},{"id": "mLOBRACUAL", "value": 4300491453},{"id": "f2a7e81252f1df274b863678f85bed6349c772e95ceaa4a86c4551eed281c056", "version": 0.1, "inputs": {"sender": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "recipient": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "quantity": 148}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142776}},{"id": "UJxcHuOCbz", "value": 9145892867},{"id": "HNaLchRcZj", "value": 3625703083},{"id": "sFtAcaxZjs", "value": 3607205621},{"id": "EixJeAZEnG", "value": 5811439577},{"id": "qtfGuAmIjU", "value": 3857722231},{"id": "ILFPCHOBgG", "value": 7254148821},{"id": "KecNnAzpON", "value": 7881022493},{"id": "yEOGAsdOjR", "value": 2708745449},{"id": "9721d62180554fb445ca01df89d1f6ddca16652b8014f7e57754bc5ad7910034", "version": 0.1, "inputs": {"sender": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "recipient": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "quantity": 43}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142633}},{"id": "ANjORugjpr", "value": 9998862341},{"id": "OdMvBUzHXL", "value": 1169819606},{"id": "nfGQxDZQky", "value": 5572125298},{"id": "b99d29433279f2ea28ce6c930dda0cd52d756e66d9de0d9e996a0f7fb1593626", "version": 0.1, "inputs": {"sender": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 94}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142765}},{"id": "vxayJihheh", "value": 8917862484},{"id": "01d4b46ee952f04ae81f0efab3f710d43cf6b273f89cae6e50d90eb70859d021", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": 152}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142719}},{"id": "gwtmbwUefE", "value": 3539155546},{"id": "pVtiVUjXFn", "value": 8405349291},{"id": "MgeOiitxTm", "value": 7454933729},{"id": "AFlPkhXMie", "value": 1854047386},{"id": "fueKfnpLkn", "value": 3127613333},{"id": "fVFhngSlxo", "value": 5190411511},{"id": "vuUwnZkZgR", "value": 6251931692},{"id": "ae0e0b41fa5509166a870b397a41ef397406a3e536487574735f1eb0ef258431", "version": 0.1, "inputs": {"sender": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "recipient": "0x00000000000000000000000000000000", "quantity": "5000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700601662"}},{"id": "e02d28cd9e5ce2b7bee08d48ab04cade0d14d25096a30b29e9f2e085201dcc6f", "version": 0.1, "inputs": {"sender": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 56}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142445}},{"id": "cpNMbbejKk", "value": 4455893613},{"id": "kdmHWEfcVA", "value": 3321727322},{"id": "f7956290370bbfb9ed6e347ac85a0b183a3c0611731267df6e17a1cade5b40df", "version": 0.1, "inputs": {"sender": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "recipient": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "quantity": 170}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142056}},{"id": "CYTNQJXYTk", "value": 9882646976},{"id": "fa9064e1f149b78878fcc9323291222720ac6d3ea3d51ed09937792b4279d42d", "version": 0.1, "inputs": {"sender": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 93}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142093}},{"id": "EokdIqaQci", "value": 2498431534},{"id": "OYPagteCpP", "value": 9961582921},{"id": "tBzqtvQtRl", "value": 2670354992},{"id": "cc73fd0009482a4e1dcbf70fe19086583ed481c373b4a559a0125635a7ba622f", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "NTUHprIiGf", "value": 4407246481},{"id": "rbIFNDnFar", "value": 2410124897},{"id": "XrDlbsVAYC", "value": 3220543347},{"id": "IOOblLUhGI", "value": 5412821897},{"id": "uQUafTwmtd", "value": 3238002432},{"id": "VVAHBuNyFN", "value": 5671194305},{"id": "ewYKGlSxgr", "value": 5223151377},{"id": "NZaRThOXXm", "value": 1873375110},{"id": "d79b5ac108de5c7dce795d23dc7d22ef8779094e1d38329ebd78eb081286c5dc", "version": 0.1, "inputs": {"sender": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "recipient": "1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK", "quantity": 191}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142379}},{"id": "vcfzYabHzQ", "value": 1848548463},{"id": "38822d83bbe38cf6d67efbf8e56343180ad0e241f55df4fe5c9eb09f6e291b88", "version": 0.1, "inputs": {"sender": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "recipient": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "quantity": 150}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142084}},{"id": "AlTKhuFOOU", "value": 4313195672},{"id": "jEmQPibAyf", "value": 4172190900},{"id": "uBcuVOWZhm", "value": 6826059682},{"id": "niXzjtCEAd", "value": 3539412177},{"id": "ZIpXpzJboS", "value": 8420200022},{"id": "vicdrydvMP", "value": 9833555363},{"id": "zXJjrPxAFF", "value": 6319864926},{"id": "uUNyyXviqX", "value": 6267587313},{"id": "nHfHeUpKcc", "value": 3095142003},{"id": "LSdYknNAyJ", "value": 1076459597},{"id": "a1693ce1692c8c3b43ab7f3c348d2fa09c3a13e3cf1bcb32be4d8c37bf23c83e", "version": 0.1, "inputs": {"sender": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "recipient": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "quantity": 45}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142549}},{"id": "gfCWrRBzMG", "value": 9484824186},{"id": "d27d05b4f006e2718f3dbd498e7f7b4fc093cd9ccbe75e4cb078f57d370e2447", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699309760"}},{"id": "wzFbMtjXyV", "value": 7202030102},{"id": "ConCkEjFrV", "value": 9181118651},{"id": "609694ac9202e42a222c773f448ab661062586e6ba3f1da06cb84ee5da77fcfd", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "eavJUCQATH", "value": 7348683311},{"id": "38929a9f1ce088e526120f2ec5d13e1d8d71ad5a61db431b3ebe22bd540ee0d8", "version": 0.1, "inputs": {"sender": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "recipient": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "quantity": 194}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142081}},{"id": "qvZsPlVyEA", "value": 6389773979},{"id": "ttGXhCniFv", "value": 3529244590},{"id": "enYuqDXLqD", "value": 1432534540},{"id": "d85da58c97c6c65f96e889d649975ef90c2d38c4e0b764ea19ab25a13375d436", "version": 0.1, "inputs": {"sender": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": 158}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142581}},{"id": "820463dda6caa3f80941f3caa90952386b6370baa2f3f9dd1254a946efcab8e9", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": 147}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142725}},{"id": "1ca1c8b31a0a661d76700551b403351e1e279fb0c7f49611e07d9c0683eb57b5", "version": 0.1, "inputs": {"sender": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": 54}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142790}},{"id": "2b8eee5422cbf0723e4c23191ceaa531b174761449a9277dbc9c2613d8a9ab26", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "cUzLQnsgoF", "value": 4512978066},{"id": "qKtofsRauh", "value": 7598023374},{"id": "eXtFQwzOOz", "value": 6320411775},{"id": "sZvdIpLqZH", "value": 2932240484},{"id": "8115f73a5b2e30778cb100c198586a7590ce2805c0e031e250e41d691428bb61", "version": 0.1, "inputs": {"sender": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "recipient": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "quantity": 83}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142582}},{"id": "DapCtDdYlL", "value": 2649549151},{"id": "jfSLCPAvan", "value": 8547146892},{"id": "nytFeJlYNY", "value": 6853081757},{"id": "TDPPqeYYXY", "value": 6328545827},{"id": "c2eb343f72e2c8ded568ea8b5e70de6eec1dd1f1bf04d06178fcd970362c329d", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "quantity": 113}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142853}},{"id": "RbUNWtydaO", "value": 8450605963},{"id": "urlxWjIDdr", "value": 9149665262},{"id": "lNPDCWxhsq", "value": 3685003897},{"id": "LboZIyIuHa", "value": 2474250363},{"id": "cOOQxtQhqc", "value": 6688525624},{"id": "7a81e04cbeddc7b1bde108b951ccba1ec11426758900ec08880eb2e6f737c258", "version": 0.1, "inputs": {"sender": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": 112}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142199}},{"id": "jlHKTtFOPc", "value": 6885175355},{"id": "YuxNYEjaIn", "value": 7044999230},{"id": "ECRwpzKmxA", "value": 1316283643},{"id": "wOEOdPWnrf", "value": 1169333265},{"id": "lBkEcWXZIS", "value": 2811515845},{"id": "aGbIPvPvhj", "value": 1392667712},{"id": "4095b95058b21dabf680fc3940d8aeeb52528c52a2d6b803ad27d4acc946c484", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "KltGMacBZs", "value": 9562478045},{"id": "soRkJSrURo", "value": 4100153819},{"id": "wxrlVYwicF", "value": 9887634641},{"id": "SDQIruelEt", "value": 7535998742},{"id": "HtHDHYCAQR", "value": 2695880988},{"id": "fPhtFQFHNz", "value": 5162327551},{"id": "QqIYvJqaye", "value": 7197531286},{"id": "IWihPEQCCL", "value": 2990876941},{"id": "ITKiQmpzLv", "value": 3370155427},{"id": "qcvAqrpchD", "value": 4224027759},{"id": "a1585f97da6e9c370f7dccc0735887a67361753226923742e39ed54691667847", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "vXVEOkKKww", "value": 2451091242},{"id": "lUHoqjoECv", "value": 5532272889},{"id": "lDHPDUdZCa", "value": 6389433917},{"id": "eGsssGXLNC", "value": 2480830914},{"id": "gDWqtZhPhB", "value": 2149631139},{"id": "iKWCymTrxO", "value": 2296655449},{"id": "yUCiLaiHVI", "value": 3872441395},{"id": "UyzqCTPDoE", "value": 9002476490},{"id": "05890fc74c3f7310de022703218a134111508231c9b87efb051deaf74b9535f0", "version": 0.1, "inputs": {"sender": "1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 97}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142387}},{"id": "YHqGsXWFxr", "value": 9781335708},{"id": "XHkXWbobHN", "value": 2674109042},{"id": "3acea6097fcfe3d0eb1f244c392739dfd941c5c0ac65f0526d4145a1e9e75481", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "quantity": 161}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142299}},{"id": "GxNWlXkAHY", "value": 4136619717},{"id": "whxLostuVl", "value": 4192603334},{"id": "AIbkjDqsyE", "value": 9346118291},{"id": "VfxYYJMVgZ", "value": 4312795653},{"id": "FpKHalgJFw", "value": 2905733747},{"id": "8c1a3d6a83b19eae329fa548087f49b0925cd6dac6c10d85c7da5e5b15aa0253", "version": 0.1, "inputs": {"sender": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "recipient": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "quantity": 134}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142073}},{"id": "SjKeErynIs", "value": 7325072123},{"id": "OzxMxONfID", "value": 9954290709},{"id": "b42e4d7a15102a32da45ce4752b9069357f536d9b46046968278b01ea3d4335f", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": 161}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142751}},{"id": "5d34749f5302aab1300cec8ace363f492b5b601935383d1d400521def6db66bd", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "quantity": 195}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142727}},{"id": "701090ac4c952a13cb04da0380bf4127c744258243b2ac67c404fe0dad201c4c", "version": 0.1, "inputs": {"sender": "1CoD8uTPxci5CvwsdxoTZA7E9wdcVHKBZu", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": "5000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700600662"}},{"id": "f9004b2df087c22ee2100cfced81bf84a7676b5b1273baeea81b7931446fdae4", "version": 0.1, "inputs": {"sender": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "recipient": "0x00000000000000000000000000000000", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700595662"}},{"id": "VFRVOXvZrw", "value": 1645292757},{"id": "KavNbNwgux", "value": 6486715862},{"id": "ea94c2808b4ce8bcb78b371f153813d259a4a2aa7dc57a8eb3f2ce88b32b8987", "version": 0.1, "inputs": {"sender": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "recipient": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1700509262"}},{"id": "wRTQubjMri", "value": 2265211276},{"id": "OTErVgcxzf", "value": 9349473743},{"id": "0771c0916ce7eb5879e2ade2e4faf0b781c9d4f81137ee6e3c9a1a4b82f4ba97", "version": 0.1, "inputs": {"sender": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "recipient": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "quantity": 69}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142724}},{"id": "dqMbgJTsUZ", "value": 8125196213},{"id": "kGDLHzyfMP", "value": 5807508919},{"id": "DdcKuUhUDK", "value": 1118533031},{"id": "UqqLJHdbgA", "value": 3843024791},{"id": "VuouUsyfDe", "value": 8338018612},{"id": "GShlJZajtg", "value": 2586370009},{"id": "tIxLyQDifk", "value": 8662654388},{"id": "LbJTisCJqD", "value": 8325451044},{"id": "WOgqLrjtwj", "value": 7686577185},{"id": "f6d99cfbc55d24073aba8dd4005db0fa1160da7d9d02b8bddf588d64f760b60f", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1NFXrdRmnhJJUUsim7tFkHijvX3JXNx2CK", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "GwbMjeOEnQ", "value": 6111570320},{"id": "XUibzGLvCo", "value": 7811926471},{"id": "ztnUDxTXUO", "value": 1275250745},{"id": "xpYUMQZyzt", "value": 3824816039},{"id": "ADgxwCySkr", "value": 3564341992},{"id": "vBgMBOHpii", "value": 3204853525},{"id": "qbJhmnRavE", "value": 7628754383},{"id": "NhZcGWzOWn", "value": 9122635454},{"id": "MscOpoWRlM", "value": 8576944753},{"id": "TxWOxYonxZ", "value": 3419705158},{"id": "599bf5a5606aad47111a5ef5e82c7cbc5a917e2107c0ce1d009f241f7297a5ac", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "0x00000000000000000000000000000000", "quantity": "1000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699349760"}},{"id": "TmxTAnVGpo", "value": 4466146831},{"id": "MTacKimuta", "value": 7818711308},{"id": "sbjxpErEsf", "value": 5049094771},{"id": "HGNGreoChr", "value": 6335128910},{"id": "4194af9c81f67299cb7d5bdb9ce45e598406bfabf13cdfef053f8206cb7150d3", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "e7a737c427cf79c173bdfcdb8f84cd76fab43e83129167e971aba95e49e1b8f4", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "gPGdtAptUe", "value": 6932858896},{"id": "22f1e3e5c83370b736e713c44650516fc9ea9c22ebf50a8874fa9a96a42e4413", "version": 0.1, "inputs": {"sender": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "recipient": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "quantity": 78}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142603}},{"id": "ae9024c410641d747bffd62390012645d534feeae8997a551bf07b34e28a2b56", "version": 0.1, "inputs": {"sender": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": "100000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699086160"}},{"id": "faJNmBMdqM", "value": 3137775684},{"id": "b51501e4096c0675374d98710f3f7944daf9e8ed7f40c1c9515e4843cd0225a0", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1ELoystWhosX2ufo1MpdqeabiEBawPCPoK", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "2e644f839cc4e41a0880043dfa949902ffacfbc21487fc6ab716025692faa016", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "7d8213183d1525ebe20d300a41ffaf04eedf4827ea8118de5725a0e9f854d07b", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "4dbceb6c1026acdbeb1ae585e68137d8f95a60be1ed04806f693318672073ff5", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "FBNfpCqnIt", "value": 2697568102},{"id": "63dd2a075ea9b63237be43077403419a17a0e5cd3bc9a46492890e94dc5d0a0a", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "LMQbtXeJeq", "value": 1079661553},{"id": "454979c4e7fc41e7aacb2889c7b87f0b7b70c3cbfcd6b8ce1d185edd29774746", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "2aab37248c953028bbde1d67114e2347a4b3570d9f62ae80c0915806d856b5bf", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "63bb7028db23f4f4e5e1ab57393ee9ddb134847a2e74a7818fdd5822044bee7c", "version": 0.1, "inputs": {"sender": "1A2YcCyjqYNcTkjyuf99Q7W9uPvbs6FmDk", "recipient": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "quantity": "10000"}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": "1699266160"}},{"id": "a33889383836e990d4404c1a1de1b3ad6852b86310d7948935b6782735a1f08e", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "49f1cb9c9a8dddf6589da34e90ccf1323237f0601ecce897a8d21686e20637fa", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "d245641371ef59caefada93551de1a76b915926dfe331dd01e07cecf80c502bc", "version": 0.1, "inputs": {"sender": "0x00000000000000000000000000000000", "recipient": "1Pd658M6AW5ZxFbn2C5fetnqBrCv6zSgGD", "quantity": 1000000}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 0}},{"id": "aab9f890c43c611b2e84de72a935ebc461d0e162792467e7d3f948de61d0af39", "version": 0.1, "inputs": {"sender": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "recipient": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "quantity": 110}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142020}},{"id": "8f65a301ada46f12492b35f0e1b24eea6be8de1b07cabb94f684685632a2a0f3", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 188}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142576}},{"id": "a61597101dcc9c617d3177cd33f4af44a50434dbd3806266b7d16fb9609bbab4", "version": 0.1, "inputs": {"sender": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "recipient": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "quantity": 86}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142390}},{"id": "SfOrgausfm", "value": 4490186261},{"id": "b052478484bd48adac6af9d550c00a554152ea1dd9d527c08af1e8f70f9cb6d7", "version": 0.1, "inputs": {"sender": "1EVriDPrNDp6yP8XzSv6o8qhJ9hsAgw7KG", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": 162}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142846}},{"id": "cGtqPIHCyG", "value": 2669904475},{"id": "728619a37f0c0d91b16694394c901178dac08ca6ae998bcea11b8e8a8f095c8d", "version": 0.1, "inputs": {"sender": "1Kj4Gqa3qpp6u8VB5eU3UR3VXwSor4YCu7", "recipient": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "quantity": 156}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142707}},{"id": "1a1a84f1f41aabe99bdc0f0323a046c88d593dcd6d59aec5e98c422ef00da0dc", "version": 0.1, "inputs": {"sender": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 31}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142422}},{"id": "6378cb8afa1604286c9adf87cd3c13b2b839e2cc948af5681c34ff9ab4989392", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "quantity": 66}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142729}},{"id": "f8f24f6ea07b664436a9106ecfa9c9b166a77f558392a440f4a32fb5f5b79024", "version": 0.1, "inputs": {"sender": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "recipient": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "quantity": 83}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142536}},{"id": "3a5556353118966ae7c9552c9f52297b6f7c2f7d74eca6363426dedf14a32fb7", "version": 0.1, "inputs": {"sender": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": 153}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142177}},{"id": "a034823685c45a61f07191cfc406b704551592442226e7dcf27dfb8012b11f0e", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "quantity": 68}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142138}},{"id": "wpjGTOBMuT", "value": 1014525785},{"id": "bcea708bbb371b5aa9058b2197e74582052e24cdcb33b7d75a3587ca2e98536f", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 60}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142186}},{"id": "ac2bec8782ba21e2cc08960bff2f1dca0544f829a0f8d4789677b34e27c3a3c1", "version": 0.1, "inputs": {"sender": "1PYkafnKuyrZBctgvfU5iRPdz6hGdn7SNK", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 26}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142769}},{"id": "b3561e68615432e9dfc50fdb49ba4baba77366bf843a4ac7e9d203cf31d8fe4b", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7", "quantity": 84}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142272}},{"id": "e4ec960e42b0dc2f91cec6bdabea4d69400ce6f0582bbb95777ed0949338e2ed", "version": 0.1, "inputs": {"sender": "1CWP86Ef7dmEaxzhoxxes3UWeTYBGCSyXg", "recipient": "1MTCwG8GE7Gx1dHt1XRMiJB6qzGWQPf93h", "quantity": 111}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142128}},{"id": "rcqDdSJCvk", "value": 4390105027},{"id": "60157d01f9306368edc62fd5716dabc916160a5fe15f198ed53dc96833dddffb", "version": 0.1, "inputs": {"sender": "1DYr3Xos2F5fvvYWum7MJRbkfSYtVdbHVn", "recipient": "1B9JLDXudsnMExTaWd3gxMbepWLRHFdmif", "quantity": 156}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142362}},{"id": "39af868bc8392464be1f358fecfa7a6b55d1d29c21a4782fa4181b2bc0c89dff", "version": 0.1, "inputs": {"sender": "1CWQ9WTsopugi9vLP97xFUbKQ5QTyxv5mj", "recipient": "17vDhnc232UVpLtKbgroQZrEVrKU7SzgaE", "quantity": 91}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142199}},{"id": "fa6eb2daebcc1711185b395c27351db3bf3c74389d3ed7789221a7582d8f3a7b", "version": 0.1, "inputs": {"sender": "138pvxfzfeTSoYJcunHsC7bjyDz4JBiyE8", "recipient": "1G75kkyjc6r49VS73PgTbkFzyykdUtzFPi", "quantity": 158}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142522}},{"id": "RpqciYDyVz", "value": 8410319260},{"id": "e40b94ae63e4f95cb02a2d08f2c4aa53cd22b3bb29e2c4fe7004b700c2b01cbc", "version": 0.1, "inputs": {"sender": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "recipient": "1Q3NxRTmh417z9LmUBCZKpUQH6Uzwm6phH", "quantity": 187}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142896}},{"id": "LGYncSrZSH", "value": 6884415557},{"id": "68413ff98b41ecfba38b28e005946871a6cc158d0e2860fb2e48ccebf431cb1e", "version": 0.1, "inputs": {"sender": "1NSQuTtroKhv62nukcdLEuSnmqpYXC2w9P", "recipient": "1EgPP4JW4uDqKhQCsusngeJnwbSWTVUbE4", "quantity": 185}, "outputs": 1, "operation": "transfer", "asset": "Tickets", "metadata": {"time": 170142174}}]';

    const jsonData = JSON.parse(jsonString);
    const elementsWithTime = jsonData.filter(element => element.metadata && element.metadata.time !== undefined);

    var monthlyTransactions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < elementsWithTime.length; i++) {
        const block = elementsWithTime[i];
        const timeData = block.metadata.time;
        const transactionDate = new Date(timeData * 1000);
        const transactionMonth = transactionDate.getMonth();

        const pastYearThreshold = new Date();
        pastYearThreshold.setFullYear(pastYearThreshold.getFullYear() - 1);

        if ((transactionDate > pastYearThreshold))
        {
            monthlyTransactions[transactionMonth]++;
        }
    }

    return monthlyTransactions;
}