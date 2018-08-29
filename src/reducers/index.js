import { combineReducers } from 'redux';
import CarsReducer from './reducer_cars';
import CarReducer from './reducer_car';

const rootReducer = combineReducers({
    cars: CarsReducer,
    car: CarReducer
});


export default rootReducer;
