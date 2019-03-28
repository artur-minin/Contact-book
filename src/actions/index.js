import sortById from '../utils/sort-by-id';

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


// Add contact
const addContact = (allContacts, newContact) => {

  // If the 'name' field is empty, write the contact sequence number
  if (newContact.name === '') {
    newContact.name = `Contact ${newContact.id}`;
  }

  // New contact's structure according to API
  newContact = {
    avatar: newContact.avatar,
    name: newContact.name,
    email: newContact.email,
    phone: newContact.phone,
    website: newContact.website,
    favorite: newContact.favorite,
    id: newContact.id,

    address: {
      city: newContact.city,
      streetA: newContact.street,
      streetD: newContact.apartment
    },

    company: {
      name: newContact.company
    }
  }

  const newContactsArray = [...allContacts, newContact];

  localStorage.setItem('contacts', JSON.stringify(newContactsArray));

  return {
    payload: newContactsArray,
    type: 'ADD_CONTACT'
  }
};


// Edit contact
const editContact = (allContacts, currentContact, changedProps) => {

  // If the name field is empty - write the old value to it
  if (changedProps.name === '') {
    changedProps.name = currentContact.name;
  }
  
  let { address, company } = currentContact;
  const { avatar,
          name,
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

  const modifiedContact = { ...currentContact, address, company, avatar, name, email, phone, website, favorite };

  // Sort by id, since the new array is formed in ascending order of the element id
  const sortedContacts = allContacts.sort((current, next) => sortById(current, next, 'ascending'));

  const newContactsArray = [ ...sortedContacts.slice(0, currentContact.id),
                             modifiedContact,
                             ...sortedContacts.slice(currentContact.id + 1) ];
  
  localStorage.setItem('contacts', JSON.stringify(newContactsArray));

  return {
    payload: newContactsArray,
    type: 'EDIT_CONTACT'
  }
};


// Delete contact
const deleteContact = (allContacts, id) => {

  // Sort by id, since the new array is formed in ascending order of the element id
  const sortedContacts = allContacts.sort((current, next) => sortById(current, next, 'ascending'));
  
  // Shift the elements standing after the deleted and decrease each id by 1
  // Started id
  let idx = id;
  const afterDeleted = sortedContacts
                       .filter(contact => contact.id > id)
                       .map( filtredContact => {
                             filtredContact.id = idx;
                             idx++;
                             return filtredContact;
                         } 
                       );

  const newContactsArray = [ ...sortedContacts.slice(0, id),
                             ...afterDeleted ];
  
  localStorage.setItem('contacts', JSON.stringify(newContactsArray));

  return {
    payload: newContactsArray,
    type: 'DELETE_CONTACT'
  }
};


export {
  getContacts,
  addContact,
  editContact,
  deleteContact
};