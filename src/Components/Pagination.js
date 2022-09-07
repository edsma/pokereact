import React from "react";

const Pagination = (props) => {
    const {onLeftClick, onRightClick,page,totalPages} = props;
    return (
        <div className="pagination">
            <button onClick={onRightClick}> <span role='img' aria-label="left">👉🏻</span></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onLeftClick}><span role='img' aria-label="right">👈🏻</span></button>
        </div>
    );
}


export default Pagination;