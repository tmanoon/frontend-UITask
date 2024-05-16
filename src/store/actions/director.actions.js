import { SET_DIRECTORS, ADD_DIRECTOR, REMOVE_DIRECTOR, UPDATE_DIRECTOR } from '../reducers/director.reducer'
import { directorService } from '../../services/director.service'
import { store } from '../store'
import { userService } from '../../services/user.service'

export async function addDirector(params, stay) {
    try {
        const user = userService.getLoggedInUser()
        const director = await directorService.getDirector(stay, user, params)
        const directorToAdd = await directorService.save(director)
        store.dispatch({ type: ADD_DIRECTOR, director: directorToAdd })
        console.log(directorToAdd)
        return directorToAdd
    } catch (err) {
        console.log(err)
    }
}

export async function loadDirectors() {
    try {
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
        const directors = await directorService.query()
        store.dispatch({ type: SET_DIRECTORS, directors })
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    } catch (err) {
        console.log(err)
    }
}

export async function removeDirector(directorId) {
    try {
        await directorService.remove(directorId)
        store.dispatch({ type: REMOVE_DIRECTOR, directorId })
    } catch (err) {
        console.log('director action -> Cannot remove director', err)
        throw err
    }
}

export async function updateDirector(director) {
    try {
        await directorService.save(director)
        store.dispatch({ type: UPDATE_DIRECTOR, director })
    } catch (err) {
        console.log(err)
    }
}