"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Logo = ()=>{
    const {theme, setTheme} = useTheme();
    const [isDark , setIsDark]= useState();


    useEffect(()=>{
        if(theme==='light'){
            setIsDark(false)
        }
        else if (theme==='dark'){
            setIsDark(true)
        }
    },[theme])

    return(
        <>
            {
                isDark ?
                    <Link className="logo" href={`/`} >
                        <img src="/icon-gray.png" alt="logo" className="w-full h-full object-contain" />
                    </Link>
                : 
                    <Link className="logo" href={`/`} >
                            <img src="/icon-black.svg" alt="logo" className="w-full h-full object-contain" />
                    </Link>
                
            }
        </> 
    )
}

export default Logo