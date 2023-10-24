import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;