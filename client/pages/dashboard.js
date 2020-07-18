import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import DashboardLayout from "../components/Dashboard/DashboardLayout"
import Footer from '../components/Layouts/Footer';
// import styles from "../components/CssModules/dashboard.module.css"

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Navbar />
                <DashboardLayout />
                <Footer />
            </>
        )
    }
}