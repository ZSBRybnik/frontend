import dynamic from "next/dynamic";

const HomepageContent = dynamic(
  () => import("../components/Pages/Homepage/Homepage"),
);

const Homepage = () => {
  return <HomepageContent />;
};

export default Homepage;
