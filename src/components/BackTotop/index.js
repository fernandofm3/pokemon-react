import React from 'react';
import { useEffect, useState } from 'react';
import * as S from "./styles";

function BackToTop () {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 500) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    },[])

    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <S.BackToTopButton>
            {BackToTopButton && (
                <button
                    className='animate__animated animate__fadeInUp'
                    onClick={scrollUp}
                >
                    <i className="bi bi-chevron-double-up"></i>
                </button>
            )}
        </S.BackToTopButton>
    )
}

export default BackToTop;