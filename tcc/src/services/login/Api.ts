import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenError } from '../error/AuthTokenError'
import { signOut } from "../contexts/AuthContext"

let url = "https://3000-henriquerom-backendmiau-3fu4h37nry3.ws-us116.gitpod.io"



export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx)



    const api = axios.create({

        baseURL: url,

        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, (error: AxiosError) => {
        if (error.response.status === 401) {
            //Qualquer erro 401 (não autorizado) devemos deslogar usuários
            if (typeof window !== undefined) {
                //Chamar a função para deslogar o usuário
                signOut()
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })

    return api
}
import { signOut } from "../contexts/AuthContext"

let url = "https://3333-tccgrupo07-backend-f6pedsjckd1.ws-us116.gitpod.io"



export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx)



    const api = axios.create({

        baseURL: url,

        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, (error: AxiosError) => {
        if (error.response.status === 401) {
            //Qualquer erro 401 (não autorizado) devemos deslogar usuários
            if (typeof window !== undefined) {
                //Chamar a função para deslogar o usuário
                signOut()
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })

    return api
}