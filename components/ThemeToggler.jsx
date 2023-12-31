"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { BsCircleHalf } from "react-icons/bs"

const ThemeToggler = ()=>{
    const {theme, setTheme} = useTheme();
    
    useEffect(()=>{
        setTheme(localStorage.getItem('theme') || 'light')
    })

    const changeTheme = ()=>{
        if(theme==='light'){
            setTheme('dark')
            localStorage.setItem('theme', `dark`);
        }
        else{
            setTheme('light')
            localStorage.setItem('theme', `light`);
        }
        
    }
    
    return(
        <button type="button" className="header-icon" onClick={()=>changeTheme()}>
            <BsCircleHalf />
        </button>
    )
}

export default ThemeToggler 