import  axios  from "axios"

const URL_ROOT = "http://localhost:4001/api/auth"

const loginService = async (form) => {
    const resp = await axios.post(`${URL_ROOT}/login`, form);
    return resp;
  };

  const registerService = async (form) => {
    const resp = await axios.post(`${URL_ROOT}/registrar`, form);
    return resp;
  };

  export { loginService, registerService};