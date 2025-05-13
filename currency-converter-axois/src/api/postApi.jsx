import axios from "axios";


// step 1 : create instance of axios 
const api = axios.create({
    baseURL:"https://v6.exchangerate-api.com/v6/45c612bcd777b7689e88121d",
})

///we need to create a get request 
export const currencyConverter=(fromCurrency,toCurrency,amount)=>{

    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
};