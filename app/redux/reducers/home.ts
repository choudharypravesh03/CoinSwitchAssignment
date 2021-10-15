import { HOME } from "../actions/types";

export default function(state = { coinsData: [] }, action) {
    console.log('state => ', state)
    switch (action.type) {
        case HOME:
            return { coinsData: action.payload };
        default:
            return state;
    }
}