import { Base } from "./base";

export type Inquiry = Base & {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    preferredContact: string;
    organization?: string | null;
    duration: string;
    startDate: Date | null;
    endDate?: Date | null;
    location: string;
    expectations?: string | null;
    details?: string | null;
    questions?: string | null;
  }