import Link from "next/link";
import { Projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main style={{padding: 24, maxWidth: 960, margin: "0 auto"}}>
            <h1 style={{fontSize: 28, marginBottom: 16}}>Projects</h1>
            <ul>
                {Projects.map((project) => (
                    <li key={project.slug} style={{marginBottom: 10}}>
                        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
