import Skeleton from "@mui/material/Skeleton";

const SkeletonImg = () => {
  return (
    <Skeleton
      variant="rectangular"
      width="100%"
      height="100%"
      animation="pulse"
      sx={{ bgcolor: "var(--skeleton)" }}
    />
  );
};

export default SkeletonImg;
