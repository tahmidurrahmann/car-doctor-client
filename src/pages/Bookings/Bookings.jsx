import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Booking from "./Booking";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        axios.get(url,{
            withCredentials : true,
        })
        .then(res => setBookings(res.data))
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            toast.success('successfully deleted')
                        }
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    })
            }
        })
    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method : "PATCH",
            headers : {
                'Content-Type' : "application/json",
            },
            body : JSON.stringify({status : 'Confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.matchedCount){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'Confirm';
                const array = [updated , ...remaining];
                setBookings(array);
            }
        })
        
    }

    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-4">Total bookings : {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Due</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <Booking handleDelete={handleDelete} handleUpdate={handleUpdate} key={booking._id} booking={booking}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;