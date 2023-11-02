export type Product = {
    img: string
    name: string
    price: number
    description: string
    id: number
}

const products : Product[] = [
    {
        img: '/image1.png',
        name: 'Spiced Mint',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 0,
    },
    {
        img: '/image1-1.png',
        name: 'Sweet Strawberry',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 1,
    },
    {
        img: '/image1-2.png',
        name: 'Cool Blueberries',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 2,
    },
    {
        img: '/image1-3.png',
        name: 'Fresh Lemon',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 3,
    },
    {
        img: '/image1-4.png',
        name: 'Juicy Orange',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 4,
    },
    {
        img: '/image1-5.png',
        name: 'Sweet Cherry',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 5,
    },
    {
        img: '/image1-6.png',
        name: 'Fresh Apple',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 6,
    },
    {
        img: '/image1-7.png',
        name: 'Sweet Peach',
        price: 9.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        id: 7,
    },
]

export default products