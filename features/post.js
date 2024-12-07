import useSatelliteStore from "@/zooStore/satellitesStore";
const rootUrl = 'http://localhost:8080/';
const satelites = 'satelite/getAllAbove/';


export async function getSatellites(lat, long) {
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
