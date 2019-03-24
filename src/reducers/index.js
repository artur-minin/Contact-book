const initialState = {
  contacts: [],
  error: false
}

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        error: action.payload
      };

    case 'FETCH_DATA_SUCCEEDED':
      return {
        ...state,
        error: false,
        contacts: action.payload
      };

    
    default:
      return state;
  };

};

export default reducer;