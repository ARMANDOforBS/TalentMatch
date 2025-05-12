import type React from "react"
import { MainNav } from "@/components/main-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>

      <div className="flex flex-1 p-6 pt-2">
        <DashboardSidebar />

        <main className="flex-1 md:ml-64"> {/* Añadido margen izquierdo para compensar el sidebar fijo */}
          <div className="container p-8 md:p-10">{children}</div>
        </main>
      </div>
    </div>
  )
}
