import React from 'react';
import { connect } from 'react-redux';
import Todo from "./Todo";

const TodosContainer = props => {

    return(
      <div>
          <ul>
              {props.todos.map(t=><Todo text={t}/>)}
          </ul>
      </div>
    );
};

export default connect(state=>({todos: state.todos}))(TodosContainer); 