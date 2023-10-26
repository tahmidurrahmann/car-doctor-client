import checkout from '../../assets/images/checkout/checkout.png'
const CheckBanner = () => {
    return (
        <div className='relative'>
            <img className='w-full my-10 rounded-xl' src={checkout} alt="" />
            <div className=' bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full absolute top-0'>
                <h1 className='text-white text-2xl left-10 md:text-5xl top-1/2 md:left-32 font-bold absolute'>Check Out</h1>
                <h1 className='text-white md:text-xl font-medium absolute py-1 px-2 md:py-3 md:px-6 left-1/2 bg-[#FF3811] bottom-0'>Home/Checkout</h1>
            </div>
        </div>
    );
};

export default CheckBanner;