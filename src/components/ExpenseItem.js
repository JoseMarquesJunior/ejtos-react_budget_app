import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const adjustAllocation = (name, isIncrease) => {
        const expense = {
            name: name,
            cost: isIncrease ? 10 : -10, // Use a negative value for decrease
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button className="btn btn-success" onClick={() => adjustAllocation(props.name, true)}>+</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => adjustAllocation(props.name, false)}>-</button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
        
    );
};

export default ExpenseItem;