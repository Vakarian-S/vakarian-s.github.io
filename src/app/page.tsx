import { Projects } from "@/data/projects";
import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import FeaturedProject from "@/components/FeaturedProject";


export default function HomePage() {
    const featuredProject = Projects[0];
    const otherProjects = Projects.slice(1, 4);

    return (
        <Box bgcolor="primary.50" minHeight="100vh">

            <Box padding={2} component="section" display="flex" justifyContent="center">
                <Typography variant="h2" color="primary.dark">
                    My Projects
                </Typography>
            </Box>

            <Container maxWidth="xl" component="section" className={'pb-12'}>
                <Typography color="primary.dark">
                    This portfolio highlights the projects I have made as a result of my academic work at Humber
                    Polytechnic. The work displayed covers areas such as building your own engine in C++, focusing on
                    rendering and physics using development APIs, as well as working with game engines such as Unreal
                    Engine.
                </Typography>
            </Container>
            <FeaturedProject project={featuredProject}/>
            <Container maxWidth="xl" sx={{pt: 5, px: {xs: 2, md: 4}}}>
                <div className={'flex items-center gap-4'}>
                    <span className={'uppercase text-xs font-medium tracking-[0.08333em] text-[#5f69a6] whitespace-nowrap'}>
                        Other Projects
                    </span>
                    <div className={'h-px grow bg-[#212463]/15'}/>
                </div>
            </Container>
            <Container
                maxWidth="xl"
                sx={{
                    pt: {xs: 4, md: 4},
                    px: {xs: 0, md: 4},
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    gap: 5,
                    alignItems: "stretch",
                }}
            >
                {otherProjects.map((project, index) => (
                    <ProjectCard
                        key={`${project?.title}-${index}`}
                        title={project?.title}
                        description={project?.cardBlurb}
                        githubLink={project?.githubUrl}
                        videoSrc={project?.videoSrc}
                        chips={project?.skills}
                        detailHref={`/projects/${project.slug}`}
                    />
                ))}
            </Container>
            <div className={'flex justify-center py-10'}>
                <Link
                    href="/projects"
                    className={'inline-flex items-center justify-center min-h-11 min-w-40 px-4 rounded border border-[#5f69a6]/50 text-[#5f69a6] text-sm font-medium uppercase tracking-[0.02857em] hover:border-[#5f69a6] hover:bg-[#5f69a6]/5'}
                >
                    See all
                </Link>
            </div>
        </Box>
    );
}
