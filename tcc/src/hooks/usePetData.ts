import axios, { AxiosPromise } from "axios"
import { PetData } from "../interfaces/PetData"
import { useQuery } from "react-query"

const API_URL = "https://8080-henriquerom-tccbackendt-xoyjzs49bvh.ws-us115.gitpod.io"

const fetchData = async (): AxiosPromise<PetData[]> => {
    const response = axios.get(API_URL + "/animal/list")
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