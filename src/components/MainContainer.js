import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../src/styles/mainContainer.css";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainContainer = () => {
  const [ImgSource] = useState([
    "http://placekitten.com/320/220",
    "http://placekitten.com/320/221",
    "http://placekitten.com/320/222",
    "http://placekitten.com/320/220",
    "http://placekitten.com/320/221",
    "http://placekitten.com/320/222",
    "http://placekitten.com/320/220",
    "http://placekitten.com/320/221",
    "http://placekitten.com/320/222",
  ]);

  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className="container">
        <div className="gridLayout">
          {ImgSource.map((item, index) => (
            <div className="img-wrapper" key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContainer;
