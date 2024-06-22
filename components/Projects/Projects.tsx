import { useTranslation } from "react-i18next";
import Project from "../Project/Project";
import Heading from "../UI/Heading/Heading";

export const Projects = ({ projects }: { projects: any }) => {
  const { t } = useTranslation();
  const workProjects = projects
    .filter((project: any) => project.work)
    .sort((a: any, b: any) => a.position - b.position);
  const privateProjects = projects.filter((project: any) => !project.work);

  return (
    <div>
      <div className="prose max-w-full border-[8px] border-[#0c0c0c] p-4 text-center">
        <Heading variant="h2">{t("project.header.title")}</Heading>
      </div>

      {/* <Heading variant="h3" className="py-8 text-center text-2xl">
        Arbeit
      </Heading> */}

      <div className="grid bg-[#0c0c0c] gap-2 pb-2 px-2 lg:grid-cols-2">
        {workProjects.map((project: any, idx: number) => (
          <Project project={project} key={idx} />
        ))}
      </div>

      {/* <Heading variant="h3" className="py-8 text-center text-2xl">
        Privat
      </Heading>

      <div className="grid gap-4 lg:grid-cols-2">
        {privateProjects.map((project: any, idx: number) => (
          <Project project={project} key={idx} />
        ))}
      </div> */}
    </div>
  );
};

export default Projects;
