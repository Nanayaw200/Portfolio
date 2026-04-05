import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/home/HeroSection";
import ToolkitSection from "../components/home/ToolKitSection";

function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ToolkitSection />
    </MainLayout>
  );
}

export default HomePage;