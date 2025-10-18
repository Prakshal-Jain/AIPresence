/**
 * Get the base path for assets
 * This ensures images work on both GitHub Pages and custom domains
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Get base path from environment or default to empty
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Return the full path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}

