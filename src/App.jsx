import { Outlet } from 'react-router-dom';

import Header from "./componets/header"

import Footer from "./componets/footer" 
 
function App() {


  return (
    <div>
    <Header/>
    <Outlet/>    
    <Footer/>
    </div>
  )
}

export default App
