import { createSlice, current } from "@reduxjs/toolkit"


const initialState={
    currentUser:null,
    users:[],
    editingUser:null,
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.currentUser=action.payload
        },
        // logout:(state)=>{
        //     state.currentUser=null
        //},
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
            state.users=state.users.filter(u=>u.id!==action.payload)
        },
        updateUser: (state, action) => {
            const updatedUser = action.payload;
            const index = state.users.findIndex(u => u.id === updatedUser.id);
            if (index !== -1) {
                state.users[index] = updatedUser;
            }
            state.editingUser = null;
        },
        setisEdit: (state, action) => {
            state.editingUser = action.payload;
          },
    }
})

export const { login, logout, addUser, updateUser, deleteUser,setisEdit } = userSlice.actions;
export default userSlice.reducer;
