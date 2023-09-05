"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsCircleHalf } from "react-icons/bs"

const ThemeToggler = ()=>{
    const {theme, setTheme} = useTheme();
    const [isDark, setIsDark] = useState(false);
    const [mounted , setMounted]= useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])
    
    useEffect(()=>{
        isDark ? setTheme('dark'): setTheme('light')
    },[isDark])
    
    if (!mounted) {
        return null
    }
    
    return(
        <button type="button" className="header-icon" onClick={()=>setIsDark(!isDark)}>
            <BsCircleHalf />
        </button>
    )
}

export default ThemeToggler 