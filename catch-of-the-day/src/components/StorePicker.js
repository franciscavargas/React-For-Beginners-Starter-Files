import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // Arrow function to bind it to Storepicker (instead of using constructor)
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    // https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* This is a comment */}

        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit"> Visit Store ></button>
      </form>
    );
  }
}

export default StorePicker;
