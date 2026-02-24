/**
 * Get the base path for the application
 * This is used for GitHub Pages deployment
 */
export const BASE_PATH = '/v0-refrigerated-gel-landing-page'

/**
 * Helper function to get the correct asset path
 * @param path - The path to the asset (e.g., '/images/logo.png')
 * @returns The full path with base path if needed
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // In development, don't add base path
  if (process.env.NODE_ENV === 'development') {
    return cleanPath
  }
  
  // In production, add base path
  return `${BASE_PATH}${cleanPath}`
}
