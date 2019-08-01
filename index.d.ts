// Type definitions for video-mime-types 1.0

export function lookup(filenameOrExt: string): string | false;
export const extensions: {[key: string]: string[]};