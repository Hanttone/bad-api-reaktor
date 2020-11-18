export default async function fetchData() {
    try {
        let allData = [];

        const productsUrl = [
        'https://bad-api-assignment.reaktor.com/products/jackets', 
        'https://bad-api-assignment.reaktor.com/products/shirts', 
        'https://bad-api-assignment.reaktor.com/products/accessories',
        'https://bad-api-assignment.reaktor.com/availability/derp',
        'https://bad-api-assignment.reaktor.com/availability/reps',
        'https://bad-api-assignment.reaktor.com/availability/abiplos',
        'https://bad-api-assignment.reaktor.com/availability/nouke',
        'https://bad-api-assignment.reaktor.com/availability/xoon'
        ]   
    
        const arrayOfPromises = productsUrl.map(url => fetch(url));
        for await (let request of arrayOfPromises) {
            const data = await request.json();
            allData.push(data);
        }
        return allData

    } catch (error) {
        console.log("oops something went wrong", error)
    }
}

  /*const manufacturers = ["reps", "abiplos", "nouke", "derp", "xoon"]*/