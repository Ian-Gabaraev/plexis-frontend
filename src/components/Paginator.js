import React from "react";

function getPagesCount(totalCount, maxCount) {
    const pages = Math.floor(totalCount / maxCount)
    return pages + 1
}

function PaginatorButton(props) {
    return (
        <li className="page-item">
            <a className="page-link" href="#">{props.number}</a>
        </li>
    )
}

function Paginator(props) {
    const pagesCount = getPagesCount(props.count, props.max)
    const pageButtonNumbers = [...Array(pagesCount).keys()].map(
        pageNumber => {
            return pageNumber + 1
        }
    )

    const allPagesButtons = pageButtonNumbers.map(
        pageNumber => {
            return <PaginatorButton number={pageNumber} key={Math.random()}/>
        }
    )

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                </li>
                {allPagesButtons}
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator;