import { useQuery } from '@tanstack/react-query'
import { getData} from '../services/APIservice'

const useOneObject = <T>(endpoint:string) => {
    return useQuery({
        queryKey: ['Data', ],
        queryFn: () => getData<T>(endpoint)
    })
}

export default useOneObject