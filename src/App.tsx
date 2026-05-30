import { Awards } from './components/Awards';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { G2CServices } from './components/G2CServices';
import { Header } from './components/Header';
import { HeroCarousel } from './components/Carousel';
import { Partners, PromoBanner } from './components/Partners';
import { PrimaryServices } from './components/PrimaryServices';
import { ServicesCounter } from './components/ServicesCounter';
import { ServicesTables } from './components/ServicesTables';
import { Testimonials } from './components/Testimonials';
import { WhatWeDo } from './components/WhatWeDo';
import { HERO_SLIDES } from './data/siteData';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section id="home" className="scroll-mt-36">
          <HeroCarousel images={HERO_SLIDES} />
        </section>

        <section id="about" className="scroll-mt-36">
          <WhatWeDo />
        </section>

        <Awards />

        <section id="services" className="scroll-mt-36">
          <PrimaryServices />
        </section>

        <ServicesCounter />
        <Testimonials />
        <Faq />
        <G2CServices />
        <ServicesTables />
        <PromoBanner />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
