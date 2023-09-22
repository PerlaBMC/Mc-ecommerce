import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PublicNavbar from "../components/navBar";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";



const AppRouter = () => {
  return (
   <>
   <Router>
    <PublicNavbar/>
    <div className="container pt-5">
    <Routes>
       <Route path="/" element = {<HomePage/>} />
       <Route path="/about" element = {<AboutPage/>} />
       <Route path="/login" element = {<LoginPage/>} />
       <Route path="/register" element={<RegisterPage/>}/>  
       <Route path="/products" element = {<ProductsPage/>}/>
       <Route path="/products/:id" element= {<ProductPage/>}/>
       </Routes>
    </div>
   </Router>
   </>
  )
}

export default AppRouter