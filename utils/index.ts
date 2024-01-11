export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0df816d264msh45659df64ebec16p1f2b11jsn8f612039af4c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}