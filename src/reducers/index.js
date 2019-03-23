const initialState = {
  contacts: [],
  error: null
};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case 'FETCH_CONTACTS_SUCCEEDED':
      return {
        ...state,
        error: null,
        contacts: action.payload
      };
    
    case 'FETCH_CONTACTS_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    
    
    default:
      return state;
  };

};

export default reducer;