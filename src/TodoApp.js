import React from 'react';

import { Typography, Paper, AppBar, Grid } from '@material-ui/core'
import ToolBar from '@material-ui/core/ToolBar'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { TodosProvider } from './contexts/todos.context'


function TodoApp() {
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: 'rgb(243, 243, 246)'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "80px" }}>
                <ToolBar>
                    <Typography color='inherit'> Todos with hooks </Typography>
                </ToolBar>
            </AppBar>

            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>

        </Paper>

    )
}

export default TodoApp;





// Components
// TodoApp
//  - todoForm
//  - todoList
//     - todoItem