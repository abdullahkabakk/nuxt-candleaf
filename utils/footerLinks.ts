type FooterLink = {
    title: string;
    links: {
        name: string;
        link: string;
    }[]
}

const footerLinks : FooterLink[]  = [
    {
        title: 'Discovery',
        links: [
            {
                name: 'New Season',
                link: '#'
            },
            {
                name: 'Most Searched',
                link: '#'
            },
            {
                name: 'Most Sold',
                link: '#'
            }
        ]
    },
    {
        title: 'About',
        links: [
            {
                name: 'Help',
                link: '#'
            },
            {
                name: 'Shipping',
                link: '#'
            },
            {
                name: 'Affiliate',
                link: '#'
            }
        ]
    },
    {
        title: 'Legal',
        links: [
            {
                name: 'Contact Us',
                link: '#'
            },
            {
                name: 'Privacy Policy',
                link: '#'
            },
            {
                name: 'Terms & Conditions',
                link: '#'
            }
        ]
    },
]

export default footerLinks;