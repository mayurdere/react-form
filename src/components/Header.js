import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-blue">
                    <a className="navbar-brand title-name" href="#">Analytics Fox</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link nav-link-title" href="#">About Us <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-title" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-title" href="#"  aria-disabled="true">Careers</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    
        );
        }
}

export default Header;