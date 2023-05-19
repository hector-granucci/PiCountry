import style from "./paginacion.module.css"

const Paginacion = ({ currentPage, contriesPerPage, paginate, handlerPrev, handlerNext, countries }) => {

    const pageNum = []
    for (let i = 1; i <= Math.ceil(countries / contriesPerPage); i++) {
        pageNum.push(i)
    }



    return (
        <div className={style.Pag}>

            <div className={style.prev}>
                <button onClick={handlerPrev} disabled={currentPage === 1}>PREV</button>
            </div>

            <div className={style.numbers}>
                {currentPage > pageNum.length && paginate(1)}
                <p>{`${currentPage} de ${pageNum.length}`}</p>
            </div>

            <div className={style.Next}>
                <button onClick={handlerNext} disabled={currentPage === pageNum.length}>NEXT</button>

            </div>

        </div>
    )
}


export default Paginacion