import uuid from 'uuid/v4';

export default function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            if (action.newTask) {
                return [
                    ...state,
                    { id: uuid(), task: action.newTask, completed: false }
                ];
            }
            return state;
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case 'EDIT':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
            );

        default:
            return state;
    }
}
