import { useState } from 'react';
import './App.scss'
import { Header } from './sections/Header'
import { Sidebar } from './sections/Sidebar'
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Testimonals } from './sections/Testimonals';
import { Footer } from './sections/Footer';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="app__body">
        <Sidebar open={isSidebarOpen} />
        <div className="app__content">
          <main className="main">
            <Hero />
            <Features />
            <Testimonals />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
