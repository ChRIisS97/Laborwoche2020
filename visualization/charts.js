
// --------------- DASHBOARD SITE -------------
// ----------------------------------------- Consumption site --------------------------------------------------
$(document).ready(function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    /*** Gradient ***/
    var gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'rgba(255,166,46,0.95)');
    gradient.addColorStop(1, 'rgba(255,166,46,0.05)');
    /*** Gradient ***/
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient2.addColorStop(0, 'rgba(48,216,235,0.95)');
    gradient2.addColorStop(1, 'rgba(48,216,235,0.05)');
    /*** Gradient ***/
    var gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient3.addColorStop(0, 'rgba(7,30,44,0.95)');
    gradient3.addColorStop(1, 'rgba(7,30,44,0.05)');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ['Feb"7', 'Feb"8', 'Feb"9', 'Feb"10', 'Feb"11', 'Feb"12', 'Feb"13', 'Feb"14', 'Feb"14', 'Feb"15', 'Feb"16', 'Feb"17', 'Feb"18'],
            datasets: [{
                label: 'Temperature 1',
                backgroundColor: gradient3,
                borderColor: '#2b2c50',
                borderWidth: 1,
                pointRadius: 0,
                pointHitRadius: 5,
                pointHoverBorderWidth: 10,
                data: [0, 50, 5, 20, 50, 60, 45, 0, 50, 5, 20, 42, 30],
            }, {
                label: "Temperature 2",
                backgroundColor: gradient2,
                borderColor: '#30D8EB',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [10, 20, 25, 20, 60, 30, 45, 0, 20, 5, 20, 42, 33]
            }, {
                label: "Temperature 3",
                backgroundColor: gradient,
                borderColor: 'orange',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [20, 40, 5, 40, 70, 10, 25, 10, 50, 59, 10, 42, 30]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 5
                }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgb(255,255,255)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    setInterval(function(){
        chart.data.labels.push('Temp');
        chart.data.datasets[0].data.push(bar2);
        chart.data.datasets[1].data.push(bar3);
        chart.data.datasets[2].data.push(bar4);
        chart.update();
        }, 9000);
      
});

// ----------------------------------------- voltage site --------------------------------------------------
$(document).ready(function () {
    var ctx = document.getElementById('myChart2').getContext('2d');

    /*** Gradient ***/
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(7,30,44,0.9)');
    gradient.addColorStop(1, 'rgba(7,30,44,0.05)');
    /*** Gradient ***/
    var gradientorange = ctx.createLinearGradient(0, 0, 0, 600);
    gradientorange.addColorStop(0, 'rgba(255,166,46,0.96)');
    gradientorange.addColorStop(1, 'rgba(192,192,192,0.05)');
    /*** Gradient ***/
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient2.addColorStop(0, 'rgba(48,216,235,0.95)');
    gradient2.addColorStop(1, 'rgba(48,216,235,0.05)');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
            datasets: [{
                label: 'Battery Voltage',
                backgroundColor: gradient2,
                borderColor: '#30D8EB',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [22, 22.1, 22.5, 22, 23, 24, 22, 21, 23, 22, 22.5, 23, 22]
            }, {
                label: '2 Battery Voltage',
                backgroundColor: gradientorange,
                borderColor: 'orange',
                pointRadius: 0,
                borderWidth: '1',
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [21, 21.1, 21.5, 22, 21.7, 22.3, 22, 21, 22, 22.5, 22, 23, 22]
            }, {
                label: 'Solar Voltage',
                backgroundColor: gradient,
                borderColor: '#071e2c',
                pointRadius: 0,
                borderWidth: '1',
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [38, 38.5, 40, 41, 40.5, 38.5, 38, 42, 41.5, 42, 41, 39, 39.5]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 5
                }
            },scales: {
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgb(255,255,255)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
// ----------------------------------------- sunshine hours site --------------------------------------------------
$(document).ready(function () {
    var ctx = document.getElementById('myChart3').getContext('2d');
    /*** Gradient ***/
    var gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'rgba(255,166,46,0.95)');
    gradient.addColorStop(1, 'rgba(255,166,46,0.05)');
    /*** Gradient ***/
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient2.addColorStop(0, 'rgba(48,216,235,0.95)');
    gradient2.addColorStop(1, 'rgba(48,216,235,0.05)');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
            datasets: [{
                label: 'Sunshine hours',
                backgroundColor: gradient,
                borderColor: 'orange',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [4, 4.5, 4, 6, 5, 6, 6.5, 6, 7, 4, 8, 5, 6, 5, 6]
            },{
                label: 'Shadow hours',
                backgroundColor: gradient2,
                borderColor: '#30D8EB',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [8, 6, 7, 8, 10, 10, 12, 8, 4, 7, 4, 5, 4, 5, 6]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 5
                }
            },scales: {
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgb(255,255,255)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});





// --------------- POWERWALL SITE -------------
// ----------------------------------------- Chart Solarpanel Voltage --------------------------------------------------
$(document).ready(function () {
    let ctx = document.getElementById('myChart7').getContext('2d');

    var gradientStroke = ctx.createLinearGradient(600, 0, 100, 0);
    gradientStroke.addColorStop(0, "#071e2c");
    gradientStroke.addColorStop(1, "#ffffff");

    var myChart7 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
            datasets: [{
                backgroundColor: 'transparent',
                borderColor: gradientStroke,
                borderWidth: '3',
                data: [0, 50, 5, 20, 70, 90, 45, 0, 50, 5, 20, 70, 90, 0, 50, 5, 20, 70, 90, 45, 0, 50, 5, 20, 70, 90]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    } //this will remove all the x-axis grid lines
                }]
            },
            legend: {
                display: false,
            }
        }
    });
});

