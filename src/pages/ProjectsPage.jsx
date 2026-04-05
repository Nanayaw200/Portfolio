import MainLayout from "../layouts/MainLayout";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectGrid from "../components/projects/ProjectGrid";
import TechStackBar from "../components/projects/TechStackBar";

function ProjectsPage() {
  return (
    <MainLayout>
      <ProjectsHero />
      <ProjectGrid />
      <TechStackBar />
    </MainLayout>
  );
}

export default ProjectsPage;