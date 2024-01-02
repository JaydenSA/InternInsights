import { GraphQLClient, gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function posts(req, res) {
    try {
        const graphQLClientMade = new GraphQLClient((graphqlAPI), {
            headers: {
              authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
            },
        });
    
        const query = gql`
            mutation CreatePost($title: String!, $excerpt: String!, $featuredImage: SetUploadImage!, $slug: String!, $categories: String!, $author: String!, $content: String!) {
                createPost(data: {$title: String!, $excerpt: String!, $featuredImage: String!, $slug: String!, $categories: String!, $author: String!, $content: String!, category: {connect: {categirt: $categories}}}) { id }
            }
        `;

        const result = await request(process.env.GRAPHCMS_TOKEN, query, {
            title: req.body.title,
            excerpt: req.body.excerpt,
            featuredImage: req.body.featuredImage,
            slug: req.body.slug,
            categories: req.body.categories,
            author: req.body.author,
            content: req.body.content,
        });

        return NextResponse.json(result, {
            status: 200,
          });
    }
    catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Failed to get admins" },
            {
              status: 500,
            }
          );
    }
    

    console.log('Working')

    return res.status(200).send(result);
}