export const DOMAIN_CONFIG = {
  production: {
    domain: "groupbasebytecn.com.br",
    url: "https://groupbasebytecn.com.br",
    name: "GroupBase ByteCN",
  },
  development: {
    domain: "localhost:3000",
    url: "http://localhost:3000",
    name: "GroupBase ByteCN (Dev)",
  },
} as const

export const getCurrentDomain = () => {
  if (typeof window !== "undefined") {
    return window.location.origin
  }

  return process.env.NODE_ENV === "production" ? DOMAIN_CONFIG.production.url : DOMAIN_CONFIG.development.url
}

export const getRedirectUrl = (path = "") => {
  const baseUrl = getCurrentDomain()
  return `${baseUrl}${path}`
}
