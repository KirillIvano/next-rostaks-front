export type ProductType = {
    id: number;
    name: string;
    price: number;
    shortDescription: string;
    description: string;
    image?: string;
    certificate?: string;
    categoryId: number;
}

export type ProductPreviewType = {
    id: number;
    name: string;
    price: number;
    image?: string;
    shortDescription: string;
    categoryId: number;
}
