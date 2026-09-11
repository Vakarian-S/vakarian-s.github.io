"use client";

import * as React from "react";
import Image from "next/image";
import { getYouTubeId } from "@/lib/youtube";

type VideoFacadeProps = {
    videoSrc: string;
    title: string;
    className?: string;
};

export default function VideoFacade(props: VideoFacadeProps) {
    const { videoSrc, title, className = "" } = props;
    const [playing, setPlaying] = React.useState(false);
    const id = getYouTubeId(videoSrc);

    if (!id) {
        return (
            <iframe
                className={`w-full aspect-video border-0 ${className}`}
                src={videoSrc}
                title={title}
                allowFullScreen
            />
        );
    }

    if (playing) {
        return (
            <iframe
                className={`w-full aspect-video border-0 ${className}`}
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                title={title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
            />
        );
    }

    return (
        <button
            type="button"
            aria-label={`Play video: ${title}`}
            onClick={() => setPlaying(true)}
            className={`relative block w-full aspect-video overflow-hidden ${className}`}
        >
            <Image
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt=""
                fill
                unoptimized
                loading="lazy"
                className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-103"
            />
            <span className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-950/80 transition-colors group-hover:bg-brand-500">
                    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </span>
        </button>
    );
}
