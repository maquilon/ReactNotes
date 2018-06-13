import Immutable from 'immutable';
import Constants from '../constants';

const notesInitialState = {
    note: Immutable.fromJS({
        loaded: false,
        notes: []
    })
};

function noteReducer(state = notesInitialState.note, action) {
    switch (action.type) {

        case Constants.LOAD_NOTES:
            state = state.updateIn(['notes'], (data) => data = Immutable.fromJS(action.notes));
            return state;

        case Constants.LOADING_NOTES:
            state = state.set('loaded', action.boolean);
            return state;

        default:
            return state;
    }
}

export { noteReducer, notesInitialState };