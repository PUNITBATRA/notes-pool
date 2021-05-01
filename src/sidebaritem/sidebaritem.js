import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { removeHTMLTags } from "../helpers";

class SidebarItem extends React.Component {
  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };
  deleteNote = (note) => {
    if (window.confirm(`Are you sure you wanna delete note: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };

  render() {
    const { index, note, classes, selectedNoteIndex } = this.props;
    return (
      <div key={index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === index}
          alignItems="flex-start"
          onClick={() => this.selectNote(note, index)}
        >
          <div className={classes.textSection}>
            <ListItemText
              primary={note.title}
              secondary={removeHTMLTags(note.body.substring(0, 30)) + "..."}
            ></ListItemText>
          </div>
          <DeleteIcon
            onClick={() => this.deleteNote(note)}
            className={classes.deleteIcon}
          ></DeleteIcon>
        </ListItem>
      </div>
    );
  }
}
export default withStyles(styles)(SidebarItem);
