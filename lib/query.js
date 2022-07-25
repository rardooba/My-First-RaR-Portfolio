export const PRODUCT_QUERY = `
query {
    codeWorks(pagination: { page: 1, pageSize: 50 }) {
      data {
        attributes {
          title
          description
          image {
            data {
              attributes {
                formats
              }
            }
          }
          slug
          logo {
            data {
              attributes {
                url
              }
            }
          }
          githubLink
          liveDemoLink
          delay
        }
      }
    }
  }
`
