import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import toast from 'react-hot-toast';
import { addCategory } from '../../Service/CategoryService';
import { AppContext } from '../../Context/AppContext';

const CategoryForm = () => {


    const {categories,setCategories} = useContext(AppContext);
    const [loading,setLoading] = useState(false);
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        bgColor:"#ffffff"
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({...data,[name]:value}));
    }


    const OnSubmitHandler = async(e) => {
        e.preventDefault();
       
        if(!image){
            toast.error("Please select Image for category");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append("category",JSON.stringify(data));
        formData.append("file",image);
        try {
           const response = await addCategory(formData);
           if(response.status === 201){
            setCategories([...categories,response.data]);
            toast.success("category added");
            setData({
                name:'',
                description:'',
                bgColor:""
            });
            setImage(false);
           }
        } catch (error) {
            console.error(error);
            toast.error("Error adding category");
        } finally{
            setLoading(false);
        }
    }

  return (
    <div className="mx-2 my-2">
        <div className="row">
            <div className="card col-md-12 form-container">
                <div className="card-body">
                    <form onSubmit={OnSubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="image" className='form-label'>
                                <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={68}/>
                            </label>
                            <input type="file" name="image" id="image"className='form-control'  hidden  onChange={(e) => setImage(e.target.files[0])}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input type="text" name="name" id="name" className='form-control' placeholder='Category Name' onChange={onChangeHandler} value={data.name} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className='form-label'>Description</label>
                            <textarea rows="5" name="description" id="description" className='form-control' placeholder='Write content here....' onChange={onChangeHandler} value={data.description}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bgColor" className='form-label'>Background color</label>
                            <br />
                            <input type="color" name='bgColor' id='bgColor' placeholder='#ffffff' className="form-control-color" onChange={onChangeHandler} value={data.bgColor} />
                        </div>
                        <button type="submit"  className='btn btn-warning w-100'>{loading ? "Loading....": "Submit"}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryForm