

export default function Products({productsData, availabilityData}) {

    console.log(availabilityData)

   /* async function fetchAvailablity(id, manufacturer) {
        if (!fetched.includes(manufacturer)) {
            setFetched(...fetched, manufacturer);
            //await fetch(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`).then(response => response.json()).then(data => setAvailability(...data))
        }
        //checkAvailability(id);
        console.log(fetched)
    }*/

    /*function checkAvailability(id) {
        if (id.toUpperCase() === availabilityData.id) {
            console.log(availabilityData.id)
        }
    }*/

    return <>
    {productsData.map(product => <div key={product.id}><div >{product.name}</div><div>{product.price}</div><div></div></div>)}
    </>
}