import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    justifyContent: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export default function Search() {
  const classes = useStyles();
  return (
    <div className="search">
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Ships"
          inputProps={{ "aria-label": "search ships" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
