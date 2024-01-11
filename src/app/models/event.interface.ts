export interface EventsResponse {
    currentPage: number;
    totalItems: number;
    totalPages: number;
    items: Event[];
}

export interface Attachment {
    attachedId: number;
    attachedLanguage: string;
    attachedName: string;
    sourceAttachedEs: string;
    sourceAttachedEu: string;
}

export interface Image {
    imageFileName: string;
    imageId: number;
    imageUrl: string;
    sourceImageEs: string;
    sourceImageEu: string;
}

export interface Event {
    attachment?: Attachment[];
    companyEs?: string;
    companyEu?: string;
    descriptionEs?: string;
    descriptionEu?: string;
    endDate?: Date;
    establishmentEs?: string;
    establishmentEu?: string;
    id?: number;
    images?: Image[];
    language?: string;
    municipalityEs?: string;
    municipalityEu?: string;
    minucipalityLatitude?: number;
    municipalityLongitude?: number;
    municipalityNoraCode?: number;
    nameEs?: string;
    nameEu?: string;
    online?: boolean;
    openingHoursEs?: string;
    openingHoursEu?: string;
    placeEs?: string;
    placeEu?: string;
    priceEs?: string;
    priceEu?: string;
    provinceNoraCode?: number;
    publicationDate?: Date;
    purchaseUrlEs?: string;
    purchaseUrlEu?: string;
    sourceNameEs?: string;
    sourceNameEu?: string;
    sourceUrlEs?: string;
    sourceUrlEu?: string;
    startDate?: Date;
    type?: number;
    typeEs?: string;
    typeEu?: string;
    urlEventEs?: string;
    urlEventEu?: string;
    urlNameEs?: string;
    urlNameEu?: string;
    urlOnlineEs?: string;
    urlOnlineEu?: string;
}


