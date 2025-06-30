import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'

export default function AllUser() {

    const axiosSecure = useAxiosSecure(); 

    const {data: users =[]} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;

    }
    })

  return (
    <div className='mt-10'>
      <div className='flex gap-40 items-center'>
        <h3 className='text-xl font-semibold'>Total Users : {users.length}</h3>
        <h1 className='text-3xl font-semibold'>All Users</h1>
      </div>
    </div>
  )
}
