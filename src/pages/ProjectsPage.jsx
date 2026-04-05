import MainLayout from "../layouts/MainLayout";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectGrid from "../components/projects/ProjectGrid";
import TechStackBar from "../components/projects/TechStackBar";
import usePageTitle from "../hooks/usePageTitle";

function ProjectsPage() {
  usePageTitle("Projects | Yaw Effah Opoku");

  return (
    <MainLayout>
      <ProjectsHero />
      <ProjectGrid />
      <TechStackBar />
    </MainLayout>
  );
}

export default ProjectsPage;