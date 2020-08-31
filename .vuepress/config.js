module.exports = {
    title: 'Secret Network Wiki',
    path: '/index',
    description: 'Privacy is a Public Good',
    themeConfig: {
        logo: '/logo.png',
        
        nav: [
            { text: 'Site', link: 'https://scrt.network' },
            { text: 'Chat', link: 'https://chat.scrt.network' },
            { text: 'Blog', link: 'https://blog.scrt.network' },
            { text: 'Forum', link: 'https://forum.scrt.network' },
            { text: 'Twitter', link: 'https://twitter.com/SecretNetwork' },
            { text: 'Docs', link: 'https://build.scrt.network', color: '#FF0000'}
          ],
        sidebar: [
            {
                 title: 'Introduction',
                 children : [
                    { title: 'Overview', path: '/questions' },
                    { title: 'Network', path: '/network' },
                    { title: 'Protocol', path: '/protocol' }
                 ]
            },
            {  
                title: 'Ecosystem',
                children : [
                { 
                    title: 'Validators', 
                    //path: '/validators' 
                },
                { 
                    title: 'Secret Apps', 
                    path: '/apps'
                },
                { 
                    title: 'Community Projects', 
                    path: '/projects'
                },
                { 
                    title: 'SGX Compliance', 
                    path: '/sgx'
                }
                 ]
            },
            { 
                title: 'Foundation',
                children : [
                    { title: 'About', path: '/foundation' },
                    { title: 'Committees', path: '/committees' }
                 ] 
            }         
        ]
    }
}
