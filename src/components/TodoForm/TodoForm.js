import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from '../../hooks/useInputState';
import './TodoForm.css';
import { DispatchContext } from '../../contexts/todos.context';

const TodoForm = props => {
    const [inputValue, setInputValue, resetInputValue] = useInputState('');
    const dispatch = useContext(DispatchContext);
    return (
        <Paper className="TodoForm">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({ type: 'ADD', newTask: inputValue });
                    resetInputValue();
                }}
            >
                <TextField
                    fullWidth
                    label="Add New Todo"
                    className="TextField"
                    value={inputValue}
                    onChange={setInputValue}
                />
            </form>
        </Paper>
    );
};

export default TodoForm;
