import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxios from './useAxios';

const useUsers = () => {
    const { user } = useContext(AuthContext)
    const [axiosURL] = useAxios()
    const { refetch, data: loggedUser = [] } = useQuery({
        queryKey: ['users', user?.email],
       
        queryFn: async () => {
            const res = await axiosURL(`users?email=${user?.email}`)
            return res.data
        }
    })
    return [loggedUser, refetch]
};

export default useUsers;