import './merchItem.css';

export function MerchItem({ item }) {
    return (
        <div class="merch-item">
            <img src={item.img.src} alt={item.img.alt}/>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    )
}