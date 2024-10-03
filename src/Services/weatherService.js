
async function getCoordinates(location){

    location=toString(location)
    try{
        const response=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=aa4cee71ddd5c8ebb049040a1a067907`);
        
        if(!response.ok)
            {
                throw new Error("No Response")
            }

        const Data=await response.json();
        
        const apiData=Data[0];
        console.log(apiData);
        
        return apiData;
    }
    catch
    {
        
    }

}

async function getWeather({lat,lon}){

    try{
        const response=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=aa4cee71ddd5c8ebb049040a1a067907`)
        // Task change API

        if(!response.ok)
        {
            throw new Error("No Response");
        }

        const Data=await response.json();
        
    }
    catch
    {
        console.error("some Error occured")
    }

}