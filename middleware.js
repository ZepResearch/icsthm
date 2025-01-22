// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
 const response = NextResponse.next()

 response.headers.set('X-Content-Type-Options', 'nosniff')
 response.headers.set('X-Frame-Options', 'DENY') 
 response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';")
 response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

 return response
}