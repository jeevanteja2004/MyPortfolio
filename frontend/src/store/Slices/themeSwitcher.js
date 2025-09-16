import { createSlice } from "@reduxjs/toolkit";
const themeSwitcher=createSlice({
    name:"theme",
    initialState:{isDark:true},
    reducers:{
        changeThemeSwitch:(state,action)=>{
            state.isDark=!state.isDark
        }
    }
})
export const { changeThemeSwitch } = themeSwitcher.actions
export default themeSwitcher.reducer