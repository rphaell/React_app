import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Trade from './sections/trade/Trade';
import Staking from './sections/staking/Staking';
import Whitepaper from './sections/whitepaper/Whitepaper';
import Testimonials from './sections/testimonials/Testimonials';
import FAQ from './sections/FAQ/FAQ';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';


const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Trade />
      <Staking />
      <Whitepaper />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer/>
      <FloatingNav />
    </main>
  )
}

export default App