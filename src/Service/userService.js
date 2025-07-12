import axios from "axios";

export const addUser = async(user) => {
    return await axios.post('http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/admin/register',user,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}

export const deleteUser = async(userId) => {
    return await axios.delete(`http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/admin/users/${userId}`,{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}

export const fetchUsers = async() => {
    return await axios.get("http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/admin/users",{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}