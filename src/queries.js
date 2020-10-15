import gql from "graphql-tag";

export const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $file: Upload!
    $post_title: String
    $post_date: Date
    $post_detail: String
    $post_image: ID
  ) {
    upload(file: $file) {
      id
    }
    createPost(
      input: {
        data: {
          post_title: $post_title
          post_detail: $post_detail
          post_date: $post_date
          post_image: $post_image
        }
      }
    ) {
      post {
        id
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation ploadImage($file: Upload!) {
    upload(file: $file) {
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $post_title: String
    $post_date: Date
    $post_detail: String
    $post_image: ID
  ) {
    createPost(
      input: {
        data: {
          post_title: $post_title
          post_detail: $post_detail
          post_date: $post_date
          post_image: $post_image
        }
      }
    ) {
      post {
        id
      }
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query {
    posts {
      id
      post_detail
      post_image {
        url
      }
      post_date
      post_title
    }
  }
`;
