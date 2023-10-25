import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    console.log(allProducts);
    return (
        <div>
            <div className="text-center space-y-5">
                <h2 className="text-[#FF3811] font-bold text-xl">Popular Products</h2>
                <h1 className="text-[#151515] text-5xl font-bold">Browse Our Products</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 p-6 md:p-0 md:my-20">
                {
                    allProducts.map((product, index) => <Product key={index} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;