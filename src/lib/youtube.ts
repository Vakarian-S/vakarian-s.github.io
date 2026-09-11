export function getYouTubeId(src: string): string | null {
    const match = src.match(/\/embed\/([^/?]+)/);
    return match ? match[1] : null;
}
