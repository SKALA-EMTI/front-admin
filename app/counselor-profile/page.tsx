"use client"
import { Sidebar } from "@/components/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BasicInfoForm } from "./components/basic-info-form"
import { ScheduleManagement } from "./components/schedule-management"
import { CounselingStyleForm } from "./components/counseling-style-form"
import { NotificationSettings } from "./components/notification-settings"
import { SecuritySettings } from "./components/security-settings"
import { User, Calendar, Settings, Bell, Shield } from "lucide-react"

export default function CounselorProfilePage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="border-b px-6 py-3">
          <h1 className="text-xl font-semibold">상담사 마이페이지</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Tabs defaultValue="basic-info" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="basic-info" className="flex gap-2 items-center">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">기본 정보</span>
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex gap-2 items-center">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">상담 일정</span>
              </TabsTrigger>
              <TabsTrigger value="style" className="flex gap-2 items-center">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">상담 스타일</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex gap-2 items-center">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">알림 설정</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex gap-2 items-center">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">보안 설정</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic-info">
              <BasicInfoForm />
            </TabsContent>

            <TabsContent value="schedule">
              <ScheduleManagement />
            </TabsContent>

            <TabsContent value="style">
              <CounselingStyleForm />
            </TabsContent>

            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>

            <TabsContent value="security">
              <SecuritySettings />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

