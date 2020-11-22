export default async function fetchData(urls) {
    try {
        let allData = [];  
    
        const arrayOfPromises = urls.map(url => fetch(url));
        for await (let request of arrayOfPromises) {
            const data = await request.json();
            allData.push(data);
        }
        return allData

    } catch (error) {
        console.log("oops something went wrong", error)
    }
}

  /*const manufacturers = ["reps", "abiplos", "nouke", "derp", "xoon"]
   ,
   
  */