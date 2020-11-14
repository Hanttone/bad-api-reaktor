

export default function Jackets({jacketsData}) {

    let manufacturer = ''
    
    function fetchAvailablity(id, manufacturer) {
        fetch(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`).then(response => response.json()).then(data => {
            if (data.id === id) {
                manufacturer = data.manufacturer
            }
        })
    }

    return <>
    {jacketsData.map(jacket => <div key={jacket.id}><div >{jacket.name}</div><div>{jacket.price}</div><div>{fetchAvailablity(jacket.id, jacket.manufacturer)}{manufacturer}</div></div>)}
    </>
}