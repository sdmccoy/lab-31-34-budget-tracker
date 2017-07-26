import React from 'react';
import {connect} from 'react-redux';
import {expenseUpdate, expenseDestroy} from '../../../action/expense-actions.js';

class ExpenseItem extends React.Component{
  render(){
    console.log('EXP ITEM props: ', this.props);
    return(
      <ul className='expense-list'>
        Hello from expense ITEM.
        {this.props.expenses.map(expense => {
          console.log('expense: ', expense);
          return <li key={expense.id} className='expense-item'>
            <h3>{expense.title}</h3>
            <h3>{expense.amount}</h3>
          </li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state, props) => ({expenses: state.expenses[props.categoryID]});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
    expenseDestroy: (expense) => dispatch(expenseDestroy(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
