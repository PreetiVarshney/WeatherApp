const key = 'u0oJOB0oYipQoAP53zgoX4Wx3jGxqA9y';

//weather Information

const getWeather = async(id)=>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();


    return data[0];
};

//City Information
const getCity = async(city)=>
{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}
