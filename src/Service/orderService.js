import axios from "axios";

export const latestorders = async() => {
    return await axios.get("http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/orders/latest",{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
}

export const createOrder = async(order) => {
    return await axios.post("http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/orders",order,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
}

export const deleteOrder = async(id) => {
    return await axios.delete(`http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/orders/${id}`,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}