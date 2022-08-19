export const PRODUCT_QUERY = `
query getProducts($PageLimit: Int, $PageOffset: Int, $Name: String, $MinPrice: Float, $MaxPrice: Float, $Sort: [String], $Tag: String){
    products(sort: $Sort, filters: { title: { containsi: $Name }, price: { gte: $MinPrice, lte: $MaxPrice }, tags: {tag: { eq: $Tag}} },  pagination: { start: $PageOffset, limit: $PageLimit }){
      data {
        attributes{
          title
          description
          price
          slug
          image {
            data {
              attributes{
                formats
              }
            }
          }

        }
      }
      meta {
        pagination {
          total
          pageSize
          pageCount
        }
      }
    }
    tags (sort: "tag") {
      data {
        attributes {
          tag
        }
      }
    }
  }
`; //this query basically just shows how will the data that we'll recieve look like (essentially format of result that we get from fetching)

// export const GET_PAGES_QUERY = `
//   query{
//     products (pagination: { limit: 10 }) {
//       meta {
//         pagination {
//           total
//           pageSize
//           pageCount
//         }
//       }
//     }
//   }
// `;
export const GET_PAGES_QUERY = `
  query getPages($limitPerPage: Int){
    products (pagination: { limit: $limitPerPage }) {
      meta {
        pagination {
          total
          pageSize
          pageCount
        }
      }
    }
  }
`;

export const GET_TEST_QUERY = `
query getProduct($tag: String!){
  products(filters: {tags: {tag: { eq: $slug}}}){ 
    data{
      attributes{
        title
        price
        image {
          data {
            attributes{
              formats
            }
          }
        }
        tags{
          data{
            attributes{
              tag
            }
          }
        }
      }
    }
  }
}`; //this query basically just shows how will the data that we'll recieve look like (essentially format of result that we get from fetching)
//! , or: [{price:{lt: 20}}]

export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!){
    products(filters: {slug : {eq: $slug}}) {
      data{
        attributes{
          title
          description
          price
          slug
          image {
            data {
              attributes{
                formats
              }
            }
          }
          tags {
            data {
              attributes {
                tag
              }
            }
          }
        }
      }
    }
  }
`; //this query just filters all products by its slug (slug here is used like an id, since it's also unique)
//? ($slug: String!) means that we're sending a variable (slug) and it has to be in a String format, '!' means that it's required; there can be more than one variables sent
//? products(filters: {slug : {eq: $slug}}) filters all the products by slug, if slug is equal (eq === equal) to the one that we've sent it returns it. kind of a normal filtering
// the rest is just the same formating from above of what we'll need
