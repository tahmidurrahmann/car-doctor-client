import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="hero lg:my-36 my-16 p-8 md:p-0">
            <div className="hero-content gap-10 flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 border-white border-8 rounded-lg shadow-2xl absolute top-1/2 right-5" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-xl md:text-2xl text-[#FF3811] font-bold">About Us!</h1>
                    <h2 className="text-3xl md:text-5xl font-bold py-3 md:py-6">We are qualified <br /> & of experience <br /> in this field</h2>
                    <p className="md:py-6 py-3 text-[#737373]">There are many variations of passages of Lorem Ipsum <br /> available but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which do not <br /> look even slightly believable. </p>
                    <p className="md:py-6 py-3 text-[#737373]">the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which do not look even slightly <br /> believable. </p>
                    <button className='py-3 px-6 font-medium text-white rounded-lg bg-[#FF3811]'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;