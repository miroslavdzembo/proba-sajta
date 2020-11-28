import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Oil from '../components/Oil';
import Ad from '../components/Ad';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Web prezentacija" />
    <Header />
    <Hero />
    <Oil />
    <Ad />
    <Products />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage;
