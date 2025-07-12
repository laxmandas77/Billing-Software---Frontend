import axios from "axios";


export const login = async(data) => {
    return await axios.post("http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/login",data);
}