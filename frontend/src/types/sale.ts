import { type } from "os"

export type SaleSum = {
    sum: number;
    sellerName: string;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}