import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './AddTodo.css'

import { Button, Form, InputGroup } from 'react-bootstrap'

function AddTodo({ todo, setTodo }) {
    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
        <InputGroup className='addTodoForm'>
            <Form.Control placeholder="Add Todo" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button variant="success" onClick={saveTodo}>Save</Button>
        </InputGroup>
    )
}

export default AddTodo