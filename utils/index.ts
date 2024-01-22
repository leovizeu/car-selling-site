import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0df816d264msh45659df64ebec16p1f2b11jsn8f612039af4c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 45; // Base rental per day in dollars

    const mileageFactor = 0.1; // Factor to calculate the price based on the mileage

    const yearFactor = 0.1; // Factor to calculate the price based on the year

    // Calculate additional rate based on mileage and year
    const mileagePrice = city_mpg * mileageFactor;
    const yearPrice = (new Date().getFullYear() - year) * yearFactor;

    // Calculate the total price per day
    const totalPricePerDay = basePricePerDay + mileagePrice + yearPrice;

    return totalPricePerDay;
}

//export const generateCarImageURL (car: CarProps, angle?: string) => {
    
//}