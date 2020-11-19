export default function Product ({name, price, availability}) {

    return <section>
        <div>{name}</div>
        <div>{price}</div>
        <div>{availability}</div>
    </section>
}