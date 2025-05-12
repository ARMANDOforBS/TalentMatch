"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Briefcase, Home, LogOut, Settings, User, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/contexts/AuthContext"

interface AdminNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function AdminSidebar({ className, items, ...props }: AdminNavProps) {
  const pathname = usePathname()
  const { logout, usuario } = useAuth()

  const defaultItems = [
    {
      href: "/admin",
      title: "Dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/usuarios",
      title: "Usuarios",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/vacantes",
      title: "Vacantes",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/reclutadores",
      title: "Reclutadores",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/reportes",
      title: "Reportes",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      href: "/admin/configuracion",
      title: "Configuración",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  const navItems = items || defaultItems

  return (
    <nav 
      className={cn(
        "fixed left-0 top-0 z-30 flex h-screen w-64 flex-col border-r bg-background", 
        className
      )} 
      {...props}
    >
      <div className="flex flex-col h-full">
        <div className="py-4 px-6 border-b">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            <div className="font-bold text-2xl text-[#0a192f] mb-1">
              Talent<span className="text-[#38bdf8]">Match</span>
            </div>
          </Link>
          <div className="text-sm text-muted-foreground">Panel de Administración</div>
        </div>
        
        <div className="px-4 py-4 flex-1 overflow-y-auto">
          <h2 className="mb-3 px-2 text-xs font-semibold tracking-tight text-muted-foreground">ADMINISTRACIÓN</h2>
          <div className="space-y-1.5">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "w-full justify-start",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
                asChild
              >
                <Link href={item.href}>
                  {item.icon}
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="px-4 py-4 mt-auto border-t">
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/admin/perfil">
                <User className="mr-2 h-4 w-4" />
                Mi Perfil
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-red-600 hover:bg-red-100 hover:text-red-700"
              onClick={() => logout()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
