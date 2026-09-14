import { Button, Container } from "@mui/material";
import Image from "next/image";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CornerFrame from "@/components/CornerFrame";

const heroContent = {
    eyebrow: "Game Programming Student",
    name: "Sebastian Villarroel",
    role: "C++ · Unreal Engine 5 · OpenGL",
    blurb: "I build gameplay systems and rendering code for small teams, and I'm looking for a game programming internship.",
    availability: "Open to internships from January 2027 (Winter term)",
    location: "Based in Mississauga, Ontario · Willing to relocate",
    email: "sebastian.gvg94@gmail.com",
    resumeHref: "/2026_09_Game_Programming_Intern.pdf",
    headshot: { src: "/headshot.png", alt: "Portrait of Sebastian Villarroel" },
};

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-dot-grid-navy" />
            <Container maxWidth="xl" className="relative py-16 md:py-24">
                <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
                    <div className="flex flex-col gap-4 max-w-3xl md:flex-1">
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
                        <div className="flex items-start gap-3 text-sm text-brand-900/80 motion-safe:animate-fade-up motion-safe:animate-delay-320">
                            <span aria-hidden="true" className="relative mt-1.5 flex size-2 shrink-0">
                                <span className="absolute inline-flex size-full rounded-full bg-gold-600/60 motion-safe:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                                <span className="relative inline-flex size-2 rounded-full bg-gold-600" />
                            </span>
                            <p className="flex flex-col gap-0.5">
                                <span>{heroContent.availability}</span>
                                <span>{heroContent.location}</span>
                            </p>
                        </div>
                        <div className="motion-safe:animate-fade-up motion-safe:animate-delay-400 flex flex-wrap gap-3 pt-2">
                            <Button
                                href={heroContent.resumeHref}
                                target="_blank"
                                rel="noreferrer"
                                variant="contained"
                                startIcon={<DescriptionOutlinedIcon />}
                                className="min-h-11"
                            >
                                Resume
                            </Button>
                            <Button
                                href={`mailto:${heroContent.email}`}
                                variant="outlined"
                                startIcon={<MailOutlineIcon />}
                                className="min-h-11 text-brand-900! border-brand-500!"
                            >
                                Email me
                            </Button>
                        </div>
                    </div>
                    <div className="group relative order-first md:order-last shrink-0 w-40 md:w-56 lg:w-72 m-2.5 lg:mr-16 motion-safe:animate-fade-up motion-safe:animate-delay-160">
                        <CornerFrame tone="light">
                            <div className="relative aspect-[4/5] overflow-hidden rounded bg-brand-100 shadow-2xl">
                                <Image
                                    src={heroContent.headshot.src}
                                    alt={heroContent.headshot.alt}
                                    fill
                                    preload
                                    sizes="(min-width: 1024px) 288px, (min-width: 768px) 224px, 160px"
                                    className="object-cover"
                                />
                            </div>
                        </CornerFrame>
                    </div>
                </div>
            </Container>
        </section>
    );
}
