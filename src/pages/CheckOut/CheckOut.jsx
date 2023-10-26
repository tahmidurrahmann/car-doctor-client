import { useLoaderData } from "react-router-dom";
import CheckBanner from "./CheckBanner";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {

    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, title, price, img } = service;

    const handleConfirmOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due = form.due.value;
        const service = {
            customerName : name,
            date,
            email,
            due,
            service_id : _id,
            service : title,
            img
        }
        console.log(service);
        fetch('http://localhost:5000/bookings', {
            method : "POST",
           headers : {
            'Content-Type' : "application/json",
           },
           body : JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully booked',
                    icon: 'success',
                    confirmButtonText: 'Good'
                  })
            }
        })

    }

    return (
        <div>
            <CheckBanner></CheckBanner>
            <h1 className="text-4xl text-center text-[#FF3811] font-bold my-4">Service : {title}</h1>
            <div className="bg-[#F3F3F3] p-10">
                <form onSubmit={handleConfirmOrder} className="card-body space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" 
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={`$${price}`} name="due" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* <textarea name="message" required placeholder="Your message" className="p-6 rounded-xl" cols="30" rows="10"></textarea> */}
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-block bg-[#FF3811] text-white font-medium" value="Confirm Order" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;