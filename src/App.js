import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import client from "./client";
import { ME } from "./graphql";

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
