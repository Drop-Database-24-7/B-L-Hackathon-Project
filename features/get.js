import useSatelliteStore from "@/zooStore/satellitesStore";

const rootUrl = 'http://localhost:8080/';


export async function getSatellites(lat, long) {
    const satelites = 'satelite/getAllAbove/';
    const url = `${rootUrl}${satelites}${lat}/${long}`;  // Construct the URL dynamically using lat and long

    try {
        console.log("Fetching satellites...");
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
        console.log('Saved to Zustand: ', satelites)
        return data;  // Return the actual data, not the response

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export async function getImage(id){
    const image_url = `satelite/getImageForSatelite/${id}`;
    const url = `${rootUrl}${image_url}`;  
    console.log(url)


    try {
        console.log("Fetching satellites...");
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
        console.log(data.image)
        return data.image;  

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}