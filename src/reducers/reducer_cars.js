import _ from "lodash";
import { GET_CARS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_CARS:
            return _.mapKeys(action.payload, "id");
        default:
            return state;
    }
}