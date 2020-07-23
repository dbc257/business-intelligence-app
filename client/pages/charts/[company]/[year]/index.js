import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import DropdownMenu from "../../../../components/Buttons/DropDown"
import { useRouter } from "next/router"

function Charts() {
    const router = useRouter()
    const { company, year } = router.query

    const [financials, setFinancials] = useState([]);
    const [companyName, setCompanyName] = useState("")

    useEffect(() => {
        fetch(`https://bi-cube.herokuapp.com//${company}/${year}`)
            .then((response) => response.json())
            .then((result) => {
                let data = result.sort(function (a, b) {
                    let
                        aa = a.date.split('-').join(),
                        bb = b.date.split('-').join();
                    return aa < bb ? -1 : (aa > bb ? 1 : 0);
                });
                setFinancials(data);
                let companyLetter = (company.charAt(0).toUpperCase())
                setCompanyName(companyLetter + company.slice(1))
            });
    });

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
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Charts"
                breadcrumbTextOne="Explore"
                breadcrumbTextTwo={`${companyName}, Inc.`}
                breadcrumbUrl="/explore"
            />
            <div className="chart-container">
                <div className="charts-wrapper">
                    <DropdownMenu />
                    <div className="company-title">
                        <h3>{companyName}, Inc. - Quarterly Statements - {year == "2019" ? year + "-" + (Number(year) + 1) : year }</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <Line data={lineData} options={options} />
                </div>
                <div className="col1">
                    <Bar data={lineData} />
                </div>
            </div>
            <Footer />
            <style jsx>
                {`
                .col1 {
                    width: 50%;
                    float: left;
                }
                .row:after {
                    content: "";
                    display: table;
                    clear: both;
                }
                .charts-wrapper {
                    display: flex;
                }
                .company-title {
                    text-align: center;
                    margin: 0 auto;
                }
                @media screen and (max-width: 600px) {
                    .col1 {
                        width: 100%;
                    }
                }
                `}
            </style>
        </React.Fragment>
    );
}

export default Charts;