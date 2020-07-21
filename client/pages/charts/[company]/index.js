import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navbar from "../../../components/Layouts/Navbar"
import Footer from "../../../components/Layouts/Footer";
import { Line, Bar, Pie } from "react-chartjs-2"

const Charts = () => {
    const router = useRouter()
    const { company } = router.query

    let
        data,
        allQuarters,
        allRevenue,
        allExpenses

    useEffect(() => {
        fetch(`http://localhost:3001/${company}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                data = result
                allQuarters = data.map(ele => {
                    return ele.date
                })

                allRevenue = data.map(ele => {
                    return ele.revenue
                })

                allExpenses = data.map(ele => {
                    return ele.costAndExpenses
                })

                console.log(allExpenses)
            })
    })


        return (
            <React.Fragment>
                <Navbar />
                {/* <PageBanner
                pageTitle="Charts"
                breadcrumbTextOne="Home"
                breadcrumbTextTwo="About Us"
                breadcrumbUrl="/"
            /> */}
                <div className="charts-div">
                    <h2>{company}</h2>
                    {/* <Bar
                        data={barData}
                        options={barOptions}
                    />
                    <Line
                        data={lineData}
                        options={lineOptions}
                    />
                    <Pie data={pieData} /> */}
                </div>
                <style jsx>
                    {`
                 .charts-div {
                    padding-top: 100px;
                 }   

                 .main-nav {

                 }
                `}
                </style>
                <Footer />
            </React.Fragment>
        )
    }


// export async function getStaticPaths() {
//     const res = await fetch("http://localhost:3001/companies")
//     const companies = await res.json()

//     console.log(companies)


//     const paths = companies.map(ele => `/charts/${ele.name}`)

//     return {
//         paths,
//         fallback: true,
//     }
// }


// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:3001/companies`)
//     const json = await res.json()
//     console.log(json)
//     return {
//         props: {
//             json
//         }
//     }
//   }


    // useEffect(() => {
    //     barData = fetch(`http://localhost:3001/api/bar`)
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result)
    //             barData = result
    //         })
    // }, [])


        // const barData = {
        //     labels: ["January", "February", "March", "April", "May", "June", "July"],
        //     datasets: [
        //         {
        //             label: "My First dataset",
        //             backgroundColor: "rgba(255,99,132,0.2)",
        //             borderColor: "rgba(255,99,132,1)",
        //             borderWidth: 1,
        //             hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //             hoverBorderColor: "rgba(255,99,132,1)",
        //             data: [65, 59, 80, 81, 56, 55, 40],
        //         },
        //     ],
        // };


        // const lineData = {
        //     labels: ["January", "February", "March", "April", "May", "June", "July"],
        //     datasets: [
        //         {
        //             label: "My First dataset",
        //             fill: false,
        //             lineTension: 0.1,
        //             backgroundColor: "rgba(75,192,192,0.4)",
        //             borderColor: "rgba(75,192,192,1)",
        //             borderCapStyle: "butt",
        //             borderDash: [],
        //             borderDashOffset: 0.0,
        //             borderJoinStyle: "miter",
        //             pointBorderColor: "rgba(75,192,192,1)",
        //             pointBackgroundColor: "#fff",
        //             pointBorderWidth: 1,
        //             pointHoverRadius: 5,
        //             pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //             pointHoverBorderColor: "rgba(220,220,220,1)",
        //             pointHoverBorderWidth: 2,
        //             pointRadius: 1,
        //             pointHitRadius: 10,
        //             data: [65, 59, 80, 81, 56, 55, 40],
        //         },
        //     ],
        // };

        // const pieData = {
        //     labels: ["Red", "Blue", "Yellow"],
        //     datasets: [
        //         {
        //             data: [300, 50, 100],
        //             backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        //             hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        //         },
        //     ],
        // };

        // const barOptions = {
        //     scales: {
        //         yAxes: [
        //             {
        //                 scaleLabel: {
        //                     display: true,
        //                     labelString: "Dollar Amount",
        //                 },
        //             },
        //         ],
        //         xAxes: [
        //             {
        //                 scaleLabel: {
        //                     display: true,
        //                     labelString: "Month",
        //                 },
        //             },
        //         ],
        //     },
        // };

        // const lineOptions = {
        //     scales: {
        //         yAxes: [
        //             {
        //                 scaleLabel: {
        //                     display: true,
        //                     labelString: "Dollar Amount",
        //                 },
        //             },
        //         ],
        //         xAxes: [
        //             {
        //                 scaleLabel: {
        //                     display: true,
        //                     labelString: "Month",
        //                 },
        //             },
        //         ],
        //     },
        // };



export default Charts