export interface UnsplashImage {
    id: string;
    alt_description: string | undefined;
    urls: {
        small: string;
        regular: string;
    };
}

export interface UnsplashResponse {
    results: UnsplashImage[];
    total: number;
    total_pages: number;
}
