import React from "react";

function Brand() {
    const BrandName = "pLexis"
    return (
        <span className="navbar-brand mb-0 h1">
            {BrandName}
        </span>
    )
}

function ProfileButton() {
    return (
        <button type="button" className="btn btn-light position-relative">
            Profile
            <span
                className="position-absolute top-0 start-100 translate-middle
                p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
            </span>
        </button>
    )
}


function PrimaryHeader() {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <Brand />
                <ProfileButton />
            </div>
        </nav>
    )
}

export default PrimaryHeader;