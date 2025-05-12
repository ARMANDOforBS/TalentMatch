"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { 
  Menu, 
  Bell, 
  User, 
  Briefcase, 
  ChevronDown, 
  LogOut, 
  Settings,
  BarChart3,
  Users,
  FileText  
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/AuthContext"

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const { usuario, isAuthenticated, logout } = useAuth()

  // Debugging - mostrar la información del usuario en consola
  React.useEffect(() => {
    if (usuario) {
      console.log("Usuario en MainNav:", usuario);
      console.log("Rol del usuario:", usuario.rol);
    }
  }, [usuario]);

  // Verifica si el usuario es un reclutador o candidato
  const getRolDisplay = () => {
    if (!usuario || !usuario.rol) return "Usuario";
    
    // Imprimir el rol exacto para debugging
    console.log("Rol exacto:", usuario.rol);
    
    switch (usuario.rol) {
      case "RECLUTADOR":
        return "Reclutador";
      case "CANDIDATO":
        return "Candidato";
      case "ADMINISTRADOR":
        return "Administrador";
      default:
        return usuario.rol; // Muestra el rol tal como viene del backend
    }
  };

  // Variables más simples para verificar el rol
  const isReclutador = usuario?.rol === "RECLUTADOR";
  const isCandidato = usuario?.rol === "CANDIDATO";
  const isAdmin = usuario?.rol === "ADMINISTRADOR";

  // Rutas para candidatos
  const candidatoRoutes = [
    { name: "Dashboard", href: "/dashboard", icon: <User className="mr-2 h-4 w-4" /> },
    { name: "Mi Perfil", href: "/dashboard/perfil", icon: <User className="mr-2 h-4 w-4" /> },
    { name: "Mis Postulaciones", href: "/dashboard/postulaciones", icon: <Briefcase className="mr-2 h-4 w-4" /> },
    { name: "Pruebas Técnicas", href: "/dashboard/pruebas", icon: <FileText className="mr-2 h-4 w-4" /> },
    { name: "Notificaciones", href: "/dashboard/notificaciones", icon: <Bell className="mr-2 h-4 w-4" /> },
  ];

  // Rutas para reclutadores
  const reclutadorRoutes = [
    { name: "Panel de control", href: "/reclutador", icon: <BarChart3 className="mr-2 h-4 w-4" /> },
    { name: "Vacantes", href: "/reclutador/vacantes", icon: <Briefcase className="mr-2 h-4 w-4" /> },
    { name: "Candidatos", href: "/reclutador/candidatos", icon: <Users className="mr-2 h-4 w-4" /> },
    { name: "Mi Cuenta", href: "/reclutador/perfil", icon: <User className="mr-2 h-4 w-4" /> },
    { name: "Configuración", href: "/reclutador/configuracion-ia", icon: <Settings className="mr-2 h-4 w-4" /> },
  ];

  // Rutas para administradores
  const adminRoutes = [
    { name: "Panel de control", href: "/admin", icon: <BarChart3 className="mr-2 h-4 w-4" /> },
    { name: "Configuración", href: "/admin/configuracion-ia", icon: <Settings className="mr-2 h-4 w-4" /> },
    { name: "Usuarios", href: "/admin/usuarios", icon: <Users className="mr-2 h-4 w-4" /> },
  ];

  // Selecciona las rutas adecuadas según el rol
  let dashboardRoutes = candidatoRoutes;
  let dashboardRoute = "/dashboard";
  
  if (isReclutador) {
    dashboardRoutes = reclutadorRoutes;
    dashboardRoute = "/reclutador";
  } else if (isAdmin) {
    dashboardRoutes = adminRoutes;
    dashboardRoute = "/admin";
  }

  // Redirigir a la página adecuada al hacer clic en Dashboard
  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(dashboardRoute);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-[#0a192f]">
            Talent<span className="text-[#38bdf8]">Match</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/vacantes" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Vacantes</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#0a192f] to-[#112240] p-6 no-underline outline-none focus:shadow-md"
                          href="/sobre-nosotros"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">TalentMatch</div>
                          <p className="text-sm leading-tight text-white/90">
                            Plataforma líder en reclutamiento y selección de talento tecnológico.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/sobre-nosotros/nuestra-cultura"
                        >
                          <div className="text-sm font-medium leading-none">Nuestra Cultura</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Conoce los valores que nos definen como organización.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/sobre-nosotros/beneficios"
                        >
                          <div className="text-sm font-medium leading-none">Beneficios</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Descubre las ventajas de formar parte de nuestro equipo.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contacto" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contacto</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Dashboard Menu para usuarios autenticados */}
              {isAuthenticated && (
                <NavigationMenuItem>
                  {/* Usar diferentes etiquetas según el rol */}
                  <Link href={dashboardRoute} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {isReclutador ? "Panel de control" : "Dashboard"}
                    </NavigationMenuLink>
                              </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            {isAuthenticated && usuario ? (
              <>
                {/* Notificaciones */}
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
                        <AvatarFallback>{usuario.nombre && usuario.apellido ? `${usuario.nombre.charAt(0)}${usuario.apellido.charAt(0)}` : 'NA'}</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline-block">
                        {usuario.nombre && usuario.apellido ? `${usuario.nombre} ${usuario.apellido}` : 'Usuario'}
                      </span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="font-medium">Mi cuenta</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {isReclutador ? "Reclutador" : isCandidato ? "Candidato" : "Administrador"}
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    
                    {/* Mostrar enlaces relevantes según el rol, eliminando el redundante */}
                    {dashboardRoutes
                      .filter(route => route.href !== dashboardRoute) // Filtrar el dashboard principal para no duplicarlo
                      .slice(0, 3) // Mostrar solo los primeros 3 enlaces
                      .map(route => (
                        <Link key={route.href} href={route.href}>
                      <DropdownMenuItem>
                            {route.icon}
                            <span>{route.name}</span>
                      </DropdownMenuItem>
                    </Link>
                      ))
                    }
                    
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Iniciar sesión</Button>
                </Link>
                <Link href="/registro">
                  <Button>Registrarse</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="left">
            {/* Mobile menu content */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center py-2">
                <span className="font-bold text-xl text-[#0a192f]">
                  Talent<span className="text-[#38bdf8]">Match</span>
                </span>
              </div>
              
              {isAuthenticated && usuario && (
                <div className="flex items-center gap-3 py-3 border-b">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@usuario" />
                    <AvatarFallback>{usuario.nombre && usuario.apellido ? `${usuario.nombre.charAt(0)}${usuario.apellido.charAt(0)}` : 'NA'}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">
                      {usuario.nombre && usuario.apellido ? `${usuario.nombre} ${usuario.apellido}` : 'Usuario'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isReclutador ? "Reclutador" : isCandidato ? "Candidato" : "Administrador"}
                    </div>
                  </div>
                </div>
              )}
              
              <Link href="/vacantes" className="text-lg font-medium">
                  Vacantes
                </Link>
              <Link href="/sobre-nosotros" className="text-lg font-medium">
                  Sobre Nosotros
                </Link>
              <Link href="/contacto" className="text-lg font-medium">
                  Contacto
                </Link>

                {isAuthenticated ? (
                  <>
                    <div className="h-px bg-border my-2"></div>
                  
                  {/* Enlace principal según rol */}
                  <Link 
                    href={dashboardRoute}
                    className="text-lg font-medium text-[#38bdf8]"
                  >
                    {isReclutador ? "Panel de control" : "Dashboard"}
                  </Link>
                  
                  {/* Mostrar resto de enlaces según rol */}
                    {dashboardRoutes
                    .filter(route => route.name !== (isReclutador ? "Panel de control" : "Dashboard"))
                      .map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                        className={`flex items-center text-base font-medium ${
                          pathname === route.href ? "text-[#38bdf8]" : ""
                        }`}
                        >
                        <span className="mr-2">{route.icon}</span>
                          {route.name}
                        </Link>
                      ))}
                  
                    <div className="h-px bg-border my-2"></div>
                  <Button onClick={logout} variant="ghost" className="justify-start px-0">
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar sesión
                    </Button>
                  </>
                ) : (
                <>
                  <div className="h-px bg-border my-2"></div>
                  <Link href="/login">
                    <Button variant="ghost" className="w-full justify-start">
                        Iniciar sesión
                      </Button>
                    </Link>
                  <Link href="/registro">
                    <Button className="w-full">Registrarse</Button>
                    </Link>
                </>
              )}
                  </div>
            </SheetContent>
          </Sheet>
      </div>
    </>
  )
}
