const Paginacion = ({currentPage,contriesPerPage, paginate,handlerPrev,handlerNext,countries}) => {

    const pageNum = []
    for(let i = 1; i <= Math.ceil(countries/contriesPerPage); i++){
        pageNum.push(i)
    }



    return (
        <div>
            <button onClick={handlerPrev} disabled={currentPage === 1}>PREV</button>
            {currentPage > pageNum.length && paginate(1)}
            <p>{`${currentPage} de ${pageNum.length}`}</p>
            <button onClick={handlerNext} disabled={currentPage === pageNum.length}>NEXT</button>
        </div>
    )
}


export default Paginacion