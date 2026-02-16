import { Product, ProductDatabase } from '@/types/product';
import productsData from '@/data/products.json';

const productDatabase = productsData as unknown as ProductDatabase;


/**
 * Get all products from the database
 */
export function getAllProducts(): Product[] {
    return productDatabase.products;
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
    return productDatabase.products.filter(product => product.featured);
}

/**
 * Get a single product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
    return productDatabase.products.find(product => product.slug === slug);
}

/**
 * Get a single product by ID
 */
export function getProductById(id: string): Product | undefined {
    return productDatabase.products.find(product => product.id === id);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
    return productDatabase.products.filter(product => product.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
    const categories = productDatabase.products.map(product => product.category);
    return Array.from(new Set(categories));
}

/**
 * Get all product slugs (useful for static generation)
 */
export function getAllProductSlugs(): string[] {
    return productDatabase.products.map(product => product.slug);
}
