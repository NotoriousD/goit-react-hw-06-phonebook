const initialState = () => {
  if (localStorage.getItem("contacts")) {
    return JSON.parse(localStorage.getItem("contacts"));
  } else
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
};

const contactReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case "ADD_CONTACT":
      return [...state, payload];

    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== payload.id);

    default:
      return state;
  }
};

export default contactReducer;
