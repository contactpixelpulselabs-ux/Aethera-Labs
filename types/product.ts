export interface ProductFeature {
    title: string;
    description: string;
    icon: string;
}

export interface ProductImages {
    hero: string;
    detail?: string;
    circuit?: string;
    lifestyle?: string;
}

export interface ProductSpecifications {
    [key: string]: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    shortName?: string;
    category: string;
    description: string;
    longDescription: string;
    price: number;
    sku?: string;
    featured: boolean;
    images: ProductImages;
    specifications: ProductSpecifications;
    features: ProductFeature[];
    highlights: string[];
    tagline?: string;
    quote?: string;
    quoteDescription?: string;
}

export interface ProductDatabase {
    products: Product[];
}
