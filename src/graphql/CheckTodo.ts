import gql from 'graphql-tag';

const CHECK_TODO = gql`
  mutation checkTodo(
    $id: Int!
  ) {
    update_todos_by_pk(
      pk_columns: {
        id: $id
      }, 
      _set: {
        isDone: true
    }) {
    id
  }
  }
`;

export default CHECK_TODO;
