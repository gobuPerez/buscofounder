export interface Response {
    status: "error" | "success" | "empty";
    message: string;
}