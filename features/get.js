import useSatelliteStore from "@/zooStore/satellitesStore";

const rootUrl = 'http://localhost:8080/';


export async function getSatellites(lat, long) {
<<<<<<< HEAD:features/post.js
    const url = `${rootUrl}${satelites}${lat}/${long}`;
=======
    const satelites = 'satelite/getAllAbove/';
    const url = `${rootUrl}${satelites}${lat}/${long}`;  // Construct the URL dynamically using lat and long
>>>>>>> 0301d7ecc40e137db827c2685ef70e09de682589:features/get.js

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
        return data;

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