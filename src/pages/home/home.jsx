import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import NftCard from "../../components/nftCardTimer/index";
import { getFeaturesNfts } from "../../features/FeaturesNft/featuredArts.action";

const Home = () => {
  const classes = useStyles();
  const Data = useSelector((state) => state.FeaturesNftsSlicer.featuresNFTs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeaturesNfts());
  }, []);
  console.log(Data, "nfts");
  return (
    <div className={classes.home}>
      <NftCard />
      <Box className={classes.heading}>
        <Typography variant="h1">Featured Creators</Typography>
        <hr />
      </Box>
      <Box className={classes.nfts}>
        {Data.map(({ username, fullName, bio, creator_img, creator_cover }) => {
          return (
            <Card
              userName={username}
              name={fullName}
              details={bio}
              background={creator_cover}
              userImg={creator_img}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Home;
const useStyles = makeStyles((theme) => ({
  nfts: {
    display: "flex",
    gap: "20px",
    padding: "40px",
  },
  heading: {
    textAlign: "center",
    padding: "0 75px",
    "& h1": {
      fontSize: "24px",
      fontWeight: "900",
    },
  },
}));
