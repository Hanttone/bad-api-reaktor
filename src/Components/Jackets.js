
export default function Jackets({jacketsData}) {
   /* async function fetchAvailablity(id, manufacturer) {
        if (!fetched.includes(manufacturer)) {
            setFetched(...fetched, manufacturer);
            //await fetch(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`).then(response => response.json()).then(data => setAvailability(...data))
        }
        //checkAvailability(id);
        console.log(fetched)
    }

    function checkAvailability(id) {
        if (id === availability.id) {
            console.log(availability.id)
        }
    }*/

    return <>
    {jacketsData.map(jacket => <div key={jacket.id}><div >{jacket.name}</div><div>{jacket.price}</div><div></div></div>)}
    </>
}