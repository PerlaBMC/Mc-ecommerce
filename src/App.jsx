import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/productState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import './App.css'

const App = () => {
  return (
  <>
  <AuthState>
    <ProductState>
    <AppRouter/>
    </ProductState>
  </AuthState>
  </>
  )
}

export default App