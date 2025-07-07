import axios from "axios";

export const createRazorpayOrder = async(data) => {
    return await axios.post('http://localhost:8080/api/payments/create-order',data,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
}

export const verifyPayment = async(paymentData) => {
    return await axios.post('http://localhost:8080/api/payments/verify',paymentData,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}