const Booking = ({ booking, handleDelete, handleUpdate }) => {

    const { _id ,date, due, img, service, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>
                {date}
            </td>
            <td>
                {due}
            </td>
            <th>
                { 
                status === "Confirm" ? 
                <p className="text-lg text-primary">Confirmed</p>
                : <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default Booking;