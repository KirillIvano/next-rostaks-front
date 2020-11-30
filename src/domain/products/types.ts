export type ProductType = {
    id: number;
    name: string;
    price: number;
    shortDescription: string;
    description: string;
    imageUrl: string;
    certificateUrl: string;
    categoryId: number;
}

export type ProductPreviewType = {
    id: number;
    name: string;
    price: number;
    image: string;
    shortDescription: string;
    categoryId: number;
}
