import axios from "axios";

export const addItem = async(item) => {
    return await axios.post("http://localhost:8080/api/admin/items",item,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}

export const deleteItem = async(itemId) => {
    return await axios.delete(`http://localhost:8080/api/admin/items/${itemId}`,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
}

export const fetchItems = async() => {
    return await axios.get("http://localhost:8080/api/items",{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
}