// ----------------------------------------- Chart battery Voltage --------------------------------------------------

$(document).ready(function () {
    var ctx = document.getElementById('myChart8').getContext('2d');

    var gradientStrokew = ctx.createLinearGradient(600, 0, 100, 0);
    gradientStrokew.addColorStop(0, "#071e2c");
    gradientStrokew.addColorStop(1, "#ffffff");

    var myChart8 = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        data: {
            labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
            datasets: [{
                backgroundColor: 'transparent',
                borderColor: gradientStrokew,
                borderWidth: '3',
                data: [0, 50, 5, 20, 70, 90, 45, 0, 50, 5, 20, 70, 90, 0, 50, 5, 20, 70, 90, 45, 0, 50, 5, 20, 70, 90]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    } //this will remove all the x-axis grid lines
                }]
            },
            legend: {
                display: false,
            }
        }
    });
});

// ----------------------------------------- Chart battery Voltage --------------------------------------------------
$(document).ready(function () {
    var ctx = document.getElementById('myChart9').getContext('2d');

    var gradientStrokeOrange = ctx.createLinearGradient(600, 0, 100, 0);
    gradientStrokeOrange.addColorStop(0, "#071e2c");
    gradientStrokeOrange.addColorStop(1, "#FFA500");

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        data: {
            labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
            datasets: [{
                backgroundColor: 'transparent',
                borderColor: gradientStrokeOrange,
                borderWidth: '3',
                data: [0, 50, 5, 20, 70, 90, 45, 0, 50, 5, 20, 70, 90, 0, 50, 5, 20, 70, 90, 45, 0, 50, 5, 20, 70, 90]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    } //this will remove all the x-axis grid lines
                }]
            },
            legend: {
                display: false,
            }
        }
    });
});

// ----------------------------------------- Chart battery Voltage --------------------------------------------------
$(document).ready(function () {
    var ctx = document.getElementById('myChart10').getContext('2d');

    var gradientStrokeblue = ctx.createLinearGradient(600, 0, 100, 0);
    gradientStrokeblue.addColorStop(0, "#071e2c");
    gradientStrokeblue.addColorStop(1, "#3498db");

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        data: {
            labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
            datasets: [{
                backgroundColor: 'transparent',
                borderColor: gradientStrokeblue,
                borderWidth: '3',
                data: [1, 2, 1.4, 1, 1.5, 1.5, 1.53, 1.9, 1, 2, 1.4, 1, 1.5, 1.5, 1.53, 1.9, 1, 2, 1.4, 1, 1.5, 1.5, 1.53, 1.9, 1.3, 1.5]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        display: false //this will remove only the label
                    }
                }]
            },
            legend: {
                display: false,
            }
        }
    });
});
























// -----------------------------------------  --------------------------------------------------
$(document).ready(function () {
    var ctx = document.getElementById('myChart-analyse').getContext('2d');
    /*** Gradient ***/
    var gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'rgba(255,166,46,0.95)');
    gradient.addColorStop(1, 'rgba(255,166,46,0)');
    /*** Gradient ***/
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient2.addColorStop(0, 'rgba(48,216,235,0.95)');
    gradient2.addColorStop(1, 'rgba(48,216,235,0)');
    /*** Gradient ***/
    var gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient3.addColorStop(0, 'rgba(7,30,44,0.95)');
    gradient3.addColorStop(1, 'rgba(7,30,44,0)');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ['Feb"7', 'Feb"8', 'Feb"9', 'Feb"10', 'Feb"11', 'Feb"12', 'Feb"13', 'Feb"14', 'Feb"14', 'Feb"15', 'Feb"16', 'Feb"17', 'Feb"18'],
            datasets: [{
                label: 'Consumption in kWh',
                backgroundColor: gradient3,
                borderColor: '#2b2c50',
                borderWidth: 1,
                pointRadius: 0,
                pointHitRadius: 5,
                pointHoverBorderWidth: 10,
                data: [0, 50, 5, 20, 50, 60, 45, 0, 50, 5, 20, 42, 30],
            }, {
                label: "Grid feed in kWh",
                backgroundColor: gradient2,
                borderColor: '#30D8EB',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [10, 20, 25, 20, 60, 30, 45, 0, 20, 5, 20, 42, 33]
            }, {
                label: "Generation in kWh",
                backgroundColor: gradient,
                borderColor: 'orange',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [20, 40, 5, 40, 70, 10, 25, 10, 50, 59, 10, 42, 30]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 5
                }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgb(255,255,255)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});


$(document).ready(function () {
    var ctx = document.getElementById('myChart-analyse-2').getContext('2d');
    /*** Gradient- ***/
    var gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'rgba(255,166,46,0.95)');
    gradient.addColorStop(1, 'rgba(255,166,46,0.05)');
    /*** Gradient ***/
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient2.addColorStop(0, 'rgba(48,216,235,0.95)');
    gradient2.addColorStop(1, 'rgba(48,216,235,0.05)');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6'],
            datasets: [{
                label: 'Sunshine hours',
                backgroundColor: gradient,
                borderColor: 'orange',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [4, 4.5, 4, 6, 5, 6, 6.5, 6, 7, 4, 8, 5, 6, 5, 6]
            },{
                label: 'Shadow hours',
                backgroundColor: gradient2,
                borderColor: '#30D8EB',
                borderWidth: '1',
                pointRadius: 0,
                pointHitRadius: '5',
                pointHoverBorderWidth: '10',
                data: [8, 6, 7, 8, 10, 10, 12, 8, 4, 7, 4, 5, 4, 5, 6]
            }]
        },
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 5
                }
            },scales: {
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgb(255,255,255)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
