import React, { Component } from "react";
import ContactList from "./contactList/ContactList";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./app.css";
import AddForm from "./addForm/AddForm";
import { connect } from "react-redux";
import {
  addNewNumber,
  deleteNumber,
  setFilter,
} from "../redux/actions/actions";

class App extends Component {
  setNewFilter = (e) => {
    this.props.setFilter(e.target.value);
  };

  handleDelete = (e) => {
    const id = e.target.name;
    this.props.deleteNumber(id);
    localStorage.setItem("phoneBook", JSON.stringify(this.props.contacts));
  };
  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  filter = () => {
    if (this.props.contacts) {
      const filtered = this.props.contacts.filter((item) =>
        item.name.toLowerCase().includes(this.props.filter.toLowerCase())
      );
      return filtered;
    } else {
      return;
    }
  };
  // componentDidMount() {

  //   const dataLocal = JSON.parse(localStorage.getItem("phoneBook"));
  //   console.log(dataLocal)
  //   if (dataLocal) {
  //     this.props.addNumber(dataLocal);
  //   } else {
  //     return;
  //   }
  // }
  // componentDidUpdate() {
  //   // localStorage.setItem("phoneBook", JSON.stringify(this.state.contacts));
  //   const dataLocal = JSON.parse(localStorage.getItem("phoneBook"));
  //   if (dataLocal) {
  //     this.props.contacts({ contacts: [...dataLocal] });
  //   } else {
  //     return;
  //   }
  // }

  render() {
    return (
      <>
        <CSSTransition
          in={this.props.warning === "on"}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div className="warning">
            <p>Contact already exist</p>
          </div>
        </CSSTransition>

        <div className="addPanel">
          <CSSTransition in={true} timeout={300} classNames="alert" appear>
            <h1>Phonebook</h1>
          </CSSTransition>
        </div>

        <AddForm />

        {this.props.contacts.length > 0 && (
          <div className="addPanel">
            <input
              name="filter"
              onChange={this.setNewFilter}
              className="addPanelInput"
              placeholder="Find contact..."
            ></input>
          </div>
        )}

        <div className="addPanel">
          <h2>Contacts</h2>

          <TransitionGroup component="ul">
            {this.filter().map((contact) => (
              <CSSTransition key={contact.id} timeout={300} classNames="item">
                <ContactList
                  contact={contact}
                  handleDelete={this.handleDelete}
                  key={contact.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
    warning: state.warning,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
