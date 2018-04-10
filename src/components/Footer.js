import React from 'react';
import './Footer.css';
import './Destination';

function Footer(props) {
    return(
        <footer className="App-footer">
            <div className="footer d-flex justify-content-center">
                <ul className="nav">
                    <li className="nav-li">
                        <a className="nav-link" href={props.Destination.jupiter}>Jupiter</a>
                    </li>
                    <li className="nav-li">
                        <a className="nav-link" href={props.Destination.neptune}>Neptune</a>
                    </li>
                    <li className="nav-li">
                        <a className="nav-link" href={props.Destination.uranus}>Uranus</a>
                    </li>
                    <li className="nav-li">
                        <a className="nav-link" href={props.Destination.nemesis}>Nemesis</a>
                    </li>
                </ul>
            </div>
            <div className="copy text-center pb-1">
                <p>&copy; 2018 Taylor Bailey</p>
            </div>
        </footer>
        
    )
}

export default Footer;