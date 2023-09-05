"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Logo = ()=>{
    const {theme, setTheme} = useTheme();
    const [mounted , setMounted]= useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])

    if (!mounted) {
        return null
    }

    return(
        <>
            {
                theme==="light" ?
                    <Link className="logo" href={`/`} >
                        <img src="/icon-black.svg" alt="logo" className="w-full h-full object-contain" />
                    </Link>
                : null
                }
                {
                theme==="dark" ?
                    <Link className="logo" href={`/`} >
                        <img src="/icon-gray.png" alt="logo" className="w-full h-full object-contain" />
                    </Link>
                : null
            }
        </> 
    )
}

export default Logo