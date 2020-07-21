import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navbar from "../../../components/Layouts/Navbar"
import Footer from "../../../components/Layouts/Footer";
import { Line, Bar, Pie } from "react-chartjs-2"

const Charts = ({ companies }) => {
    const router = useRouter()
    const { company } = router.query

    console.log(company)

    return (
        <React.Fragment>
            <Navbar />
            {/* Charts title image can go over here */}
            <div className="charts-div">
                <h2>{company}</h2>
                <Bar
                    // data={}
                />
                <Line
                    // data={}
                />
                <Pie
                    // data={}
                />
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

export const getStaticPaths= async () => {
    const res = await fetch("http://localhost:3001/charts")
    const companies = await res.json()

    const paths = await companies.map(ele => {
        let symbol = ele.symbol.toString()
    

        return {
            params: {
                company: symbol
            }
        }
    })

    return {
        paths,
        fallback: true,
    }
}


export const getStaticProps = async ctx => {
    const company = ctx.params.company.toString()
    console.log(company)
    const res = await fetch(`http://localhost:3001/charts/${company}`)
    const json = await res.json()

    return {
        props: {
            company
        }
    }
}

// export async function getStaticPaths(cxt) {
//     const res = await fetch(`http://localhost:3001/charts/${company}`)
//     const result = await res.json
//     console.log(companies)
    
// }

// export async function getStaticProps(cxt) {
//     const res = await fetch(`http://localhost:3001/charts/${company}`)
//     const result = await res.json()

//     console.log(result)

//     return {
//         props: {
            
//         }
//     }
// }

export default Charts