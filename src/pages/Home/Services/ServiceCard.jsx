import { BsArrowRightShort } from 'react-icons/bs';

const ServiceCard = ({ service }) => {

    const {title, img, price} = service;

    return (
        <div className="card border rounded-xl">
            <figure><img className="w-4/5 mt-6 h-[208px] mx-auto rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="px-12">
                <h2 className="text-[#151515] text-3xl font-bold mt-5">{title}</h2>
                <div className='flex justify-between items-center'>
                <p className="text-2xl my-4 text-[#FF3811] font-semibold">Price : ${price}</p>
                <BsArrowRightShort className='text-[#FF3811] text-4xl'></BsArrowRightShort>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;