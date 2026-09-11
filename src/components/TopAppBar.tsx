"use client";

import { FC } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Tooltip, Typography, useScrollTrigger } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';

interface TopBarProps {
    title?: string;
}

const TopAppBar: FC<TopBarProps> = () => {
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
                <Toolbar disableGutters>

                    <Box sx={{flexGrow: 1}}>
                        <Typography
                            variant="h2"
                            fontWeight={"bold"}
                            noWrap
                            sx={{fontSize: {xs: '18px', md: '32px'}}}
                        >
                            <Link href="/" style={{textDecoration: "none", color: "inherit"}}>
                                Sebastian Villarroel
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="My LinkedIn">
                            <IconButton target={'_blank'}
                                        href={'https://www.linkedin.com/in/sebastian-villarroel-2243aa177/'}
                                        aria-label="linkedin" size={"medium"} style={{color: 'white'}}>
                                <LinkedInIcon fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="My Github">
                            <IconButton target={'_blank'} href={'https://github.com/Vakarian-S'} aria-label="github"
                                        size={"medium"}
                                        style={{color: 'white'}}>
                                <GitHubIcon fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="My Resume">
                            <IconButton target={'_blank'}
                                        href={'/2026_09_Game_Programming_Intern.pdf'}
                                        aria-label="resume" size={"medium"} style={{color: 'white'}}>
                                <DescriptionIcon fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
        ;
};

export default TopAppBar;
