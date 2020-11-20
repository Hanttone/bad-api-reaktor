import Product from "./Product";

export default function Products({productsData, reps, derp, abiplos, xoon, nouke}) {

    function checkAvailability(id, manufacturer) {
        let availability = ""
    
        if (manufacturer === "reps") {
            reps.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD));
            return availability
        } else if (manufacturer === "derp") {
            derp.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD));
            return availability
        } else if (manufacturer === "abiplos") {
            abiplos.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD));
            return availability
        } else if (manufacturer === "xoon") {
            xoon.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD));
            return availability
        } else if (manufacturer === "nouke") {
            nouke.response.map(rep => ((rep.id === id.toUpperCase())) && (availability = rep.DATAPAYLOAD));
            return availability
        } else {
            return console.log(manufacturer)
        }
    }

    return <div>
        <Product name="Product Name" price="Price" availability="Availability"></Product>
        {productsData.map(product => <Product key={product.id} name={product.name} price={product.price} availability={checkAvailability(product.id, product.manufacturer)}></Product>)}
    </div>
}
