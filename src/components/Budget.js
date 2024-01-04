import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const { expenses  } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value > 20000) {
            alert("The value cannot exceed 20,000 ");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending. ");
            return;
        }
        setNewBudget(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
