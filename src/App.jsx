import { useState } from 'react'

import './App.css'

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
      <Banner title='Dijital Hizmetler' />
      <Footer />
        </>
  )
}

export default App
