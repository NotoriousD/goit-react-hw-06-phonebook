import React, { Component } from "react";
import { ContactForm } from "./Components/ContactForm";
import { ContactList } from "./Components/ContactList";
import { Filter } from "./Components/Filter";
import style from "./app.module.css";
import pop from "./Transition/pop.module.css";
import { connect } from "react-redux";

import { CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div className={style.container}>
        <ContactForm></ContactForm>

        <CSSTransition
          in={contacts.length > 1}
          timeout={500}
          classNames={pop}
          unmountOnExit
        >
          <Filter></Filter>
        </CSSTransition>
        <ContactList></ContactList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contact,
});

export default connect(mapStateToProps)(App);
