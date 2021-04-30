import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Divider, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import SidebarItem from "../sidebaritem/sidebaritem";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }
  newNoteBtnClick = () => {
    console.log("New Btn clicked");
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };
  updateTitle = (txt) => {
    this.setState({ title: txt });
  };
  newNote = () => {
    // console.log(this.state);
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };
  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };
  deleteNote = (note) => {
    // console.log("delete Note");
    this.props.deleteNote(note);
  };

  render() {
    const { classes, notes, selectedNoteIndex } = this.props;
    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter Note Title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}

          <List>
            {notes.map((note, index) => {
              return (
                <div key={index}>
                  <SidebarItem
                    note={note}
                    index={index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div>Add a Note!</div>;
    }
  }
}
export default withStyles(styles)(Sidebar);
