import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              slug
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPages = async () => {
  const query = gql`
    query GetGategories {
        pages {
          title
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.pages;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
          description
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getAuthor = async () => {
  const query = gql`
    query GetAuthor {
        authors {
          bio
          name
          id
          slug
          photo {
            url
          }
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.authors;
};

export const getBannerDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      banner(where: {slug: $slug}) {
        heading
        subheading
        placeholderText
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.banner;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
          slug
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getPageDetails = async (slug) => {
  const query = gql`
    query GetCategoriesDetails($slug : String!) {
      pagesConnection(where: {slug: $slug}) {
        edges {
          node {
            content {
              raw
            }
            createdAt
            title
            slug
            id
            pageInformation
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.pagesConnection.edges[0].node;
};

export const getCategoriesDetails = async (slug) => {
  const query = gql`
    query GetCategoriesDetails($slug : String!) {
      categoriesConnection(where: {slug: $slug}) {
        edges {
          node {
            id
            name
            slug
            description
            posts {
              excerpt
              slug
              title
              author {
                name
                id
                slug
              }
              categories {
                name
                slug
              }
              featuredImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.categoriesConnection.edges[0].node;
};

export const getAuthorDetails = async (slug) => {
  const query = gql`
    query GetAuthorDetails($slug : String!) {
      authorsConnection(where: {slug: $slug}) {
        edges {
          node {
            bio
            id
            name
            slug
            photo {
              url
            }
            posts {
              excerpt
              featuredImage {
                url
              }
              slug
              title
              author {
                id
                name
                slug
                bio
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.authorsConnection.edges[0].node;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(where: {featurePost: true}) {
        author {
          name
          id
          slug
          photo {
            url
          }
        }
        title
        featuredImage {
          url
        }
        excerpt
        createdAt
        slug
        categories {
          id
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getEditorsPicks = async () => {
  const query = gql`
    query MyQuery {
      posts(where: {editorsPick: true}) {
        author {
          name
          id
          slug
          photo {
            url
          }
        }
        title
        featuredImage {
          url
        }
        excerpt
        createdAt
        slug
        categories {
          id
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitPost = async (obj) => {
  const result = await fetch('/api/posts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: obj,
  });

  return result.json();
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: obj,
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
        first: 4
      ) {
        title
        excerpt
        featuredImage {
          url
        }
        createdAt
        slug
        categories {
          id
          name
          slug
        }
        author {
          name
          id
          slug
          photo {
            url
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};