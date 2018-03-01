export const Users = [
  {
    name: 'Adrian',
    email: 'adrian@reservamos.mx'
  },
  {
    name: 'Juan',
    email: 'juanmiguel@reservamos.mx'
  },
  {
    name: 'Ernesto',
    email: 'ernesto@reservamos.mx'
  }
]

export const Posts = [
  {
    title: 'GraphQL',
    author: 'juanmiguel@reservamos.mx',
    comments: [
      {
        content: 'Buen Post',
        user: 'ernesto@reservamos.mx'
      },
      {
        content: 'Plis Moar!',
        user: 'adrian@reservamos.mx'
      }
    ]
  },
  {
    title: 'React.JS',
    author: 'adrian@reservamos.mx',
    comments: [
      {
        content: 'Es mejor que Vue.js?',
        user: 'ernesto@reservamos.mx'
      }
    ]
  }
]
