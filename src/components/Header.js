import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

const Header = props => {
  return (
    <AppBar>
      <Toolbar>
        <List>
          <ListItem className="nav-item">About me</ListItem>
          <ListItem className="nav-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/axel-axelsson-982b4171/"
            >
              Linked in
            </a>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
