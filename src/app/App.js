import './App.css';
import { Features } from './components/Features';
import { LandingPageHeader } from './components/Header/LandingPageHeader';
import { Hero } from './components/Hero';

export function App() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
      <Features />
    </div>
  );
}

