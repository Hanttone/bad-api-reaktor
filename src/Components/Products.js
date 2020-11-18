

export default function Products({productsData, availabilityData}) {

    console.log(availabilityData)

    /*function checkAvailability(id) {
        if (id.toUpperCase() === availabilityData.id) {
            console.log(availabilityData.id)
        }
    }*/

    return <>
    {productsData.map(product => <div key={product.id}><div >{product.name}</div><div>{product.price}</div><div></div></div>)}
    </>
}