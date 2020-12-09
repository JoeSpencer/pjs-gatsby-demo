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
                  buildHookId: '5fd11d425285ba1f4cd19ab9',
                  title: 'Sanity Studio',
                  name: 'pjs-gatsby-demo-studio',
                  apiId: '126addfb-b18a-4dcd-80b3-2678ac642d03'
                },
                {
                  buildHookId: '5fd11d4277f7671d2450db59',
                  title: 'Blog Website',
                  name: 'pjs-gatsby-demo',
                  apiId: 'c39f6505-9193-4495-a989-dd82d5b8ed5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoeSpencer/pjs-gatsby-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pjs-gatsby-demo.netlify.app', category: 'apps'}
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
