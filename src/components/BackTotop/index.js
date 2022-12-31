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
                <div>
                    <button
                        className='back-to-top-mobile animate__animated animate__fadeInUp'
                        onClick={scrollUp}
                    >
                        <i className="bi bi-chevron-double-up"></i>
                    </button>

                    <button
                        className='back-to-top animate__animated animate__fadeInUp'
                        onClick={scrollUp}
                    >
                        <i className="bi bi-chevron-double-up"></i>
                    </button>
                </div>
            )}
        </S.BackToTopButton>
    )
}

export default BackToTop;