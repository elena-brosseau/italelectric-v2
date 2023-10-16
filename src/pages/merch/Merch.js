
import { MerchItem } from '../../features/merchItem/MerchItem'
import './merch.css'

export function Merch() {

    const merchItems = [
        {
            id: '1',
            name: 'Baseball Cap',
            price: '$19.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        },
        {
            id: '2',
            name: 'Tee Shirt',
            price: '$29.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        },
        {
            id: '3',
            name: 'Tee Shirt',
            price: '$29.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        },
        {
            id: '4',
            name: 'Tee Shirt',
            price: '$29.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        },
        {
            id: '5',
            name: 'Tee Shirt',
            price: '$29.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        },
        {
            id: '6',
            name: 'Tee Shirt',
            price: '$29.99',
            img: {
                src: '/assets/jolly.png',
                alt: ''
            }
        },
        
    ]

    return (
        <main>
            <div class="header-bg">

            </div>
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