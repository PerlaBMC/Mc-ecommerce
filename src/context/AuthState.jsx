import { useReducer } from "react"
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import PropTypes from "prop-types";

import { loginService, registerService } from "../services/authService"

const initialState = {
    user: null,
}

const AuthState = ({children}) => {

  const [ globalState, dispatch ] = useReducer(authReducer, initialState);

  const iniciarSesion = async (form) => {
    try {
        const resp = await loginService(form);
        dispatch({
            type: "INICIAR_SESION",
            payload: resp.data.data
        })
        localStorage.setItem ("token", resp.data.token)
            
      } catch (error) {
        console.log(error.response.data)
      }
  };

  const registrarUsuario = async (form) => {
    try {
      const resp = await registerService(form);

      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const logout = () => {
    dispatch({
        type: "LOGOUT",
        payload: null
    });

    localStorage.removeItem("token")
  }


  return (
   <AuthContext.Provider value={{user: globalState.user, iniciarSesion, logout, registrarUsuario}}>
    {children}
   </AuthContext.Provider>
  )
}

AuthState.propTypes = {
    children: PropTypes.node,
}

export default AuthState