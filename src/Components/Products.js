import Product from "./Product";

export default function Products({productsData, reps, derp, abiplos, xoon, nouke}) {

    /*function checkAvailability(id, manufacturer) {
        const filtered = reps.filter(rep => rep.id === id.toUpperCase())
        console.log(filtered)
    }*/

    function checkAvailability(id, manufacturer) {
        switch (manufacturer) {
            case ("reps") :
                reps.response.map(rep => (rep.id === id.toUpperCase()) && console.log(rep.DATAPAYLOAD));
                break;
            default : 
            console.log("oops")
        }
    }




    /*function checkAvailability(id) {
        if (id.toUpperCase() === availabilityData.id) {
            console.log(availabilityData.id)
            (rep.id === ) && rep
        }
    }*/

    return <div>
    {productsData.map(product => <Product key={product.id} name={product.name} price={product.price}></Product>)}
    </div>
}