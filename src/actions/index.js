
const contactsLoaded = (data) => {
  return {
    payload: data,
    type: 'FETCH_CONTACTS_SUCCEEDED'
  };
};

// If fe
const contactsFailure = (err) => {
  return {
    payload: err,
    type: 'FETCH_CONTACTS_FAILURE'
  };
};



const fetchContacts = () => (dispatch) => {
  fetch('http://demo.sibers.com/users')
    .then(res => res.json())
    .then(data => dispatch(contactsLoaded(data)))
    .catch(err => dispatch(contactsFailure(err)));
};

export {
  fetchContacts
};