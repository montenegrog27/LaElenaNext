import MainSection from "../components/MainSection";
import RecommendedProducts from "../components/RecommendedProducts";
import MisionVision from "../components/MisionVision";
import AllCategories from "../components/AllCategories";
import FooterWeb from "../components/FooterWeb";

export default function Home() {
  return (
    <div>
      <MainSection />
      <RecommendedProducts />
      <MisionVision />
      <RecommendedProducts />
      <AllCategories />
      <FooterWeb />
    </div>
  );
}
