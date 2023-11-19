/* import farmPhoto from "./assets/images/me-on-farm.jpg" */
import { Outlet } from 'react-router-dom';

import Header from "./componets/header"
import Footer from "./componets/footer" 


{/* <link rel="stylesheet" href="assets/style.css">
<link rel="stylesheet" href="assets/reset.css"> */}
function App() {


  return (
    <div>

    <Header/>


    
    <Outlet/>

      
       
   
    
        <Footer/>
        {/* <h1 id="Contact-Me">Contact me</h1> */}
    {/*     <ul className="contact-list">
            
            <li><a href="tel:+123-456-7890">123-456-7890</a> </li>
            <li><a href="mailto:neverclear@ymail.com" target="_blank">Email Me</a></li>
            <li><a href="https://github.com/2dogsandaguy" target="_blank">GitHub</a></li>
        </ul> */}
    



    </div>
  )
}

export default App
