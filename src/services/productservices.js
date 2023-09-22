import axios from "axios";

const URL_ROOT = "http://localhost:4001/api"

const getProdusctsService = async () => {
    const response = await axios.get (`${URL_ROOT}/jeweler`);
return response
}

const getProductService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/jeweler/${id}`)
    return response
}

export {getProdusctsService, getProductService}