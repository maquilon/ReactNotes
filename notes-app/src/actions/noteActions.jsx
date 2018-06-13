import axios from 'axios';
import Constants from '../constants/';

const base = 'http://localhost:8080/api';

class NoteActions {

    static loadNotes(notes) {
        return {
            type: Constants.LOAD_NOTES,
            notes
        }
    }

    static loading(boolean) {
        return {
            type: Constants.LOADING_NOTE,
            boolean
        }
    }

    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //

    static loadingAsync(searchText) {
        return (dispatch) => {
            axios.get(`${base}/notes/`)
                .then((response) => {
                    dispatch(NoteActions.loadNotes(response.data))
                    dispatch(NoteActions.loading(true));
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(NoteActions.loading(true));
                })
        }
    }
}

export default NoteActions;