import { GraphQLClient, gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function POST({ body }, res) {
    const { id, ...data } = JSON.parse(body);

    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
    });

    const query = gql`
        mutation createSubmission($formData: Json!, $formId: ID!) {
            createSubmission(data: {formData: $formData, form: {connect: {id: $formId}}}) {
            id
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    try {
        const { createSubmission } = await graphQLClient.request(query, { data, id })
        res.status(201).json(createSubmission);
      } 
    catch ({ message }) {
        res.status(400).json({ message });
    }
}