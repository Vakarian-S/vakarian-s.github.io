import { Projects } from "@/data/projects";
import { Container } from "@mui/material";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";


export default function HomePage() {
    const featuredProject = Projects[0];
    const otherProjects = Projects.slice(1, 4);

    return (
        <>
            <Hero/>
            <FeaturedProject project={featuredProject}/>
            <Container maxWidth="xl" sx={{pt: 5}}>
                <Reveal delay={0} className={'flex items-center gap-4'}>
                    <span className={'uppercase text-xs font-medium tracking-[0.08333em] text-[#5f69a6] whitespace-nowrap'}>
                        Other Projects
                    </span>
                    <div className={'h-px grow bg-[#212463]/15'}/>
                </Reveal>
            </Container>
            <Container
                maxWidth="xl"
                sx={{
                    pt: {xs: 4, md: 4},
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    gap: 5,
                    alignItems: "stretch",
                }}
            >
                {otherProjects.map((project, index) => (
                    <Reveal key={`${project?.title}-${index}`} delay={index * 90} className={'flex flex-1 min-w-[280px]'}>
                        <ProjectCard
                            title={project?.title}
                            description={project?.cardBlurb}
                            githubLink={project?.githubUrl}
                            videoSrc={project?.videoSrc}
                            chips={project?.skills}
                            detailHref={`/projects/${project.slug}`}
                        />
                    </Reveal>
                ))}
            </Container>
            <Reveal delay={0} className={'flex justify-center py-10'}>
                <Link
                    href="/projects"
                    className={'inline-flex items-center justify-center gap-2 min-h-11 min-w-40 px-4 rounded border border-brand-500 text-brand-900 text-sm font-medium uppercase tracking-[0.02857em] transition-colors duration-200 hover:bg-brand-500 hover:text-white'}
                >
                    See all projects
                    <span aria-hidden="true">→</span>
                </Link>
            </Reveal>
        </>
    );
}
