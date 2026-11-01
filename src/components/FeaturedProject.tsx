'use client'
import * as React from "react";
import type { Project } from "@/data/projects";
import { Button, Chip, Container } from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VideoFacade from "@/components/VideoFacade";
import Reveal from "@/components/Reveal";
import CornerFrame from "@/components/CornerFrame";

type FeaturedProjectProps = {
    project: Project;
    tone?: "dark" | "light";
    tag?: string;
};

type CalloutProps = {
    icon: React.ReactNode;
    text: string;
    dark: boolean;
};

function Callout(props: CalloutProps) {
    const {icon, text, dark} = props;

    return (
        <p className={`flex items-center gap-3.5 rounded-xl border p-3 ${dark ? 'border-gold-300/30 bg-gold-300/10' : 'border-gold-600/30 bg-gold-600/10'}`}>
            <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${dark ? 'bg-gold-300 text-navy-950' : 'bg-gold-600 text-white'}`}>
                {icon}
            </span>
            <span className={`font-medium ${dark ? 'text-gold-300' : 'text-brand-900'}`}>{text}</span>
        </p>
    );
}

export default function FeaturedProject(props: FeaturedProjectProps) {
    const {project, tone = "dark", tag} = props;
    const dark = tone === "dark";

    return (
        <div
            id={dark ? "featured" : undefined}
            className={`relative overflow-hidden scroll-mt-20 ${dark ? '[--diagonal:clamp(24px,4vw,64px)]' : ''}`}
        >
            {dark ? (
                <div aria-hidden="true" className={'absolute inset-0 pointer-events-none clip-diagonal-both bg-linear-135 from-[#2b3063] to-[#161938]'}>
                    <div className={'absolute inset-0 bg-dot-grid'}/>
                </div>
            ) : null}
            <Container
                maxWidth="xl"
                component="section"
                className={dark
                    ? 'relative pt-[calc(3rem+var(--diagonal))] pb-[calc(3rem+var(--diagonal))]'
                    : 'relative py-12'}
            >
                <div className={`flex flex-col gap-10 ${dark ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <Reveal delay={0} className={`flex-5 flex flex-col gap-5 ${dark ? 'text-white' : 'text-brand-900'}`}>
                        <div className={'flex items-center gap-2.5 uppercase text-xs font-medium tracking-[0.08333em]'}>
                            <span className={dark ? 'opacity-80' : 'text-brand-500'}>Featured Project</span>
                            {tag ? (
                                <>
                                    <span aria-hidden="true" className={`size-1 rounded-full ${dark ? 'bg-gold-300' : 'bg-gold-600'}`}/>
                                    <span className={dark ? 'text-gold-300' : 'text-gold-600'}>{tag}</span>
                                </>
                            ) : null}
                        </div>
                        <h3 className={'text-[32px] sm:text-[40px] lg:text-5xl font-light leading-[1.2]'}>{project.title}</h3>
                        {project.highlight ? (
                            <Callout
                                dark={dark}
                                text={project.highlight}
                                icon={<EmojiEventsOutlinedIcon fontSize="small" aria-hidden="true" />}
                            />
                        ) : null}
                        {project.status ? (
                            <Callout
                                dark={dark}
                                text={project.status}
                                icon={<SettingsOutlinedIcon fontSize="small" aria-hidden="true" />}
                            />
                        ) : null}
                        <p className={`whitespace-pre-line ${dark ? 'opacity-80' : 'text-brand-900/80'}`}>{project.cardBlurb}</p>
                        <div className={'flex flex-wrap gap-2'}>
                            {project.skills.map((chipLabel, chipIndex) => (
                                <Chip
                                    key={`${chipLabel}-${chipIndex}`}
                                    label={chipLabel}
                                    className={dark && chipIndex !== 0 ? 'text-[#c4c9e0]! border-[#c4c9e0]/70!' : chipIndex === 0 ? 'text-white!' : undefined}
                                    size="small"
                                    color={chipIndex === 0 ? "secondary" : "primary"}
                                    variant={chipIndex === 0 ? "filled" : "outlined"}
                                />
                            ))}
                        </div>
                        <div className={'flex flex-wrap gap-3'}>
                            <Button
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                variant="contained"
                                startIcon={<GitHubIcon />}
                                className={dark
                                    ? 'min-h-11 lg:min-h-0 min-w-40 bg-page! text-navy-950! hover:bg-brand-100!'
                                    : 'min-h-11 lg:min-h-0 min-w-40'}
                            >
                                GitHub
                            </Button>
                            <Button
                                component={Link}
                                href={`/projects/${project.slug}`}
                                variant="outlined"
                                className={dark
                                    ? 'min-h-11 lg:min-h-0 min-w-40 text-white! border-white/60! hover:bg-white/10! hover:border-white!'
                                    : 'min-h-11 lg:min-h-0 min-w-40 text-brand-900! border-brand-500!'}
                            >
                                Details
                            </Button>
                        </div>
                        {project.externalLink ? (
                            <div className={`flex items-center gap-4 pt-4 border-t ${dark ? 'border-[#c4c9e0]/25' : 'border-brand-900/15'}`}>
                                <span className={`uppercase text-xs font-medium tracking-[0.08333em] whitespace-nowrap ${dark ? 'text-[#c4c9e0]/80' : 'text-brand-500'}`}>
                                    Also Available
                                </span>
                                <a
                                    href={project.externalLink.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-1.5 min-h-11 lg:min-h-0 font-medium underline underline-offset-4 ${dark ? 'decoration-white/40 hover:decoration-white' : 'decoration-brand-500/50 hover:decoration-brand-900'}`}
                                >
                                    {project.externalLink.label}
                                    <ArrowOutwardIcon fontSize="small"/>
                                </a>
                            </div>
                        ) : null}
                    </Reveal>
                    <Reveal delay={120} className={'group w-full lg:flex-6 lg:self-center'}>
                        <CornerFrame tone={dark ? "dark" : "light"}>
                            <div className={'overflow-hidden rounded shadow-2xl'}>
                                <VideoFacade
                                    videoSrc={project.videoSrc}
                                    title={project.title}
                                    tone={tone}
                                />
                            </div>
                        </CornerFrame>
                    </Reveal>
                </div>
            </Container>
        </div>

    );
}
