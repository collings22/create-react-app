import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { List } from '../../components/List'

export const About = () => {
  return (
    <Container>
      <Jumbotron style={{ backgroundColor: '#7a9ba6' }}>
        <h1>{REACT_APP_WEB_APP_NAME}</h1>
      </Jumbotron>
      <Card>
        <Card.Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <List data={['Category 1', 'Category 2']} />

          <Row>
            <Col sm={6}>
              <List data={['Feature 1 - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Feature 2 - Ut enim ad minima veniam, quis nostrum exercitationem ullam.',
                'Feature 3 - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
                'Feature 4 - Ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.']}
              />
            </Col>
            <Col sm={6} />
          </Row>

          <Row>
            <p>Lorem ipsum dolor sit amet?</p>
            <Col sm={6} />
            <Col sm={6}>
              <List data={['Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.',
                'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.']}
              />
            </Col>
          </Row>

          <Link to='/About'>
            <Button variant='primary'>
              Proceed
            </Button>
          </Link>

        </Card.Body>
      </Card>
    </Container>
  )
}
