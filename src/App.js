import { useState } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import client from "./client";
import { SEARCH_REPOSITORIES } from "./graphql";

// useStateの持つ初期値
const defaultState = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア",
};

export const App = (props) => {
  // もし取得した値が渡ってきたらどうするかがわからない
  const { first, after, last, before, query } = props;
  console.log(query);
  const [state, setState] = useState(defaultState);
  console.log(state);
  //handleChangeをコンストラクタでバインドしろとかいうてるわ。

  const handleChange = (event) => {
    setState({
      ...defaultState,
      query: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ApolloProvider client={client}>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handleChange}></input>
      </form>
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
