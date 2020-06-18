module.exports = {
    description: 'Privacy is a Public Good',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Learn', link: '/questions'},
            { text: 'Website', link: 'https://scrt.network' },
            { text: 'Blog', link: 'https://blog.scrt.network' },
            { text: 'Chat', link: 'https://chat.scrt.network' },
            { text: 'Forum', link: 'https://forum.scrt.network' },
            { text: 'Twitter', link: 'https://twitter.com/SecretNetwork' }
          ],
        sidebar: [
            { title: 'Secret FAQ', path: '/questions' },
            { title: 'Network', path: '/network' },
            { title: 'Protocol', path: '/protocol' },
            { title: 'Foundation', path: '/foundation' },
        ]
    }
}