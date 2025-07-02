import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function AllUser() {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your request has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Make this user an admin?",
            text: "This will grant the user administrative privileges.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin"
        }).then((result) => {
            if (result.isConfirmed) {

              axiosSecure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)

                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user.name} is an Admin Now`,
                        icon: "success"
                    });
                    refetch();
                }
            })  
            }
        });
    }

    return (
        <div className='mt-10'>
            <div className='flex gap-40 items-center'>
                <h3 className='text-xl font-semibold'>Total Users : {users.length}</h3>
                <h1 className='text-3xl font-semibold'>All Users</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {
                                    user.role === 'admin'
                                        ? <p>Admin</p>
                                        :
                                        <td onClick={() => handleMakeAdmin(user)} className='btn text-xl'><FaUsers /></td>

                                }
                                <td onClick={() => handleDelete(user)}>Delete</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
