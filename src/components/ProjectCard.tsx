"use client";

import * as React from "react";
import Link from "next/link";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Stack,
    Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VideoFacade from "@/components/VideoFacade";

type ProjectCardProps = {
    title: string;
    description: string;
    githubLink: string;
    detailHref: string; // example: `/projects/midstone`
    videoSrc?: string;
    chips?: string[];
};

function HasChips(chips: string[] | undefined): chips is string[] {
    return Array.isArray(chips) && chips.length > 0;
}

export default function ProjectCard(props: ProjectCardProps) {
    const hasVideo = Boolean(props.videoSrc);

    return (
        <Card
            elevation={0}
            className="group w-full border border-brand-900/10 shadow-sm motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl has-focus-visible:-translate-y-1"
            sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
            }}
        >
            {hasVideo ? (
                <VideoFacade videoSrc={props.videoSrc!} title={props.title} />
            ) : (
                <Box
                    className="aspect-video"
                    sx={{
                        bgcolor: "primary.100",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 2,
                    }}
                >
                    <Typography variant="subtitle1" color="primary.dark" textAlign="center">
                        {props.title}
                    </Typography>
                </Box>
            )}

            <CardContent sx={{flexGrow: 1}}>
                <Typography variant="h5" color="primary.dark" gutterBottom>
                    {props.title}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        mb: 2,
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 5,
                    }}
                >
                    {props.description}
                </Typography>

                {HasChips(props.chips) ? (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {props.chips.map((chipLabel, chipIndex) => (
                            <Chip
                                key={`${chipLabel}-${chipIndex}`}
                                label={chipLabel}
                                size="small"
                                color={chipIndex === 0 ? "secondary" : "primary"}
                                variant={chipIndex === 0 ? "filled" : "outlined"}
                            />
                        ))}
                    </Stack>
                ) : null}
            </CardContent>

            <CardActions
                disableSpacing
                className="flex flex-wrap gap-3"
                sx={{
                    px: 2,
                    pb: 2,
                    pt: 0,
                }}
            >
                <Button
                    href={props.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    className="min-w-40"
                >
                    GitHub
                </Button>

                <Button
                    component={Link}
                    href={props.detailHref}
                    variant="outlined"
                    className="min-w-40 text-brand-900! border-brand-500!"
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}
