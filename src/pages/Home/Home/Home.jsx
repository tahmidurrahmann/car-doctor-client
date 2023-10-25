import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import AboutUs from "../AboutUs/AboutUs";
import Teams from "../Teams/Teams";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Products></Products>
            <Teams></Teams>
            <Features></Features>
        </div>
    );
};

export default Home;