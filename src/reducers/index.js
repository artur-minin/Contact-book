const initialState = {
  contacts: [],
  theme: 'light',
  error: false
}

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case 'ERROR_OCCURED':
      return {
        ...state,
        error: action.payload
      }

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
    
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: action.payload
      }
    
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: action.payload
      }
    
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: action.payload
      }
    
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload
      }

    
    default:
      return state;
  };
};

export default reducer;