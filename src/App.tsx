import { useState } from 'react'
import './App.css'
import CustomerForm from './components/CustomerForm'
import Hello from './components/Hello'
import { CustomerProvider } from './contexts/customer'

type CustomerForm = {
  name: string,
  email: string
}

function App() {

  return (
    <div className="App">
      <CustomerProvider>
        <Hello />
        <CustomerForm />
        </CustomerProvider>
    </div>
  )
}

export default App
