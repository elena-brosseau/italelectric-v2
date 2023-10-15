import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
    return (
        <header>
            <div class="header-content">
                <Link to="/">
                    <h1><span class="lobster">ItalElectri</span>Cars</h1>
                </Link>
                <nav>
                    <Link to="/">ABOUT</Link>
                    <Link to="/">CONTACT</Link>
                    <Link to="/merch">MERCHANDISE</Link>
                    <Link to="/build" id="header-btn">BUILD YOUR e-500</Link>
                </nav>
            </div>
        </header>
    )
}