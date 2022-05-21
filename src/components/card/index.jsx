import { Box, Button, makeStyles, Typography } from "@material-ui/core";

import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ name, userImg, background, userName, details }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const handleClick = (val) => {
    navigate(`/${val}`);
  };
  return (
    <Box className={classes.card}>
      <Box>
        <img src={background} className={classes.backgroundimg} />
        <img src={userImg} className={classes.imgO} />
      </Box>
      <Box className={classes.details}>
        <Typography>{name}</Typography>
        <Typography>{userName}</Typography>
        <Typography>{details}</Typography>
        <Button
          className={classes.btn}
          onClick={() => {
            handleClick(userName);
          }}
        >
          Details
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
const useStyles = makeStyles((theme) => ({
  card: {
    width: "305.24px",
    borderRadius: "10px",
    overFlow: "hidden",
    margin: "20px",
    position: "relative",
  },
  details: {
    backgroundColor: "#B5B5B5",
    clipPath:
      "polygon(20% 14%, 100% 0, 100% 100%, 0 100%, 0 83%, 0 34%, 0 29%, 4% 24%, 8% 20%, 14% 16%)",
    padding: "100px 0 20px 20px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: " 10px",
    position: "absolute",
    top: "215px",
    width: "285.24px",

    display: "flex",
    flexDirection: "column",
  },
  backgroundimg: {
    width: "305.24px",
    imageSize: "cover",
    height: "279px",
    width: "305.24px",
    borderRadius: "10px",
  },
  imgO: {
    height: 70,
    width: 70,
    borderRadius: 50,
    position: "absolute",
    zIndex: "2",
    top: "218px",
    left: "10px",
  },
  btn: {
    backgroundColor: "#0A1A72",
    color: "white",
    width: "100px",
    "&:hover": {
      backgroundColor: "#0A1A72",
    },
  },
}));
