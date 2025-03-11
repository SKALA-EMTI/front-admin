"use client"
import { Sidebar } from "@/components/sidebar"
import { AlarmSettingsForm } from "./components/alarm-settings-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AlarmSettingsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="border-b px-6 py-3">
          <h1 className="text-xl font-semibold">알람 설정</h1>
        </header>
        <main className="flex-1 p-6">
          <Tabs defaultValue="emotion" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="emotion">감정 관련 알람</TabsTrigger>
              <TabsTrigger value="lifestyle">생활 패턴 알람</TabsTrigger>
              <TabsTrigger value="communication">소통 관련 알람</TabsTrigger>
            </TabsList>
            <TabsContent value="emotion">
              <AlarmSettingsForm category="emotion" />
            </TabsContent>
            <TabsContent value="lifestyle">
              <AlarmSettingsForm category="lifestyle" />
            </TabsContent>
            <TabsContent value="communication">
              <AlarmSettingsForm category="communication" />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

