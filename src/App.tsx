import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/DevBanner';
import { useEffect } from 'react';
import HALO from 'vanta/src/vanta.halo';

function App() {
  useEffect(() => {
    HALO({
      el: '#bg',
    });
  }, []);

  return (
    <div className="text-white bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-dvh opacity-30" id="bg"></div>
      <div className="relative z-10 h-screen flex flex-col">
        <Banner />
        <Header />
        <main className="px-4 flex-1 justify-center flex flex-col space-y-10">
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
