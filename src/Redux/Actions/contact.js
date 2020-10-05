const shortId = require("shortid");

const addContact = ({ name, number }) => {
  return {
    type: "ADD_CONTACT",
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  };
};

const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: {
    id,
  },
});

export { addContact, deleteContact };
