const initialMovieList = []

const movieReducer = (state = initialMovieList, action) => {
    switch (action.type) {
        case 'ADD_MOVIE': {
            return [...state, { ...action.payload }]
        }
        case 'REMOVE_MOVIE': {
            return (state.filter((movie) => {
                if (movie.id !== action.payload) {
                    return { ...movie }
                }
            }))
        }
        default: {
            return [...state]
        }
    }
}

export default movieReducer