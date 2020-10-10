import gql from 'graphql-tag';

const TODOS = gql`
  query todos {
    todos(order_by: {isDone: asc}) {
      id
      description
      isDone
    }
  }
`;

export default TODOS;
