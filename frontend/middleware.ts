import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Verificar si el modo demo está activado
    const demoMode = request.cookies.get('demoMode')?.value === 'true';
    
    // Si el modo demo está activado, permitir el acceso a todas las rutas
    if (demoMode) {
        return NextResponse.next();
    }
    
    const token = request.cookies.get('token')?.value;
    const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                      request.nextUrl.pathname.startsWith('/registro');
    const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');
    const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
    const isReclutadorPage = request.nextUrl.pathname.startsWith('/reclutador');

    // Si el usuario no está autenticado y trata de acceder a páginas protegidas
    if (!token && (isDashboardPage || isAdminPage)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Si el usuario está autenticado y trata de acceder a páginas de auth
    if (token && isAuthPage) {
        // Intentamos obtener el rol del usuario
        try {
            const usuarioStr = request.cookies.get('usuario')?.value;
            if (usuarioStr) {
                const usuario = JSON.parse(decodeURIComponent(usuarioStr));
                const rol = usuario.rol;
                
                console.log("Middleware - Usuario:", usuario);
                console.log("Middleware - Rol:", rol);
                
                // Redirigir según el rol
                if (rol === 'ADMINISTRADOR') {
                    // Los administradores van a la sección de administración
                    return NextResponse.redirect(new URL('/admin', request.url));
                } else if (rol === 'RECLUTADOR') {
                    return NextResponse.redirect(new URL('/reclutador', request.url));
                } else {
                    // Los candidatos van al dashboard
                    return NextResponse.redirect(new URL('/dashboard', request.url));
                }
            }
        } catch (e) {
            console.error("Error en middleware:", e);
            // Si hay algún error, redirigimos al dashboard por defecto
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    // Verificar acceso a rutas específicas por rol
    if (token && (isDashboardPage || isAdminPage)) {
        try {
            const usuarioStr = request.cookies.get('usuario')?.value;
            if (usuarioStr) {
                const usuario = JSON.parse(decodeURIComponent(usuarioStr));
                const rol = usuario.rol;
                
                console.log("Middleware - Verificando acceso - Usuario:", usuario);
                console.log("Middleware - Verificando acceso - Rol:", rol);
                
                // Reglas de redirección basadas en roles
                
                // Si un administrador intenta acceder a /dashboard, redirigir a /admin
                if (rol === 'ADMINISTRADOR' && isDashboardPage) {
                    return NextResponse.redirect(new URL('/admin', request.url));
                }
                
                // Si un reclutador intenta acceder a /dashboard, redirigir a /reclutador
                if (rol === 'RECLUTADOR' && isDashboardPage) {
                    return NextResponse.redirect(new URL('/reclutador', request.url));
                }
                
                // Si un reclutador intenta acceder a /admin, redirigir a /reclutador
                if (rol === 'RECLUTADOR' && isAdminPage) {
                    return NextResponse.redirect(new URL('/reclutador', request.url));
                }
                
                // Si un candidato intenta acceder a /admin o /reclutador, redirigir a /dashboard
                if (rol === 'CANDIDATO' && (isAdminPage || request.nextUrl.pathname.startsWith('/reclutador'))) {
                    return NextResponse.redirect(new URL('/dashboard', request.url));
                }
            }
        } catch (e) {
            console.error("Error en middleware (verificación de acceso):", e);
            // En caso de error, dejamos continuar
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/admin/:path*',
        '/login',
        '/registro',
    ],
};