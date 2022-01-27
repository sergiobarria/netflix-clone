const URL = process.env.NEXT_PUBLIC_HASURA_ADMIN_URL;
const SECRET = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;

export async function queryHasuraGQL(operationsDoc, operationName, variables) {
  const result = await fetch(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': SECRET,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}
