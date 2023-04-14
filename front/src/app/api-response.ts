export interface ApiResponse {
    message: string | null;
    error: string | null;
    errors: {[key: string]: string} | null;
    data: any[] | null;
}
