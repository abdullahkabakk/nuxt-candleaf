import Image1 from '../public/image1.png'
import Image2 from '../public/image1-1.png'
import Image3 from '../public/image1-2.png'
import Image4 from '../public/image1-3.png'
import Image5 from '../public/image1-4.png'
import Image6 from '../public/image1-5.png'
import Image7 from '../public/image1-6.png'
import Image8 from '../public/image1-7.png'


export type Product = {
    img: string
    name: string
    price: number
    description: string
    id: number
}

const products : Product[] = [
    {
        img: Image1,
        name: 'Spiced Mint',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 0,
    },
    {
        img: Image2,
        name: 'Sweet Strawberry',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 1,
    },
    {
        img: Image3,
        name: 'Cool Blueberries',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 2,
    },
    {
        img: Image4,
        name: 'Fresh Lemon',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 3,
    },
    {
        img: Image5,
        name: 'Juicy Orange',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 4,
    },
    {
        img: Image6,
        name: 'Sweet Cherry',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 5,
    },
    {
        img: Image7,
        name: 'Fresh Apple',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 6,
    },
    {
        img: Image8,
        name: 'Sweet Peach',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 7,
    },
]

export default products