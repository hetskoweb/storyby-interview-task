import { useState } from 'react';
import './App.scss'
import { Header } from './sections/Header'
import { Sidebar } from './sections/Sidebar'
import { Hero } from './sections/Hero';

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
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
