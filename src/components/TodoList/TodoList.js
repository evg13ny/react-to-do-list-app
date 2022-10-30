import React, { useEffect, useState } from 'react'

import './TodoList.css'

import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faLock, faLockOpen, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoList({ todo, setTodo }) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    function todoFilter(status) {
        if (status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

    return (
        <div>
            <Row>
                <Col className='filter'>
                    <ButtonGroup className='btns'>
                        <Button variant='info' onClick={() => todoFilter('all')}>All</Button>
                        <Button variant='light' onClick={() => todoFilter(true)}>Open</Button>
                        <Button variant='dark' onClick={() => todoFilter(false)}>Closed</Button>
                    </ButtonGroup>
                </Col>
            </Row>

            {
                filtered.map(item => (
                    <div className='listItems' key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input onChange={(e) => setValue(e.target.value)} value={value} />
                                </div>
                                :
                                <div className={!item.status ? 'close' : ''}>{item.title}</div>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <Button onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faFloppyDisk} /></Button>
                                </div>
                                :
                                <div>
                                    <Button variant='warning' onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                    <Button className='btn' variant='primary' onClick={() => editTodo(item.id, item.title)}><FontAwesomeIcon icon={faPen} /></Button>
                                    <Button className='btn' variant='secondary' onClick={() => statusTodo(item.id)}>
                                        {
                                            item.status ?
                                                <FontAwesomeIcon icon={faLockOpen} />
                                                :
                                                <FontAwesomeIcon icon={faLock} />
                                        }
                                    </Button>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList