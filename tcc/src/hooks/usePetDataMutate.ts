import axios, { AxiosPromise } from "axios"
import { PetData } from "../interfaces/PetData"
import { useMutation, useQueryClient } from "react-query"

const API_URL = "https://8080-henriquerom-tccbackendt-pwd3ogyjupn.ws-us115.gitpod.io"

const postData = async (data: PetData): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/animal", data)
    return response
}

export function usePetDataMutate() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['pet-data'])
        }
    })

    return mutate
}