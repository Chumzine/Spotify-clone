import { Features } from '../../components/Features';
import { LandingPageHeader } from '../../components/Header/LandingPageHeader';
import { Hero } from '../../components/Hero';
import { PremiumSection } from '../Premium';

export function Landing() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
      <Features />
      <PremiumSection />
    </div>
  );
}
