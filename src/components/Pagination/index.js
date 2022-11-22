import React from "react";

const Pagination = ({setOffset, pages, limit}) => {
    return (
        <div>
                {Array.from(Array(pages), (item, index) => {
                    return <button
                                value={index}
                                onClick={(e)=> setOffset(Number(e.target.value * limit))}
                                key={index}
                            >{index + 1}</button>
            })}
        </div>
    )
}

export default Pagination;