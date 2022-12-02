import React from "react";
import * as S from './styles';



const Pagination = ({Search,
                    setOffset,
                    maxButtonPagination,
                    limit,
                    firstPagePagination,
                    currentPagePagination,
                    totalPages,
                    SelectorType,
                    SelectorColor,
                    setRemoveLoading
                    }) => {

    function onPagechange(page) {
        setOffset(Number((page - 1) * limit));
        setRemoveLoading(false);        
    }

    return (
        <S.Pagination 
            className={
                Search !== ""
                ? 'item-display-none' 
                : 
                SelectorType !== ""
                ? 'item-display-none' 
                : 
                SelectorColor !== ""
                ? 'item-display-none' 
                : null                            
            }
        >
            <ul>
                <li
                    className={
                        currentPagePagination === 1
                        ? 'item-display-none' 
                        : null                            
                    }
                >
                    <button
                        onClick= {()=> onPagechange(currentPagePagination - 1)}  
                        disabled= {currentPagePagination === 1}  
                    >
                        &lt;&lt;
                    </button>
                </li>

                <li 
                    className={
                        currentPagePagination >= 6
                        ? null 
                        : 'item-display-none'
                    }
                >
                    <button                       
                        onClick={()=> onPagechange(1)}                           
                    >
                        1
                    </button>
                </li>

                <li
                    className={
                        currentPagePagination >= 6
                        ? null 
                        : 'item-display-none'
                    }
                >
                    <button disabled >
                        ...
                    </button>
                </li>

                {Array.from({length: Math.min(maxButtonPagination, totalPages) }) 
                    .map((_, index) => index + firstPagePagination)
                    .map((page) => (
                        <li key={page}>
                            <button
                                className={
                                    page === currentPagePagination 
                                    ? 'pagination__item--active' 
                                    : null 
                                }
                                value={page}
                                onClick={()=> onPagechange(page)}
                                disabled= {page === currentPagePagination}
                                key={page}
                            >
                                {page}
                            </button>
                        </li>
                    ))
                }

                <li 
                    className={
                        currentPagePagination >= (totalPages - 4)
                        ? 'item-display-none' 
                        : null                            
                    }
                >
                    <button disabled >
                        ...
                    </button>
                </li>

                <li
                    className={
                        currentPagePagination >= (totalPages - 4)
                        ? 'item-display-none' 
                        : null                            
                    }
                >
                    <button                       
                        onClick={()=> onPagechange(totalPages)}                           
                    >
                        {totalPages}
                    </button>
                </li>

                <li
                    className={
                        currentPagePagination === totalPages
                        ? 'item-display-none' 
                        : null                            
                    }
                >
                    <button
                        onClick={()=> onPagechange(currentPagePagination + 1)} 
                        disabled= {currentPagePagination === totalPages}   
                    >
                        &gt;&gt;
                    </button>
                </li>
            </ul>
        </S.Pagination>
    )
}

export default Pagination;