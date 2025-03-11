"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, CalendarIcon } from "lucide-react"

// 샘플 상담 일정 데이터
const upcomingAppointments = [
  {
    id: 1,
    patientName: "이민지",
    date: "2025-03-05",
    time: "10:00 - 11:00",
    type: "정기 상담",
    status: "확정",
  },
  {
    id: 2,
    patientName: "김철수",
    date: "2025-03-05",
    time: "14:00 - 15:00",
    type: "초기 상담",
    status: "확정",
  },
  {
    id: 3,
    patientName: "박지영",
    date: "2025-03-06",
    time: "11:00 - 12:00",
    type: "정기 상담",
    status: "대기중",
  },
]

// 샘플 내담자 내역 데이터
const patientHistory = [
  {
    id: 1,
    name: "이민지",
    age: 28,
    gender: "여성",
    sessions: 8,
    lastSession: "2025-03-01",
    status: "진행중",
  },
  {
    id: 2,
    name: "김철수",
    age: 35,
    gender: "남성",
    sessions: 12,
    lastSession: "2025-03-02",
    status: "진행중",
  },
  {
    id: 3,
    name: "박지영",
    age: 42,
    gender: "여성",
    sessions: 5,
    lastSession: "2025-02-28",
    status: "진행중",
  },
  {
    id: 4,
    name: "정민호",
    age: 31,
    gender: "남성",
    sessions: 15,
    lastSession: "2025-02-15",
    status: "종료",
  },
]

export function ScheduleManagement() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">다가오는 상담</TabsTrigger>
          <TabsTrigger value="patients">내담자 내역</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>예정된 상담</CardTitle>
                <CardDescription>다가오는 상담 일정을 확인하세요.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{appointment.patientName.substring(0, 1)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{appointment.patientName}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <CalendarIcon className="h-3 w-3" /> {appointment.date}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={appointment.status === "확정" ? "default" : "outline"}>
                          {appointment.status}
                        </Badge>
                        <span className="text-sm">{appointment.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>상담 일정</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>내담자 내역</CardTitle>
              <CardDescription>상담 중인 내담자와 과거 내담자 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patientHistory.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{patient.name.substring(0, 1)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{patient.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {patient.age}세, {patient.gender}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant={patient.status === "진행중" ? "default" : "secondary"}>{patient.status}</Badge>
                      <div className="text-sm">총 {patient.sessions}회 상담</div>
                      <div className="text-xs text-muted-foreground">마지막 상담: {patient.lastSession}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

