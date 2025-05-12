"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  Briefcase,
  ChevronDown,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { usuario, logout } = useAuth()

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Mi Perfil", href: "/dashboard/perfil", icon: User },
    { name: "Mis Postulaciones", href: "/dashboard/postulaciones", icon: Briefcase },
    { name: "Pruebas Técnicas", href: "/dashboard/pruebas", icon: ClipboardList },
    { name: "Notificaciones", href: "/dashboard/notificaciones", icon: Bell },
    { name: "Mensajes", href: "/dashboard/mensajes", icon: MessageSquare },
    { name: "Documentos", href: "/dashboard/documentos", icon: FileText },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile menu button */}
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex h-full flex-col">
                  <div className="px-2 py-4">
                    <Link href="/" className="flex items-center gap-2">
                      <span className="font-bold text-xl text-[#0a192f]">
                        Talent<span className="text-[#38bdf8]">Match</span>
                      </span>
                    </Link>
                  </div>
                  <nav className="flex-1 space-y-1 px-2 py-4">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsSidebarOpen(false)}
                          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
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
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-[#0a192f] hidden md:inline-block">
                Talent<span className="text-[#38bdf8]">Match</span>
              </span>
              <span className="font-bold text-xl text-[#0a192f] md:hidden">
                T<span className="text-[#38bdf8]">M</span>
              </span>
            </Link>
          </div>

          {/* Right side of navbar */}
          <div className="ml-auto flex items-center gap-2">
            <Link href="/vacantes">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Explorar vacantes
              </Button>
            </Link>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
              <span className="sr-only">Notificaciones</span>
            </Button>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@usuario" />
                    <AvatarFallback>{`${usuario?.nombre.charAt(0)}${usuario?.apellido.charAt(0)}`}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block">{`${usuario?.nombre} ${usuario?.apellido}`}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard/perfil">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/postulaciones">
                  <DropdownMenuItem>
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>Postulaciones</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/notificaciones">
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notificaciones</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/configuracion">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <div className="hidden border-r bg-background md:block md:w-64 lg:w-72">
          <div className="flex h-full flex-col">
            <nav className="flex-1 space-y-1 px-4 py-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
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

        {/* Main content area */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto py-6 px-4 md:px-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
