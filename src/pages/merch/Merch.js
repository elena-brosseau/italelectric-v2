
import { MerchItem } from '../../features/merchItem/MerchItem'
import './merch.css'

export function Merch() {

    const merchItems = [
        {
            name: 'Baseball Cap',
            price: '$19.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        },
        {
            name: 'Tee Shirt',
            price: '$29.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        }
    ]

    return (
        <main>
            <div class="merch-wrapper">
                {merchItems.map((item, i) => (
                    <MerchItem
                        item={merchItems[i]}
                    />
                ))}
            </div>
        </main>
    )
}