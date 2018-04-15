export interface Order {
    id: string;
    title: string;
    description?: string;
    creator: string;
    createdAt: number;
}