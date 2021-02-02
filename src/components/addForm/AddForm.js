import React, { useState } from "react";
import {
  addNewNumber,
  deleteNumber,
  setFilter,
  setWarning,
} from "../../redux/actions/actions";
import { connect } from "react-redux";

const initialState = {
  name: "",
  number: "",
};

const AddForm = ({ contacts, addNumber, deleteNumber, setWarning }) => {
  const [state, setState] = useState({ ...initialState });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const checkName = state.name;
    const filteredName = contacts.some((item) => item.name === checkName);

    if (filteredName) {
      setWarning("on");
      setState({ ...initialState });
    } else {
      const contactObject = {
        name: state.name,
        number: state.number,
      };
      addNumber(contactObject);
      setState({ ...initialState });
      setWarning("off");
      // localStorage.setItem(
      //   "phoneBook",
      //   JSON.stringify(contacts)
      // );
    }
  };

  return (
    <div className="addPanel">
      <form onSubmit={onSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          className="addPanelInput"
          placeholder="Type name..."
          name="name"
          value={state.name}
          onChange={onChange}
        ></input>
        <h2>Number</h2>
        <input
          type="text"
          className="addPanelInput"
          placeholder="Type number..."
          name="number"
          value={state.number}
          onChange={onChange}
        ></input>
        <br />
        <button type="submit" className="handleButton">
          Add contact
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (id) => {
      dispatch(addNewNumber(id));
    },
    deleteNumber: (id) => {
      dispatch(deleteNumber(id));
    },
    setFilter: (id) => {
      dispatch(setFilter(id));
    },
    setWarning: (warning) => {
      dispatch(setWarning(warning));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
