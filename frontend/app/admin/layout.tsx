import type React from "react"
import type { Metadata } from "next"
import { AdminSidebar } from "@/components/admin-sidebar"

export const metadata: Metadata = {
  title: "Panel de Administración - TalentMatch",
  description: "Administra la plataforma TalentMatch",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminSidebar />
      <main className="ml-64 flex-1 overflow-auto p-6 md:p-8">{children}</main>
    </div>
  )
}
