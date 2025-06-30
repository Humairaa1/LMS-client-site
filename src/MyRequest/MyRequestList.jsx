import React from 'react'
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

export default function MyRequestList({ book,refetch }) {

    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
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
                axiosSecure.delete(`/borrowBooks/${id}`)
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

    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={book.image}
                                    alt="Book Image" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="font-semibold">{book.name}</p>
                </td>
                <td onClick={() => handleDelete(book._id)} className='font-semibold text-red-600'>Delete</td>
            </tr>
        </tbody>
    )
}
