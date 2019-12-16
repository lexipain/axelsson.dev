import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Header from "./components/Header";

const MyJsx = () => (
  <div>
    <CssBaseline />
    <Header />{" "}
    <Container maxWidth="md">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper className="sidebar-content">
              <Typography component="p">
                Paper can be used to build surface or other elements for your
                application.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className="main-content">
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </div>
);

ReactDOM.render(<MyJsx />, document.getElementById("app"));
