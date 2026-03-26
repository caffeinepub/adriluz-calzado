import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    title: string;
    content: string;
    date: Time;
    author: string;
}
export type ProductId = bigint;
export type Time = bigint;
export type BlogPostId = bigint;
export interface Product {
    imagePath: string;
    name: string;
    referenceCode: string;
    category: Category;
    price: string;
}
export enum Category {
    caballeros = "caballeros",
    ninos = "ninos",
    damas = "damas"
}
export interface backendInterface {
    addBlogPost(title: string, content: string, author: string): Promise<BlogPostId>;
    addProduct(product: Product): Promise<ProductId>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllProducts(): Promise<Array<Product>>;
    getBlogPost(id: BlogPostId): Promise<BlogPost>;
    getProduct(id: ProductId): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    updateBlogPost(id: BlogPostId, blogPost: BlogPost): Promise<void>;
    updateProduct(id: ProductId, product: Product): Promise<void>;
}
