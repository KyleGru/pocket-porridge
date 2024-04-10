import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($id: ID!) {
  user(id: $id) {
    _id
    firstName
    lastName
    email
    comments
  }
}
`;

export const QUERY_ME = gql`
query me {
    me {
      _id
      firstName
      lastName
      email
      comments  
    }
  }
`;

export const QUERY_MEMES = gql`
  query getMemes{
    memes {
        _id
        url
    }
}
`;