import { gql } from '@apollo/client'

export const ADD_MEME = gql`
mutation addMeme($url: String!) {
  addMeme(url: $url) {
    _id
    url
  }
}
`