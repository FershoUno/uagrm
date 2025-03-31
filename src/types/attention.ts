// src/types/data.ts

export interface OfficeHour {
  day: string;
  time: string;
  inCharge: string;
}

export interface Location {
  title: string;
  description: string;
  image: string;
  mapUrl: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface AttentionData {
  contactInfo: ContactInfo;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  officeHours: OfficeHour[];
  location: Location;
}
