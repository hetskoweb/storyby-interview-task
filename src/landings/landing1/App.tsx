import { useState } from 'react';
import './App.scss'
import { Header } from './sections/Header'
import { Sidebar } from './sections/Sidebar'

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="app__body">
        <Sidebar open={isSidebarOpen} />
        <div className="app__content"></div>
      </div>
    </div>
  )
}

export default App
