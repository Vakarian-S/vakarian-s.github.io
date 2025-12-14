import { Projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({params}: PageProps) {
    const paramsResponse = await params;
    const project = Projects.find((item) => item.slug === paramsResponse.slug);
    if (!project) notFound();

    return (
        <main style={{padding: 24, maxWidth: 960, margin: "0 auto"}}>
            <Link href="/projects">Back to Projects</Link>

            <h1 style={{fontSize: 28, marginTop: 16}}>{project?.title}</h1>
            <p style={{marginTop: 12}}>{project?.description}</p>

            <h2 style={{fontSize: 18, marginTop: 20}}>Skills Highlighted</h2>
            <ul>
                {project?.skills?.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>

            <p style={{marginTop: 20}}>
                <a href={project?.githubUrl} target="_blank" rel="noreferrer">
                    View on GitHub
                </a>
            </p>
        </main>
    );
}

export function generateStaticParams() {
    return Projects.map((project) => ({slug: project.slug}));
}
