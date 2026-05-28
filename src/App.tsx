import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-background text-text-primary min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
