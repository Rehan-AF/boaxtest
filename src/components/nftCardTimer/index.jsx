import React, { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

import nft from "../../assets/nft.png";
import userIcon from "../../assets/userIcon.png";
import background from "../../assets/banner.png";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturesArtsAction } from "../../features/FeatureArts/featuredArts.action";
import CircularProgress from "@material-ui/core/CircularProgress";
const NftCard = () => {
  const classes = useStyles();
  const Data = useSelector((state) => state.FeaturesArtsSlicer.featuresArts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeaturesArtsAction());
  }, []);
  console.log(Data, "rehan");

  return (
    <div>
      {Data ? (
        <div>
          {Data.map(({ art_name, creator_name, owner_img, creator_img }) => {
            return (
              <Box className={classes.nftComponent}>
                <Box className={classes.nftCard}>
                  <Box>
                    <img src={creator_img} alt="nft" className={classes.nft} />
                  </Box>
                  <Box className={classes.nftDetailsContainer}>
                    <Box className={classes.userIconBox}>
                      <img src={owner_img} className={classes.userIcon} />
                      <Typography>{creator_name}</Typography>
                    </Box>
                    <Box>
                      <Typography className={classes.heading}>
                        {art_name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </div>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default NftCard;
const useStyles = makeStyles((theme) => ({
  nft: {
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.45)",
    borderRadius: "15px",
    width: "453px",
    height: "412px",
  },
  nftComponent: {
    background: `url("${background}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  nftCard: {
    display: "flex",
    justifyContent: "space-around",
    padding: "97px 163px",
  },
  userIconBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 15px rgba(10, 26, 114, 0.49)",
    borderRadius: "50px",
    width: "205px",
  },
  heading: {
    fontSize: "48px",
  },
  userIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  nftDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
