const Teams = () => {
    return (
        <div>
            <div className="text-center space-y-5">
                <h2 className="text-[#FF3811] font-bold text-xl">Team</h2>
                <h1 className="text-[#151515] text-5xl font-bold">Meet Our Team</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="carousel w-full">
                <div id="slide10" className="carousel-item relative w-full">
                    <div className="card border rounded-xl">
                        <figure><img className="bg-[#F3F3F3] p-3 w-4/5 mt-6 h-[208px] mx-auto rounded-lg" src='https://i.ibb.co/Qj3kQ4d/1.jpg' alt="Shoes" /></figure>
                        <div className="px-12 text-center">
                            <h2 className="text-[#151515] text-3xl font-bold mt-5">Car Engine Plug</h2>
                            <p className="text-2xl my-4 text-[#FF3811] font-semibold">Engine Expert</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide13" className="btn btn-circle">❮</a>
                        <a href="#slide11" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide11" className="carousel-item relative w-full">
                    <div className="card border rounded-xl">
                        <figure><img className="bg-[#F3F3F3] p-3 w-4/5 mt-6 h-[208px] mx-auto rounded-lg" src='https://i.ibb.co/5cNwLxb/2.jpg' alt="Shoes" /></figure>
                        <div className="px-12 text-center">
                            <h2 className="text-[#151515] text-3xl font-bold mt-5">Car Engine Plug</h2>
                            <p className="text-2xl my-4 text-[#FF3811] font-semibold">Engine Expert</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide10" className="btn btn-circle">❮</a>
                        <a href="#slide12" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide12" className="carousel-item relative w-full">
                    <div className="card border rounded-xl">
                        <figure><img className="bg-[#F3F3F3] p-3 w-4/5 mt-6 h-[208px] mx-auto rounded-lg" src='https://i.ibb.co/6s2HT9C/3.jpg' alt="Shoes" /></figure>
                        <div className="px-12 text-center">
                            <h2 className="text-[#151515] text-3xl font-bold mt-5">Car Engine Plug</h2>
                            <p className="text-2xl my-4 text-[#FF3811] font-semibold">Engine Expert</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide11" className="btn btn-circle">❮</a>
                        <a href="#slide13" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide13" className="carousel-item relative w-full">
                    <div className="card border rounded-xl">
                        <figure><img className="bg-[#F3F3F3] p-3 w-4/5 mt-6 h-[208px] mx-auto rounded-lg" src='https://i.ibb.co/Qj3kQ4d/1.jpg' alt="Shoes" /></figure>
                        <div className="px-12 text-center">
                            <h2 className="text-[#151515] text-3xl font-bold mt-5">Car Engine Plug</h2>
                            <p className="text-2xl my-4 text-[#FF3811] font-semibold">Engine Expert</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide12" className="btn btn-circle">❮</a>
                        <a href="#slide10" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;