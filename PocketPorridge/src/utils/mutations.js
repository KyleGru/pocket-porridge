import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            firstName
            lastName
        }
    }
}
`;

export const CREATE_USER = gql`
  mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        token
      user {
        firstName
        lastName
        email
      }
    }
  }
`;