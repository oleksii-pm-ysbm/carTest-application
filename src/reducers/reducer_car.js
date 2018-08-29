import { GET_CAR } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_CAR:
            return { ...state, [action.payload]: action.payload };
        default:
            return state;
    }
}