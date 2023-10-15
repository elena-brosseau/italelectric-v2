import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {
    return (
        <footer>
            <div class="left-footer">
                <h3>ITALELECTRICARS</h3>
                <p>e-500 is a trademark of IBennett LLC</p>
            </div>
            <div class="right-footer">
                <Link to="/">ABOUT</Link>
                <Link to="/">CONTACT</Link>
                <Link to="/merch">MERCHANDISE</Link>
                <Link to="/build">BUILD YOUR e-500</Link>
            </div>
        </footer>
    )
}