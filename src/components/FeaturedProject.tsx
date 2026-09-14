'use client'
import * as React from "react";
import type { Project } from "@/data/projects";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import VideoFacade from "@/components/VideoFacade";
import Reveal from "@/components/Reveal";
import CornerFrame from "@/components/CornerFrame";

type FeaturedProjectProps = {
    project: Project;
};

export default function FeaturedProject(props: FeaturedProjectProps) {
    const {project} = props;
    const hasVideo = Boolean(project.videoSrc);

    return (
        <div id="featured" className={'relative overflow-hidden scroll-mt-20 [--diagonal:clamp(24px,4vw,64px)]'}>
            <div aria-hidden="true" className={'absolute inset-0 pointer-events-none clip-diagonal bg-linear-135 from-[#2b3063] to-[#161938]'}>
                <div className={'absolute inset-0 bg-dot-grid'}/>
            </div>
            <Container maxWidth="xl" component="section" className={'relative pt-[calc(3rem+var(--diagonal))] pb-12'}>
                <div className={'flex lg:flex-row flex-col gap-10'}>
                    <Reveal delay={0} className={'flex-5 text-white flex flex-col gap-5'}>
                        <span className={'uppercase text-xs opacity-80'}>Featured Project</span>
                        <h3 className={'text-[32px] sm:text-[40px] lg:text-5xl font-light leading-[1.2]'}>{project.title}</h3>
                        {project.highlight ? (
                            <p className="flex items-start gap-2.5 font-medium text-gold-300">
                                <EmojiEventsOutlinedIcon fontSize="small" aria-hidden="true" className="mt-0.5 shrink-0" />
                                {project.highlight}
                            </p>
                        ) : null}
                        <p className={'opacity-80 whitespace-pre-line'}>{project.cardBlurb}</p>
                        <div className={'flex flex-wrap gap-2'}>
                            {project.skills.map((chipLabel, chipIndex) => (
                                <Chip
                                    key={`${chipLabel}-${chipIndex}`}
                                    label={chipLabel}
                                    className={chipIndex === 0 ? 'text-white!' : 'text-[#c4c9e0]! border-[#c4c9e0]/70!'}
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
                                className={'min-h-11 lg:min-h-0 min-w-40 bg-page! text-navy-950! hover:bg-brand-100!'}
                            >
                                GitHub
                            </Button>
                            <Button
                                component={Link}
                                href={`/projects/${project.slug}`}
                                variant="outlined"
                                className={'min-h-11 lg:min-h-0 min-w-40 text-white! border-white/60! hover:bg-white/10! hover:border-white!'}
                            >
                                Details
                            </Button>
                        </div>
                        {project.externalLink ? (
                            <div className={'flex items-center gap-4 pt-4 border-t border-[#c4c9e0]/25'}>
                                <span className={'uppercase text-xs font-medium tracking-[0.08333em] text-[#c4c9e0]/80 whitespace-nowrap'}>
                                    Also Available
                                </span>
                                <a
                                    href={project.externalLink.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={'inline-flex items-center gap-1.5 min-h-11 lg:min-h-0 font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white'}
                                >
                                    {project.externalLink.label}
                                    <ArrowOutwardIcon fontSize="small"/>
                                </a>
                            </div>
                        ) : null}
                    </Reveal>
                    <Reveal delay={120} className={'group w-full lg:flex-6 lg:self-center'}>
                        <CornerFrame tone="dark">
                            <div className={'overflow-hidden rounded shadow-2xl'}>
                                {hasVideo ? (
                                    <VideoFacade
                                        videoSrc={project.videoSrc!}
                                        title={project.title}
                                    />
                                ) : (
                                    <Box
                                        className={'aspect-video'}
                                        sx={{
                                            bgcolor: "primary.100",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            px: 2,
                                        }}
                                    >
                                        <Typography variant="subtitle1" color="primary.dark" textAlign="center">
                                            {project.title}
                                        </Typography>
                                    </Box>
                                )}
                            </div>
                        </CornerFrame>
                    </Reveal>
                </div>
            </Container>
        </div>

    );
}
