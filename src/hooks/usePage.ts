import { useQuery } from '@tanstack/react-query'
import { getAllData} from '../services/APIservice'

const usePage = <T>( endpoint:string) => {
    return useQuery({
        queryKey: ['pageData'],
        queryFn: () => getAllData<T>(endpoint),
    })
}
export default usePage
