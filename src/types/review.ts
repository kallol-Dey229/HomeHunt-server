import { ObjectId } from "mongodb";

export interface Review {
  _id?: ObjectId;
  listingId: string;
  tenantId: string;
  tenantName: string;
  rating: number; 
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateReviewInput {
  listingId: string;
  tenantId: string;
  tenantName: string;
  rating: number;
  comment?: string;
}