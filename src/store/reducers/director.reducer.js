export const SET_DIRECTORS = 'SET_DIRECTORS'
export const ADD_DIRECTOR = 'ADD_DIRECTOR'
export const REMOVE_DIRECTOR = 'REMOVE_DIRECTOR'
export const UPDATE_DIRECTOR = 'UPDATE_DIRECTOR'

const initialState = {
  directors: [],
}

export function directorReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DIRECTORS:
      return { ...state, directors: action.directors }
    case ADD_DIRECTOR:
      return { ...state, directors: [...state.directors, action.director] }
    case REMOVE_DIRECTOR:
      return { ...state, directors: state.directors.filter(director => director._id !== action.directorId) }
    case UPDATE_DIRECTOR:
      return {
        ...state,
        directors: state.directors.map(director =>
          director._id === action.director._id ? action.director : director
        )}
    default:
      return state
  }
}
