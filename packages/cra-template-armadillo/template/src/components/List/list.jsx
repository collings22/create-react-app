import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export const List = (props) => {
  return (
    <ListGroup variant='flush'>
      {props.map((item) => (
        <ListGroup.Item>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}
