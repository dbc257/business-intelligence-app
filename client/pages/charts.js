import react from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import { useRouter } from "next/router"


export default function Charts({ dataset }) {
    const barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    const router = useRouter()
    const { pid } = router

    const lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
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


    // useEffect(() => {
    //     barData = fetch(`http://localhost:3001/api/bar`)
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result)
    //             barData = result
    //         })
    // }, [])



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
                <Bar
                    data={dataset}
                    options={barOptions}
                />
                <Line
                    data={lineData}
                    options={lineOptions}    
                />
                <Pie data={pieData} />
            </div>
            <style jsx>
                {`
                 .charts-div {
                    padding-top: 100px;
                    background-color: #A8A7D4;
                 }   

                 .main-nav {

                 }
                `}
            </style>
            <Footer />
        </React.Fragment>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3001/api/bar`)
    const json = await res.json()
    console.log(json)
    return {
        props: {
            dataset: json
        }
    }
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