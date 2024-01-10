export interface EventResponse {
    currentPage: number;
    totalItems: number;
    totalPages: number;
    items: Event[];
}

export interface Image {
    imageFileName: string;
    imageId: string;
    imageUrl: string;
}

export interface Event {
    id: string;
    nameEs?: string;
    descriptionEs?: string;
    priceEs: string;
    startDate: string;
    openingHours: string;
    municipality: string;
    establishment: string;
    images: Image[];
}


