import type React from "react"
import type { Metadata } from "next"
import { RecruiterSidebar } from "@/components/recruiter-sidebar"

export const metadata: Metadata = {
  title: "Panel de Reclutador - TalentMatch",
  description: "Gestiona vacantes y candidatos en TalentMatch",
}

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <RecruiterSidebar />
      <main className="ml-64 flex-1 overflow-auto p-6 md:p-8">{children}</main>
    </div>
  )
}
