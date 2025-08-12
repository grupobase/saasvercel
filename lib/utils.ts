import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAbsoluteUrl(path = "") {
  if (typeof window !== "undefined") {
    return `${window.location.origin}${path}`
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return `${baseUrl}${path}`
}

export function isDevelopment() {
  return process.env.NODE_ENV === "development"
}

export function isProduction() {
  return process.env.NODE_ENV === "production"
}
