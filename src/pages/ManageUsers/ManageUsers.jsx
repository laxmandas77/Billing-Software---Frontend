import React, { useEffect, useState } from 'react';
import './ManageUsers.css';
import UserForm from '../../Components/UsersForm/UserForm';
import UsersList from '../../Components/UsersList/UsersList';
import { fetchUsers } from '../../Service/userService';
import toast from 'react-hot-toast';

const ManageUsers = () => {

  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  

  useEffect(() => {
    async function fetchusers() {
      try {
        setLoading(true);
        const response = await fetchUsers();
        setUsers(response.data);
        console.log(response.data)
      } catch(error){
        console.log(error);
        toast.error("Unable to fetch Users");
      }finally{
        setLoading(false);
      }
    };
    fetchusers();
  },[]);


  return (
    <div className="users-container text-light">
        <div className="left-column">
            <UserForm  setUsers={setUsers}/>
        </div>
        <div className="right-column">
            <UsersList users={users} setUsers={setUsers}/>
        </div>
    </div>
  )
}

export default ManageUsers