"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, ClipboardList, Bell, MessageSquare, FileText, Settings } from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Mi Perfil", href: "/dashboard/perfil", icon: User },
    { name: "Mis Postulaciones", href: "/dashboard/postulaciones", icon: Briefcase },
    { name: "Pruebas Técnicas", href: "/dashboard/pruebas", icon: ClipboardList },
    { name: "Notificaciones", href: "/dashboard/notificaciones", icon: Bell },
    { name: "Mensajes", href: "/dashboard/mensajes", icon: MessageSquare },
    { name: "Documentos", href: "/dashboard/documentos", icon: FileText },
    { name: "Configuración", href: "/dashboard/configuracion", icon: Settings },
  ]

  return (
    <div className="fixed inset-y-0 left-0 z-20 w-64 border-r bg-background hidden md:block">
      <div className="flex h-full flex-col pt-16"> {/* pt-16 para dejar espacio para el navbar */}
        <div className="p-4 border-b text-center">
          <h2 className="text-lg font-semibold text-[#0a192f]">Mi Cuenta</h2>
        </div>
        <nav className="flex-1 space-y-2 px-4 py-6">
          {navigation.map((item) => {
            // Verificar si la ruta actual coincide con este elemento de navegación
            let isActive = false;
            
            // Para el Dashboard, solo debe estar activo si estamos exactamente en /dashboard
            if (item.href === "/dashboard") {
              isActive = pathname === "/dashboard" || pathname === "/dashboard/";
            } else {
              // Para otras rutas, verificar si la ruta actual comienza con la ruta del elemento
              // pero solo si no es la ruta base /dashboard
              isActive = pathname.startsWith(item.href) && item.href !== "/dashboard";
            }
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-[#38bdf8]/10 text-[#38bdf8]"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
