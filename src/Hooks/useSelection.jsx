import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxios from './useAxios';

const useSelection = () => {
    const { user } = useContext(AuthContext)
    const [axiosURL] = useAxios()
    const { refetch, data: selection = [] } = useQuery({
        queryKey: ['selections', user?.email],
        // enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
                const res = await axiosURL(`/selections?email=${user?.email}`)
                return res.data
            
        }
    })
    return [selection, refetch]
};

export default useSelection;