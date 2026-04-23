import { AppSidebar } from "@/modules/core/components/layout/app-sidebar"
import { ChartAreaInteractive } from "@/modules/core/components/layout/chart-area-interactive"
import { DataTable } from "@/modules/core/components/layout/data-table"
import { SectionCards } from "@/modules/core/components/layout/section-cards"
import { SiteHeader } from "@/modules/core/components/layout/site-header"
import { SidebarInset, SidebarProvider } from "@/modules/core/components/ui/sidebar"

import data from "./data.json"
import { auth } from "@/modules/core/auth"
import { redirect } from "next/navigation"
import { headers } from "next/headers";

export default async function Page() {
  // Check if user is authenticated
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session) {
    return redirect("/sign-in")
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
