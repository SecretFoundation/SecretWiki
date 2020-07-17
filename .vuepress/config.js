module.exports = {
    title: 'Secret Network Wiki',
    description: 'Privacy is a Public Good',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Site', link: 'https://scrt.network' },
            { text: 'Chat', link: 'https://chat.scrt.network' },
            { text: 'Blog', link: 'https://blog.scrt.network' },
            { text: 'Forum', link: 'https://forum.scrt.network' },
            { text: 'Twitter', link: 'https://twitter.com/SecretNetwork' },
            { text: 'Docs', link: 'https://build.scrt.network'}
          ],
        sidebar: [
            {
                 title: 'Introduction', 
                 path: '/questions',
                 children : [
                    { title: 'Network', path: '/network' },
                    { title: 'Protocol', path: '/protocol' }
                 ]
            },
            { title: 'Tutorials', path: '/tutorials' },
            { title: 'Foundation', path: '/foundation' },
            { title: 'Projects', path: '/projects'}
        ]
    }
}
