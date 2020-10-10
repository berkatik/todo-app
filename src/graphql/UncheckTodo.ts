import gql from 'graphql-tag';

const UNCHECK_TODO = gql`
  mutation uncheckTodo(
    $id: Int!
  ) {
    update_todos_by_pk(
      pk_columns: {
        id: $id
      }, 
      _set: {
        isDone: false
    }) {
    id
  }
  }
`;

export default UNCHECK_TODO;
