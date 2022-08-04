export default function MultipleChoice() {

    return (
        <div className="container text-center">
            <div className="row">

                <div className="btn-group " role="group" aria-label="Basic checkbox toggle button group">

                    <input type="checkbox" className="btn-check " id="btncheck1" autoComplete="off"/>
                    <label className="btn btn-outline-dark" htmlFor="btncheck1">Checkbox 1</label>

                    <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
                    <label className="btn btn-outline-dark" htmlFor="btncheck2">Checkbox 2</label>

                    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                    <label className="btn btn-outline-dark" htmlFor="btncheck3">Checkbox 3</label>

                    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                    <label className="btn btn-outline-dark" htmlFor="btncheck3">Checkbox 3</label>
                </div>
            </div>
        </div>
    )
}