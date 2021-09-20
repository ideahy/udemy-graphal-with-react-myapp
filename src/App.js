import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import client from "./client";

const ME = gql`
  query me {
    user(login: "ideahy") {
      name
      avatarUrl
    }
  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">hello, GraphQL</div>
      <Query query={ME}>
        {({ loading, error, data }) => {
          if (loading) return "loading...~_~...";
          if (error) return `Error!!!おらぁ!!! ${error.message}`;

          return <div>{data.user.name}</div>;
        }}
      </Query>
    </ApolloProvider>
  );
}

export default App;
