import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mb-10 space-y-5 px-3 md:px-0">
            <div className="text-center space-y-5">
                <h2 className="text-[#FF3811] font-bold text-xl">Service</h2>
                <h1 className="text-[#151515] text-5xl font-bold">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="flex justify-center">
                <button className='text-lg font-semibold text-[#FF3811] py-3 px-6 rounded-lg border border-[#FF3811]'>More Services</button>
            </div>
        </div>
    );
};

export default Services;