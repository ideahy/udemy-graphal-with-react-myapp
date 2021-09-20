import { useState } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import client from "./client";
import { SEARCH_REPOSITORIES } from "./graphql";

// useStateの持つ初期値
const initialVariables = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア",
};

export const App = (props) => {
  const [state, setState] = useState(initialVariables);

  // もし取得した値が渡ってきたらどうするかがわからない
  console.log(state);
  const { propsVariables } = props;

  return (
    <ApolloProvider client={client}>
      <Query query={SEARCH_REPOSITORIES} variables={state}>
        {({ loading, error, data }) => {
          console.log({ data });
          if (loading) return "loading...~_~...";
          if (error) return `Error!!!おらぁ!!! ${error.message}`;

          return <div></div>;
        }}
      </Query>
    </ApolloProvider>
  );
};

export default App;
