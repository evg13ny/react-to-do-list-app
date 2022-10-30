import React from 'react'

import './Header.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
    return (
        <Row>
            <Col>
                <div className='root'>
                    To-Do List
                </div>
            </Col>
        </Row>
    )
}

export default Header