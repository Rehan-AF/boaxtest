import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img from "../../assets/banner.png";
const ParamCard = () => {
  const classes = useStyles();
  const { card } = useParams();
  const Data = useSelector((state) => state.FeaturesNftsSlicer.featuresNFTs);
  return (
    <div>
      {Data.filter((dat) => dat.username.includes(card)).map(
        ({ username, bio, email, wallet_addresss, creator_img }) => {
          return (
            <div className={classes.card}>
              <Box>
                <img src={creator_img} className={classes.img} />
              </Box>
              <Box>
                <Typography variant="h5" className={classes.details}>
                  Username: {username}
                </Typography>
                <Typography className={classes.details} variant="h5">
                  Bio: {bio}
                </Typography>
                <Typography className={classes.details} variant="h5">
                  Email: {email}
                </Typography>
                <Typography className={classes.details} variant="h5">
                  wallet addresss: {wallet_addresss}
                </Typography>
              </Box>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ParamCard;
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "center",
    gap: "100px",
    alignItems: "center",
    padding: "100px 0",
    background: `url("${img}")`,
    backgroundSize: "cover",
  },
  img: {
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.45)",
    borderRadius: "15px",
    width: "453px",
    height: "412px",
  },
  details: {
    marginBottom: "10px",
  },
}));
