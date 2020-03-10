import React, { useContext } from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import TodoItem from './TodoItem'
import { TodosContext } from './contexts/todos.context'

export default function TodoList() {
    const { todos } = useContext( TodosContext )
    if ( todos.length )
        return (
            <Paper>
                <List>
                    {todos.map( ( todo, i ) => (
                        <>
                            <TodoItem
                                key={todo.id}
                                {...todo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ) )}
                </List>
            </Paper>
        )
    return null
}