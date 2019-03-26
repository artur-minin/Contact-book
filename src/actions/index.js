
const dataLoaded = (data) => {
  return {
    payload: data,
    type: 'FETCH_DATA_SUCCEEDED'
  }
}

const dataFailure = (error) => {
  return {
    payload: error,
    type: 'FETCH_DATA_FAILURE'
  }
}

const fetchDataFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  }
  catch (error) {
    throw new Error(error);
  }
}

const getContacts = async (dispatch) => {
  const contactsIsExist = localStorage.getItem('contacts');
  
  // If 'contacts' exist in localStorage
  if (contactsIsExist) {
    const data = JSON.parse(localStorage.getItem('contacts'));
    dispatch(dataLoaded(data));
  }
  else {
    fetchDataFromAPI('http://demo.sibers.com/users')
      .then(data => {
        localStorage.setItem('contacts', JSON.stringify(data));
        dispatch(dataLoaded(data));
      })
      .catch(error => {
        dispatch(dataFailure(error));
      })
  }
}


// Change contact
const changeContact = (allContacts, currentContact, changedProps) => {
  
  let { address, company } = currentContact;
  const { name,
          email,
          phone,
          website,
          city,
          favorite,
          street: streetA,
          apartment: streetD,
          company: companyName } = changedProps
  
  address = { ...address, city, streetA, streetD };
  company.name = companyName;

  const modifiedContact = { ...currentContact, address, company, name, email, phone, website, favorite };

  // Sort by id, since the new array is formed in ascending order of the element id
  const sortedContacts = allContacts.sort((current, next) => current.id - next.id);

  const newContactsArray = [ ...sortedContacts.slice(0, currentContact.id),
                             modifiedContact,
                             ...sortedContacts.slice(currentContact.id + 1) ];
  
  // Set new contacts array in localStorage
  localStorage.setItem('contacts', JSON.stringify(newContactsArray));

  return {
    payload: newContactsArray,
    type: 'CHANGE_CONTACT'
  }
};


export {
  getContacts,
  changeContact
};