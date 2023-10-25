export type Customer = {
    id: number;
    name: string;
    message: string;
    avatar: string;
    stars: number;
}

const customers : Customer[] = [
    {
        id: 1,
        name: 'John Doe',
        message: 'I Love it! No more air fresheners',
        avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
        stars: 5,
    },
    {
        id: 2,
        name: 'Jane Doe',
        message: 'Recommend to all my friends',
        avatar: 'https://avatars.githubusercontent.com/u/73995?v=4',
        stars: 5,
    },
    {
        id: 3,
        name: 'James Lane',
        message: 'Looks very natural, the smell is awesome',
        avatar: 'https://avatars.githubusercontent.com/u/739982?v=4',
        stars: 4,
    }
]

export default customers;