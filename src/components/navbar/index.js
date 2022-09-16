import React from 'react';
import breastsecaps from './../../assets/images/logo.png';

const Navbar = () =>
{
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <img src={ breastsecaps } width="100px" height="100px" alt=""/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white" aria-current="page"
                            href="/">Principal</a>
                        <a className="nav-link text-white" href="/camisetas">Camisetas</a>
                        <a className="nav-link text-white" href="/bones">Bonés</a>
                        <a className="nav-link text-white" href="#descer">Contatos</a>
                    </div>
                </div>
                <div className="text-white">
                    Breast & Caps
                </div>
            </div>
        </nav>
    )
}

export default Navbar;