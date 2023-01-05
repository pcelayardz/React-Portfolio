import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expirience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Expirience></Expirience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>

  );
}

export default App;
