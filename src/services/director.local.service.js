import { storageService } from './async-storage.service'

const STORAGE_KEY = 'director_DB'

export const directorService = {
    query,
    getById,
    save,
    remove,
    getEmptyDirector,
}

window.cs = directorService

async function query(filterBy = {}) {
    try {
        return await storageService.query(STORAGE_KEY)
    } catch(err) {
        console.log(err)
        throw err
    }
}

async function getById(directorId) {
    try {
       return await storageService.get(STORAGE_KEY, directorId) 
    } catch(err) {
        console.log(err)
        throw err
    }
}

async function remove(directorId) {
    try {
        return await storageService.remove(STORAGE_KEY, directorId)
     } catch(err) {
         console.log(err)
         throw err
     }
}

async function save(director) {
    const savedDirector = director._id ? await storageService.put(STORAGE_KEY, director) : await storageService.post(STORAGE_KEY, director)
    return savedDirector
}

function getEmptyDirector() {
    return {
        //properties
    }
}


