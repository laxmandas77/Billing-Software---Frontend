import axios from "axios";

export const fetchDashboardData = async() => {
    return await axios.get("http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/dashboard",{headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}