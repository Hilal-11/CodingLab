interface SiteConfig {
    id: string | number,
    name: string,
    path: string
}
export const siteConfig : SiteConfig[] = [
  { "id": 1, "name": "Explore", "path": "/explore" },
  { "id": 2, "name": "Problems", "path": "/problems" },
  { "id": 3, "name": "Contest", "path": "/contest" },
  { "id": 4, "name": "Discuss", "path": "/discuss" },
  { "id": 5, "name": "Interview", "path": "/interview" },
  { "id": 6, "name": "Store", "path": "/store" }
]
