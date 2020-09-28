import { gql } from '@apollo/client';

const ArticleFieldsFragment = gql`
  fragment ArticleFields on Article {
    id
    title
    content
  }
`;

export const ARTICLES_KNOWLEDGE_TAB = gql`
  query GetArticles {
    articles {
      ...ArticleFields
      readTime
      views
      imgUri
    }
  }
  ${ArticleFieldsFragment}
`;

export const BREEDS_ONBOARDING = gql`
  query GetBreed {
    breeds {
      breedName
    }
  }
`

export const ARTICLES_START_TAB = gql`
  query GetArticles {
    articles(recommended: true) {
      ...ArticleFields
      readTime
      views
      imgUri
      recommended
    }
  }
  ${ArticleFieldsFragment}
`;
