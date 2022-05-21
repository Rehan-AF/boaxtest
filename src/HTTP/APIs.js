import { boaxClient } from "./urls";

export const getNFTbanner = async () => {
  const { data } = await boaxClient.get(
    "/admin/admin/api/nfts/readFeaturedArt.php"
  );
  return data.nfts;
};
export const getNFTs = async () => {
  const { data } = await boaxClient.get(
    "/admin/admin/api/Creators/readFeaturedCreators.php"
  );
  return data.Creators;
};
