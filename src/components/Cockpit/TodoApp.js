import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './TodoApp.css';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Image from '../../assets/bg-image.png'; // Import using relative path
import { TodosProvider } from '../../contexts/todos.context';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    }
};

export default function TodoApp() {
    // We keep the theme in app state
    const [theme, setTheme] = useState({
        palette: {
            type: 'dark'
        }
    });

    // we change the palette type of the theme in state
    const toggleDarkTheme = () => {
        let newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
        setTheme({
            palette: {
                type: newPaletteType
            }
        });
    };

    // we generate a MUI-theme from state's theme object
    const muiTheme = createMuiTheme(theme);

    return (
        <div>
            <MuiThemeProvider theme={muiTheme}>
                <Paper
                    elevation={0}
                    style={styles.paperContainer}
                    className="TodoApp"
                >
                    <AppBar position="static" className="AppBar">
                        <Toolbar color="inherit">
                            <Typography>React Todo with Material-UI</Typography>
                            <ListItemSecondaryAction>
                                Use Dark Mode
                                <Switch
                                    checked={theme.palette.type === 'light'}
                                    onChange={toggleDarkTheme}
                                />
                            </ListItemSecondaryAction>
                        </Toolbar>
                    </AppBar>
                    <Grid container justify="center" className="AppGrid">
                        <Grid item xs={11} m={8} lg={4}>
                            <TodosProvider>
                                <TodoForm />
                                <TodoList />
                            </TodosProvider>
                        </Grid>
                    </Grid>
                </Paper>
            </MuiThemeProvider>
        </div>
    );
}
