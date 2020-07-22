import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import DropDown from "../Buttons/DropDown"

export default function ChartsFacebook2018() {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/facebook/2018")
      .then((response) => response.json())
      .then((result) => {
        let data = result.sort(function (a, b) {
          let
            aa = a.date.split('-').join(),
            bb = b.date.split('-').join();
          return aa < bb ? -1 : (aa > bb ? 1 : 0);
        });
        setFinancials(data);
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
          <h3>Facebook - Quarterly Statements 2018-2019</h3>
          <DropDown />
        </div>
      </div>
      <div className="chart-info">
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
}