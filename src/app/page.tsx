import Link from "next/link";
import { Projects } from "@/data/projects";

export default function HomePage() {
    return (
        <main style={{padding: 24, maxWidth: 960, margin: "0 auto"}}>
            <h1 style={{fontSize: 32, marginBottom: 12}}>My Portfolio</h1>
            <p style={{marginBottom: 24}}>
                Selected work from school projects and research prototypes.
            </p>

            <div style={{display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"}}>
                {Projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: 12,
                            padding: 16,
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <h2 style={{fontSize: 18, marginBottom: 8}}>{project.title}</h2>
                        <p style={{margin: 0}}>{project.cardBlurb}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
