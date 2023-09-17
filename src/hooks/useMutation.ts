import { useMutation } from "@tanstack/react-query"
import { getAllData } from "../services/APIservice"
// import { useEffect } from "react"

// const queryclient = new QueryClient()

const useAllMutation = <T>( endpoint:string) => {
    return useMutation({
        mutationKey: ['mutationData'],
        mutationFn: () =>getAllData<T>(endpoint),
    })
}

export default useAllMutation

// `/movie/${movieId}/credits`