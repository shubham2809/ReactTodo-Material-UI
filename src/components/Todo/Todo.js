import React, { useContext, memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from '../../hooks/useToggleState';
import EditTodoForm from '../EditTodoForm/EditTodoForm';
import './Todo.css';
import { DispatchContext } from '../../contexts/todos.context';

function Todo({ id, task, completed }) {
    const [isEditing, toggle] = useToggleState();
    const dispatch = useContext(DispatchContext);
    return (
        <ListItem className="TodoListItem">
            {isEditing ? (
                <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
            ) : (
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => dispatch({ type: 'TOGGLE', id: id })}
                    />
                    <ListItemText
                        style={{
                            textDecoration: completed ? 'line-through' : 'none',
                            width: '90%'
                        }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            onClick={() => dispatch({ type: 'REMOVE', id: id })}
                            aria-label="Delete"
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}
export default memo(Todo);
