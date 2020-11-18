export default async function fetchAvailability(link) {
    let allAvailability = []

    await fetch(link).then(response => response.json()).then(data => allAvailability.push(data));
   
    console.log(allAvailability)

    return allAvailability;
}