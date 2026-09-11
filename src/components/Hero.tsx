import { Button, Container } from "@mui/material";

const heroContent = {
    eyebrow: "Game Programming Student",
    name: "Sebastian Villarroel",
    role: "C++ · Unreal Engine 5 · OpenGL",
    blurb: "I build gameplay systems and rendering code for small teams, and I'm looking for a game programming internship.",
};

export default function Hero() {
    return (
        <Container maxWidth="xl" component="section" className="py-16 md:py-24">
            <div className="max-w-3xl flex flex-col gap-4">
                <span className="motion-safe:animate-fade-up motion-safe:animate-delay-0 uppercase text-xs font-medium tracking-[0.08333em] text-brand-500">
                    {heroContent.eyebrow}
                </span>
                <h1 className="motion-safe:animate-fade-up motion-safe:animate-delay-80 text-4xl sm:text-5xl lg:text-6xl font-light text-brand-900 leading-[1.1]">
                    {heroContent.name}
                </h1>
                <p className="motion-safe:animate-fade-up motion-safe:animate-delay-160 text-lg text-brand-500">
                    {heroContent.role}
                </p>
                <p className="motion-safe:animate-fade-up motion-safe:animate-delay-240 max-w-[65ch] text-brand-900/80">
                    {heroContent.blurb}
                </p>
                <div className="motion-safe:animate-fade-up motion-safe:animate-delay-320 flex flex-wrap gap-3 pt-2">
                    <Button
                        href="#featured"
                        variant="contained"
                        className="min-h-11"
                    >
                        View projects
                    </Button>
                    <Button
                        href="/2026_09_Game_Programming_Intern.pdf"
                        target="_blank"
                        variant="outlined"
                        className="min-h-11"
                    >
                        Resume
                    </Button>
                </div>
            </div>
        </Container>
    );
}
