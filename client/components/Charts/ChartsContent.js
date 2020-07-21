import react, { useState, useEffect } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
// import Navbar from "../components/Layouts/Navbar";
// import Footer from "../components/Layouts/Footer";
// import { useRouter } from "next/router";

function ChartsContent() {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/facebook")
      .then((response) => response.json())
      .then((result) => {
        setFinancials(result);
      });
  }, []);

  const labelsDate = financials.map((financeDate) => {
    return financeDate.date;
  });

  const dataRevenue = financials.map((financeRevenue) => {
    return financeRevenue.revenue;
  });

  const dataExpenses = financials.map((financeExpenses) => {
    return financeExpenses.costAndExpenses;
  });

  const dataProfit = financials.map((financeProfit) => {
    return financeProfit.grossProfit;
  });

  // const sumRev =

  // const barDataRevenue = {
  //   labels: labelsDate,
  //   datasets: [
  //     {
  //       label: "Revenue",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: dataRevenue,
  //     },
  //   ],
  // };

  // const barDataExpenses = {
  //   labels: labelsDate,
  //   datasets: [
  //     {
  //       label: "Expenses",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: dataExpenses,
  //     },
  //   ],
  // };

  //   const barDataProfit = {
  //     labels: labelsDate,
  //     datasets: [
  //       {
  //         label: "Gross Profits",
  //         backgroundColor: "rgba(255,99,132,0.2)",
  //         borderColor: "rgba(255,99,132,1)",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //         hoverBorderColor: "rgba(255,99,132,1)",
  //         data: dataProfit,
  //       },
  //     ],
  //   };

  const lineData = {
    labels: labelsDate,
    datasets: [
      {
        label: "Gross Profits",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "green",
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
        data: dataProfit,
      },
      {
        label: "Expenses",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "orange",
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
        data: dataExpenses,
      },
      {
        label: "Revenue",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "red",
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
        data: dataRevenue,
      },
    ],
  };

  //   const pieDataProfit = {
  //     labels: ["Profit", "Blue", "Yellow"],
  //     datasets: [
  //       {
  //         data: dataProfit,
  //         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
  //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
  //       },
  //     ],
  //   };

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Amount (USD)",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Quarterly Statements",
          },
        },
      ],
    },
  };
  return (
    <div className="chart-container">
      <div className="charts-wrapper">
        <div>
          <h3>Facebook - Quarterly Statements 2019-2017</h3>
        </div>
      </div>
      <div className="chart-info">
        <Line data={lineData} options={options} />
      </div>
      {/* <div className="chart-info">
        <Pie data={pieData} options={options} />
      </div> */}
    </div>
  );
}

export default ChartsContent;

// export default function Charts({ dataset }) {
//   const barData = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Example dataset",
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1,
//         hoverBackgroundColor: "rgba(255,99,132,0.4)",
//         hoverBorderColor: "rgba(255,99,132,1)",
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//     ],
//   };

//   const router = useRouter();
//   const { pid } = router;

//   const lineData = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Example dataset",
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: "rgba(75,192,192,0.4)",
//         borderColor: "rgba(75,192,192,1)",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "rgba(75,192,192,1)",
//         pointBackgroundColor: "#fff",
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: "rgba(75,192,192,1)",
//         pointHoverBorderColor: "rgba(220,220,220,1)",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Red", "Blue", "Yellow"],
//     datasets: [
//       {
//         data: [300, 50, 100],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       },
//     ],
//   };

//   const barOptions = {
//     scales: {
//       yAxes: [
//         {
//           scaleLabel: {
//             display: true,
//             labelString: "Dollar Amount",
//           },
//         },
//       ],
//       xAxes: [
//         {
//           scaleLabel: {
//             display: true,
//             labelString: "Month",
//           },
//         },
//       ],
//     },
//   };

//   const lineOptions = {
//     scales: {
//       yAxes: [
//         {
//           scaleLabel: {
//             display: true,
//             labelString: "Dollar Amount",
//           },
//         },
//       ],
//       xAxes: [
//         {
//           scaleLabel: {
//             display: true,
//             labelString: "Month",
//           },
//         },
//       ],
//     },
//   };

//   // useEffect(() => {
//   //     barData = fetch(`http://localhost:3001/api/bar`)
//   //         .then((response) => response.json())
//   //         .then((result) => {
//   //             console.log(result)
//   //             barData = result
//   //         })
//   // }, [])

//   return (
//     <div className="charts-div">
//       <Bar data={dataset} options={barOptions} />
//       <Line data={lineData} options={lineOptions} />
//       <Pie data={pieData} />
//     </div>
//     /* <style jsx>
//                 {`
//                  .charts-div {
//                     padding-top: 100px;
//                     background-color: #A8A7D4;
//                  }

//                  .main-nav {

//                  }
//                 `}
//             </style> */
//   );
// }

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:3001/api/bar`);
//   const json = await res.json();
//   console.log(json);
//   return {
//     props: {
//       dataset: json,
//     },
//   };
// }

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
