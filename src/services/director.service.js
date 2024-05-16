import { httpService } from './http.service'

const BASE_URL = 'director'

export const directorService = {
    query,
    getById,
    save,
    remove,
    getEmptyDirector,
    addDirectorMsg
}
window.cs = directorService

async function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(directorId) {
    return httpService.get(`director/${directorId}`)
}

async function remove(directorId) {
    return httpService.delete(`director/${directorId}`)
}

async function save(director) {
    const savedDirector = director._id ? await httpService.put(`director/${director._id}`, director) : await httpService.post('director', director)
    return savedDirector
}

async function addDirectorMsg(directorId, txt) {
    const savedMsg = await httpService.post(`director/${directorId}/msg`, { txt })
    return savedMsg
}

function getEmptyDirector() {
    return {
        //properties
    }
}





