import axios, { AxiosPromise } from "axios"
import { PetData } from "../interfaces/PetData"
import { useQuery } from "react-query"

const API_URL = "https://8080-henriquerom-tccbackendt-m55f2b6ww6v.ws-us114.gitpod.io"

const fetchData = async (): AxiosPromise<PetData[]> => {
    const response = axios.get(API_URL + "/animal")
    return response
}

export function usePetData() {
    const query = useQuery({
        queryFn: fetchData,        
        queryKey: ['pet-data'],
        retry: 2,
    })

    return {
        ...query,
        data: query.data?.data
    }
}