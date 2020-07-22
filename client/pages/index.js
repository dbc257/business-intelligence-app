import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFour/MainBanner";
// import OurServices from "../components/HomeFour/OurServices";
import AboutUs from "../components/HomeFour/AboutUs";
// import FunFacts from "../components/Common/FunFacts";
// import SolutionsTab from "../components/Common/SolutionsTab";
// import FeaturedService from "../components/HomeFour/FeaturedService";
// import Testimonial from '../components/Common/Testimonial';
// import GetStartedProject from "../components/Common/GetStartedProject";
// import BlogPost from "../components/Common/BlogPost";
// import ContactForm from "../components/Contact/ContactForm";
import CustomerStyleTwo from "../components/Common/CustomerStyleTwo";
import Footer from "../components/Layouts/Footer";
import { connect } from "react-redux";
// import { authenticated } from "../store/login/action";

class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainBanner />
        {/* <OurServices /> */}
        <AboutUs />
        {/* <FunFacts /> */}
        {/* <SolutionsTab /> */}
        {/* <FeaturedService /> */}
        {/* <Testimonial /> */}
        {/* <GetStartedProject /> */}
        {/* <BlogPost /> */}
        {/* <ContactForm /> */}
        <CustomerStyleTwo />
        <Footer />
      </React.Fragment>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(authenticated(true));
    // store.dispatch(addCount())
  }
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // isLoggedIn: bindActionCreators(authenticated, dispatch),
//     authenticated: bindActionCreators(authenticated(true), dispatch),
//     // startClock: bindActionCreators(startClock, dispatch),
//   };
// };
// // export default Login;
// // export default connect((state) => state)(Login);
// export default connect(null, mapDispatchToProps)(Index4);

export default connect((state) => state)(Index4);

// import Link from 'next/link'
// import { connect } from 'react-redux'
// import Clock from './Clock'
// import AddCount from './AddCount'

// const Page = ({ title, linkTo, tick }) => (
//   <div>
//     <h1>{title}</h1>
//     <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
//     <AddCount />
//     <nav>
//       <Link href={linkTo}>
//         <a>Navigate</a>
//       </Link>
//     </nav>
//   </div>
// )

// export default connect((state) => state)(Page)

// import { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import Page from '../components/Page'
// import { addCount } from '../store/count/action'
// import { wrapper } from '../store/store'
// import { serverRenderClock, startClock } from '../store/tick/action'

// const Index = (props) => {
//   useEffect(() => {
//     const timer = props.startClock()

//     return () => {
//       clearInterval(timer)
//     }
//   }, [props])

//   return <Page title="Index Page" linkTo="/other" />
// }

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(serverRenderClock(true))
//   store.dispatch(addCount())
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCount: bindActionCreators(addCount, dispatch),
//     startClock: bindActionCreators(startClock, dispatch),
//   }
// }

// export default connect(null, mapDispatchToProps)(Index)
