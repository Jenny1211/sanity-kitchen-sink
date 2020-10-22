export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f917fc4441f3e012cdc3f9b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8v9fe1ph',
                  apiId: '837a9d04-0012-41df-aee1-0e86096117ca'
                },
                {
                  buildHookId: '5f917fc463b4ab0085fef823',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y8br7fmf',
                  apiId: 'e0b1b1d4-d82a-4296-a372-ca0902a1a2bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jenny1211/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y8br7fmf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
