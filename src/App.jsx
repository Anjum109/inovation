import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import ProjectRoutes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-5'>
      <BrowserRouter>
        <ProjectRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
