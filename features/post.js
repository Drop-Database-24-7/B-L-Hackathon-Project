const rootUrl = 'http://localhost:8080/'; 
const satelites = 'satelite/getAllAbove/'

const getSatelitesURL = rootUrl + satelites 


const url = 'http://localhost:8080/satelite/getAllAbove/52.0943/19.4565'

export async function getSatellites(lat, long) { 
    try {
        console.log("Hello")
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
        return response;

    } catch (error) {
        console.error('Error:', error);
        return null;  
    }
}




