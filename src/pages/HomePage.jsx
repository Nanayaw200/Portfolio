import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/home/HeroSection";
import ToolkitSection from "../components/home/ToolKitSection";
import usePageTitle from "../hooks/usePageTitle";

function HomePage() {
  usePageTitle("Yaw Effah Opoku | The Digital Alchemist");

  return (
    <MainLayout>
      <HeroSection />
      <ToolkitSection />
    </MainLayout>
  );
}

export default HomePage;