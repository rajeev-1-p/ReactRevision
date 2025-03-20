import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import First from './First'


function MyApp(){
  const username = "rajeev"

  return (
    <div>
      <h1>Custom App  of {username}</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  
    <MyApp />
  
)
