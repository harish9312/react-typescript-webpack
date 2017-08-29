import { fromJS } from 'immutable';
let INITIAL_STATE = fromJS({
    data: ['a', 'b', 'c']
});

export function demoReducer(state = INITIAL_STATE, action: { type: string, value: string }) {

    switch (action.type) {
        case 'DEMO':
            return INITIAL_STATE;
        default:
            return INITIAL_STATE;
    }

}
