import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Match the protected routes
const isProtectedRoute = createRouteMatcher(['/flats/:path*', '/about/:path*'])

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) {
        // Protect the route (auth.protect is synchronous)
        auth.protect()
    }
})

export const config = {
    matcher: [
        '/flats/:path*',
        '/about/:path*',
    ],
}
