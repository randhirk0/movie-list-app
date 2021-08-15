import React, { useState } from 'react'
// import { Card } from 'react-bootstrap'
// import configureStore from '../stores/configureStore'
import { addMovie } from '../actions/movieActions'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

const AddMovie = (props) => {
    const [movieName, setMovieName] = useState('')
    const [movieRating, setMovieRating] = useState('')

    const dispatch = useDispatch()

    const handleMovieNameChange = (e) => {
        setMovieName(e.target.value)
    }
    const handleMovieRatingChange = (e) => {
        if (e.target.value < 0 || e.target.value > 10) {
            alert('movie rating to lie in b/w 0 to 10')
            setMovieRating('')
            return
        }
        setMovieRating(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (movieName === '' || movieRating === '') {
            alert('fill the name and rating properly')
            return
        }
        const movieObj = {
            id: Number(new Date()),
            movie: movieName,
            rating: Number(movieRating)
        }
        // console.log(movieObj)
        dispatch(addMovie(movieObj))
        setMovieName('')
        setMovieRating('')
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>Add a movie</Card.Header>
            <Card.Body>
                <form onSubmit={handleFormSubmit}>
                    <label >Name </label>
                    <input type='text' value={movieName} onChange={handleMovieNameChange} /><br />
                    <label>Rating  </label>
                    <input type='text' value={movieRating} onChange={handleMovieRatingChange} /><br />
                    <input type='submit' value='Add' />
                </form>
            </Card.Body>
        </Card>
    )
}

export default AddMovie