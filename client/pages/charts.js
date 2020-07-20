import React, { Component } from "react"
import { Bar, Line, Pie } from "react-chartjs-2"


export default function Charts(props) {
    const barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    const lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
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
            },
        ],
    };

    const pieData = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const barOptions = {
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Dollar Amount",
                    },
                },
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Month",
                    },
                },
            ],
        },
    };

    const lineOptions = {
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Dollar Amount",
                    },
                },
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Month",
                    },
                },
            ],
        },
    };

    return (
        <>
            <Bar
                data={barData}
                options={barOptions}
            />
            <Line
                data={lineData}
                options={lineOptions}    
            />
            <Pie data={pieData} />
        </>
    )
}


// class Charts extends React.Component {
//     render() {
//         return (
//             <div>
//                 Hello World
//                 <DefaultCharts />
//             </div>
//         )
//     }
// }

// export default Charts