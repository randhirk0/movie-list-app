import React from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

const MovieStats = (props) => {
    let bestRankedMovie = ''
    const movies = useSelector((state) => {
        return state.movies
    })

    const findRelevantStat = () => {
        let bestRating = 0

        movies.forEach(movie => {
            if (movie.rating > bestRating) {
                bestRating = movie.rating
                bestRankedMovie = movie.movie
            }
        })
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>Movie's Stats</Card.Header>
            <Card.Body>
                {findRelevantStat()}
                <p>Total Movies - ({movies.length})</p>
                {bestRankedMovie !== '' && <p>Top Ranked Movie - ({bestRankedMovie})</p>}
            </Card.Body>
        </Card>
    )
}

export default MovieStats