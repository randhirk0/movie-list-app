import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { removeMovie } from '../actions/movieActions'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

const MovieList = (props) => {
    const [userPref, setUserPref] = useState('')
    const [searchedMovie, setSearchedMovie] = useState('')
    const [searchedMovieMatchList, setSearchedMovieMatchList] = useState([])
    const prefList = ['Name', 'Rating']
    const dispatch = useDispatch()
    let movies = useSelector((state) => {
        return state.movies
    })

    const sortMovieList = (e) => {
        const userSelection = e.target.value
        setUserPref(e.target.value)
        // console.log(e.target.value)
        let lstMoviesToSort = []
        if (searchedMovie.length > 0) {
            lstMoviesToSort = searchedMovieMatchList
        } else {
            lstMoviesToSort = movies
        }

        if (userSelection === 'Name') {
            lstMoviesToSort.sort((a, b) => (a.movie > b.movie ? 1 : -1))
        } else if (userSelection === 'Rating') {
            lstMoviesToSort.sort((a, b) => a.rating - b.rating)
        }
    }
    // console.log(movies)
    const removeMovieFromList = (id) => {
        dispatch(removeMovie(id))
    }

    const filterMoviesFromTheList = (e) => {
        const result = e.target.value
        setSearchedMovie(result)
        const moviesFound = movies.filter((elem) => {
            if (elem.movie.toLowerCase().includes(result.toLowerCase())) {
                return elem
            }
        })
        setSearchedMovieMatchList(moviesFound)
    }

    return (<div>
        <h2>Movie's List </h2>

        <label>Search in database </label>
        <input type='text' onChange={filterMoviesFromTheList} value={searchedMovie}></input>

        <label>Sort By  </label>
        <select value={userPref} onChange={sortMovieList}>
            {prefList.map((elem, indx) => {
                return (<option key={indx} value={elem}>{elem}</option>)
            })}
        </select>

        <ul>
            {searchedMovie.length > 0 ?
                (searchedMovieMatchList.map(element => {
                    return (
                        <li key={element.id}>{element.movie} {element.rating}
                            <Button variant="btn btn-outline-danger" key={element.id} onClick={() => { removeMovieFromList(element.id) }}>x</Button>
                        </li>
                    )
                }))
                : (movies.map(element => {
                    return (
                        <li key={element.id}>{element.movie} {element.rating} {' '}
                            <Button variant="btn btn-outline-danger" key={element.id} onClick={() => { removeMovieFromList(element.id) }}>x</Button>
                        </li>
                    )
                }))}
        </ul>
    </div>)
}

export default MovieList