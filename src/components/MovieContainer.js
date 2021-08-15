import React from 'react'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import MovieStats from './MovieStats'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import { Col, Row, Form } from 'react-bootstrap'

const MovieContainer = (props) => {
    return (
        <div>
            <h1>My Big Movie List</h1>
            <Container variant="d-flex flex-row bd-highlight mb-3">
                <Row>
                    <AddMovie />
                    <MovieStats />
                </Row>
            </Container>
            <MovieList />
        </div>
    )
}

export default MovieContainer