import React from "react";
import * as S from './styles';



const Pagination = ({setOffset, maxButtonPagination, limit, firstPagePagination, currentPagePagination, totalPages}) => {

    function onPagechange(page) {
        setOffset(Number((page - 1) * limit));
    }

    return (
        <S.Pagination>
            <button
                onClick= {()=> onPagechange(currentPagePagination - 1)}  
                disabled= {currentPagePagination === 1}  
            >
                Anterior
            </button>

            {Array.from({length: Math.min(maxButtonPagination, totalPages) }) 
                .map((_, index) => index + firstPagePagination)
                .map((page) => (
                    <button
                        className={
                            page === currentPagePagination 
                            ? 'pagination__item--active' 
                            : null 
                        }
                        value={page}
                        onClick={(e)=> onPagechange(page)}
                        key={page}
                    >
                        {page}
                    </button>
                ))
            }

            <button
                onClick={()=> onPagechange(currentPagePagination + 1)} 
                disabled= {currentPagePagination === totalPages}   
            >
                Próximo
            </button>
        </S.Pagination>
    )
}

export default Pagination;