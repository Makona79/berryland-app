import React from "react";
import ContentLoader from "react-content-loader";
const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={296}
    height={439}
    viewBox="0 0 296 439"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="248" height="93" />
    <rect x="0" y="116" rx="0" ry="0" width="247" height="173" />
    <rect x="52" y="302" rx="0" ry="0" width="159" height="25" />
    <rect x="6" y="337" rx="0" ry="0" width="134" height="49" />
    <rect x="134" y="338" rx="0" ry="0" width="114" height="49" />
  </ContentLoader>
);

export default Skeleton;
