import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DoneButton from '@material-ui/icons/Done';
import useInputState from '../../hooks/useInputState';
import './EditTodoForm.css';
import { DispatchContext } from '../../contexts/todos.context';

export default function EditTodoForm({ id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    const dispatch = useContext(DispatchContext);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({ type: 'EDIT', id: id, newTask: value });
                reset();
                toggleEditForm();
            }}
            className="EditTodoForm"
        >
            <ListItem>
                <TextField
                    margin="normal"
                    value={value}
                    onChange={handleChange}
                    fullWidth
                    autoFocus
                />
            </ListItem>
            <ListItemSecondaryAction>
                <IconButton onClick={toggleEditForm}>
                    <DoneButton />
                </IconButton>
            </ListItemSecondaryAction>
        </form>
    );
}
