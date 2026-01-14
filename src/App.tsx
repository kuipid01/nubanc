import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SuccessPlan from './components/SuccessPlan';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white font-manrope selection:bg-accent-gold/30 selection:text-primary-navy">
      <WhatsAppButton />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <SuccessPlan />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
