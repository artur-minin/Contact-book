
const dataLoaded = (data) => {
  return {
    payload: data,
    type: 'FETCH_DATA_SUCCEEDED'
  };
};

const dataFailure = (error) => {
  return {
    payload: error,
    type: 'FETCH_DATA_FAILURE'
  };
};

const fetchDataFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  }
  catch (error) {
    throw new Error(error);
  };
};

const getContacts = async (dispatch) => {
  const contactsIsExist = localStorage.getItem('contacts');
  
  // If 'contacts' exist in localStorage
  if (contactsIsExist) {
    const data = JSON.parse(localStorage.getItem('contacts'));
    dispatch(dataLoaded(data));
  }
  else {
    try {
      const data = await fetchDataFromAPI('http://demo.sibers.com/users');
      localStorage.setItem('contacts', JSON.stringify(data));
      dispatch(dataLoaded(data));
    }
    catch(error) {
      dispatch(dataFailure(error));
    };
  };
};

export {
  getContacts
};