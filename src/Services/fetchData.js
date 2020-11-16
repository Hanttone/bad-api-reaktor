export default async function fetchData(link) {
    let allData = []

    await fetch(link).then(response => response.json()).then(data => allData.push(...data));

    return allData;
}