import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

export default function UseBorrowBooks() {

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

  const {refetch,data: borrowedBooks = []}=useQuery({
    queryKey: ['borrowedBooks', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/borrowBooks?email=${user.email}`)
      return res.data;
    }
  })
    return [borrowedBooks,refetch]
}
