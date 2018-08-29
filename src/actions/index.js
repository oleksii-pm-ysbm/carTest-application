import Cars from '../api/cars';
import getCarById from  '../api/car';

export const GET_CARS = 'GET_CARS';
export const GET_CAR = 'GET_CAR';

export function getCars() {
    return {
        type: GET_CARS,
        payload: Cars
    }
}

export function getCar(id) {
    const car = getCarById(id);
    return {
        type: GET_CAR,
        payload: car
    }
}