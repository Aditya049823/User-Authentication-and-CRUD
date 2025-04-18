import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../redux/userSlice";
import { v4 as uuidv4 } from 'uuid'


export default function UserForm(){

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[edit,setIsEdit]=useState(false)

    const dispatch=useDispatch();
    const editUser=useSelector((state)=>state.user.editingUser);

    useEffect(()=>{
        if(editUser){
            setName(editUser.name)
            setEmail(editUser.email)
            setIsEdit(true);
        }
    },[editUser]);

    const handleSubmit = () => {
        if (!name || !email) return;
    
        if (edit) {
          dispatch(updateUser({ id: editUser.id, name, email }));
        } else {
          dispatch(addUser({ id: uuidv4(), name, email }));
        }
    
        setName('');
        setEmail('');
        setIsEdit(false);
      };

    return(
        <>
            <div className="mb-4 space-y-2">
                <input
                    className="p-2 border rounded w-full"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="p-2 border rounded w-full"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    {edit ? 'Update User' : 'Add User'}
                </button>
            </div>
        </>
    )
}