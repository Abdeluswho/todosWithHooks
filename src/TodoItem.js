import React, { useContext } from 'react'
import useToggleState from './hooks/useToggleState'
import TodoEditForm from './TodoEditForm'
import { Checkbox, IconButton, ListItemText, ListItem, ListItemSecondaryAction } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import { TodosContext } from './contexts/todos.context'


export default function TodoItem( { id, task, completed } ) {
    const [isEditing, toggle] = useToggleState( false )
    const { removeTodo, toggleTodo } = useContext( TodosContext )

    return (
        <ListItem key={id} style={{ height: "60px" }}>
            {isEditing
                ?
                <TodoEditForm
                    id={id}
                    task={task}
                    toggle={toggle}
                />
                :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo( id )} />
                    <ListItemText
                        style={{ textDecoration: completed ? 'line-through' : 'none' }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => removeTodo( id )}>
                            <Delete />
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={() => toggle()}>
                            <Edit />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}