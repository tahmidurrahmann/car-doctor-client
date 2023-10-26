import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const {_id ,title, img, price} = service;

    return (
        <div className="card border rounded-xl">
            <figure><img className="w-4/5 mt-6 h-[208px] mx-auto rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="px-12">
                <h2 className="text-[#151515] text-3xl font-bold mt-5">{title}</h2>
                <div className='flex justify-between items-center'>
                <p className="text-2xl my-4 text-[#FF3811] font-semibold">Price : ${price}</p>
                <Link to={`/checkout/${_id}`}><BsArrowRightShort className='text-[#FF3811] text-4xl'></BsArrowRightShort></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;