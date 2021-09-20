import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const headersLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
  return forward(operation);
});

// エンドポイントの設定をするためのHTTPリンクの作成を行う
const endpoint = "https://api.github.com/graphql";
const httpLink = new HttpLink({ uri: endpoint });

// 作成した上記二つのリンクを結合する
const link = ApolloLink.from([headersLink, httpLink]);

// 結合したリンクをアポロクライアントに設定
export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
