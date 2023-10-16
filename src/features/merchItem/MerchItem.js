import { Link } from 'react-router-dom';
import './merchItem.css';

export function MerchItem({ item }) {
    return (
        <Link to={item.id}>
            <div class="merch-item">
                <img src={item.img.src} alt={item.img.alt}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        </Link>
    )
}