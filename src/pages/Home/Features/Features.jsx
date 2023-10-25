import check from '../../../assets/icons/check.svg'
import delivery from '../../../assets/icons/deliveryt.svg'
import group from '../../../assets/icons/group.svg'
import person from '../../../assets/icons/person.svg'
import wrench from '../../../assets/icons/Wrench.svg'

const Features = () => {
    return (
        <div>
            <div className="text-center space-y-5">
                <h2 className="text-[#FF3811] font-bold text-xl">Core Features</h2>
                <h1 className="text-[#151515] text-5xl font-bold">Why Choose Us</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
           <div className='flex flex-col md:flex-row gap-6 justify-center items-center my-10'>
           <div className='border p-6 rounded-xl'>
                <img src={delivery} alt="" />
                <p className='text-[#444] font-bold text-lg'>Timely Delivery</p>
            </div>
           <div className='border p-6 rounded-xl'>
                <img src={group} alt="" />
                <p className='text-[#444] font-bold text-lg'>Expert Team</p>
            </div>
           <div className='border p-6 rounded-xl'>
                <img src={person} alt="" />
                <p className='text-[#444] font-bold text-lg'>24/7 Support</p>
            </div>
           <div className='border p-6 rounded-xl'>
                <img src={wrench} alt="" />
                <p className='text-[#444] font-bold text-lg'>Best Equipment</p>
            </div>
           <div className='border p-6 rounded-xl'>
                <img src={check} alt="" />
                <p className='text-[#444] font-bold text-lg'>100% Guranty</p>
            </div>
           <div className='border p-6 rounded-xl'>
                <img src={delivery} alt="" />
                <p className='text-[#444] font-bold text-lg'>Timely Delivery</p>
            </div>
           </div>
        </div>
    );
};

export default Features;