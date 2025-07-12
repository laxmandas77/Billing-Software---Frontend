import axios from "axios";

export const addCategory = async(category) => {
    return await axios.post('http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/admin/categories',category,
        {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}});
}

export const deleteCategory = async(categoryId) => {
    return await axios.delete(`http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/admin/categories/${categoryId}`,
        {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}}
    );
}

export const fetchCategories = async() => {
    return await axios.get('http://ec2-13-201-134-183.ap-south-1.compute.amazonaws.com:8080/api/categories',
        {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json',}});
}