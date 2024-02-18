import { GraphQLClient, gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

import type { NextApiRequest, NextApiResponse } from 'next';

export async function handler(
	req: NextApiRequest, 
	res: NextApiResponse
	) {
    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
          	authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
      });

	if (req.method === 'POST') {
	
		const query = gql`
			mutation createPost($title: String!, #author: String!, $excerpt: String!, $content: RichTextAST, $slug: String!, $slug1: String!) {
				createPost(data: {title: $title, content: $content, categories: {connect: {slug: $slug1}}, excerpt: $excerpt, post: {connect: {slug: $slug}}}) { id }
			}
		`;

		const result = await graphQLClient.request(query, {
			title: req.body.title,
			excerpt: req.body.excerpt,
			slug: req.body.slug,
			slug1: req.body.categories,
			author: req.body.author,
			content: req.body.content,
		});

		return res.status(201).send(result);
		
	}
}