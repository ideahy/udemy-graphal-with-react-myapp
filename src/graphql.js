import gql from "graphql-tag";

export const ME = gql`
  query me {
    user(login: "ideahy") {
      name
      avatarUrl
    }
  }
`;
