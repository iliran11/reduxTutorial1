export default function(state = null, action = null) {
    console.log (state, action);
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;

}
