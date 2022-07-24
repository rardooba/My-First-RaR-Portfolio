export const PRODUCT_QUERY = `
query {
    codeWorks {
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
