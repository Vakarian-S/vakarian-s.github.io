"use client";

import { FC } from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Tooltip, useScrollTrigger } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';

const RESUME_HREF = '/2026_09_Game_Programming_Intern.pdf';

const TopAppBar: FC = () => {
    const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

    return (
        <AppBar
            position="sticky"
            elevation={0}
            className={`transition-[background-color,box-shadow] duration-300 ${
                scrolled ? 'bg-navy-950/85 backdrop-blur-md shadow-lg' : 'bg-navy-950 shadow-none'
            }`}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters className="justify-between">
                    <Link
                        href="/"
                        aria-label="Sebastian Villarroel, home"
                        className="text-base md:text-lg font-semibold text-white no-underline"
                    >
                        <span className="md:hidden">Sebastian V.</span>
                        <span className="hidden md:inline">Sebastian Villarroel</span>
                    </Link>

                    <Box className="flex items-center">
                        <Link
                            href="/projects"
                            className="hidden md:inline-flex items-center min-h-11 px-3 text-[15px] font-medium text-white/85 hover:text-white"
                        >
                            Projects
                        </Link>
                        <span aria-hidden="true" className="hidden md:block h-6 w-px bg-white/20 mx-2" />

                        <Tooltip title="GitHub">
                            <IconButton
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/Vakarian-S"
                                aria-label="GitHub"
                                className="size-11"
                                style={{ color: 'white' }}
                            >
                                <GitHubIcon fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn">
                            <IconButton
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/sebastian-villarroel-2243aa177/"
                                aria-label="LinkedIn"
                                className="size-11"
                                style={{ color: 'white' }}
                            >
                                <LinkedInIcon fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Resume">
                            <IconButton
                                target="_blank"
                                rel="noreferrer"
                                href={RESUME_HREF}
                                aria-label="Resume"
                                className="size-11 md:hidden"
                                style={{ color: 'white' }}
                            >
                                <DescriptionIcon fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                        <Button
                            href={RESUME_HREF}
                            target="_blank"
                            rel="noreferrer"
                            variant="outlined"
                            className="hidden md:inline-flex ml-2 text-white! border-white/60!"
                        >
                            Resume
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopAppBar;
