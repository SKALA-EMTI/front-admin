"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Bell, Brain, Activity, Droplets, Smartphone, Calendar, MessageSquare } from "lucide-react"

interface AlarmSetting {
  id: string
  title: string
  description: string
  enabled: boolean
  type: "percentage" | "days" | "hours" | "time" | "switch"
  value: number | string
  icon: React.ReactNode
  options?: { value: string; label: string }[]
}

const alarmSettings: Record<string, AlarmSetting[]> = {
  emotion: [
    {
      id: "emotion-change",
      title: "감정 변화 알람",
      description: "급격한 감정 변화 감지 시 알림",
      enabled: true,
      type: "percentage",
      value: 20,
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: "emotion-record",
      title: "감정 기록 없음",
      description: "일정 기간 감정 입력이 없을 때 알림",
      enabled: true,
      type: "days",
      value: "3",
      icon: <Activity className="h-5 w-5" />,
      options: [
        { value: "3", label: "3일" },
        { value: "5", label: "5일" },
        { value: "7", label: "7일" },
      ],
    },
    {
      id: "specific-emotion",
      title: "특정 감정 & 강도",
      description: "특정 감정이 강하게 나타날 때 알림",
      enabled: true,
      type: "switch",
      value: 8,
      icon: <Bell className="h-5 w-5" />,
    },
  ],
  lifestyle: [
    {
      id: "sleep",
      title: "수면 부족 알람",
      description: "지속적인 수면 부족 감지",
      enabled: true,
      type: "hours",
      value: 4,
      icon: <Activity className="h-5 w-5" />,
    },
    {
      id: "exercise",
      title: "운동 부족 알람",
      description: "운동량 급감 감지",
      enabled: true,
      type: "percentage",
      value: 50,
      icon: <Activity className="h-5 w-5" />,
    },
    {
      id: "water",
      title: "물 섭취량 알람",
      description: "물 섭취 부족 시 알림",
      enabled: true,
      type: "switch",
      value: 1,
      icon: <Droplets className="h-5 w-5" />,
    },
    {
      id: "smartphone",
      title: "스마트폰 사용 알람",
      description: "스마트폰 사용 과다 감지",
      enabled: true,
      type: "hours",
      value: 5,
      icon: <Smartphone className="h-5 w-5" />,
    },
  ],
  communication: [
    {
      id: "consultation",
      title: "상담 일정 알람",
      description: "예약된 상담 일정 알림",
      enabled: true,
      type: "time",
      value: "both",
      icon: <Calendar className="h-5 w-5" />,
      options: [
        { value: "day", label: "하루 전" },
        { value: "hour", label: "1시간 전" },
        { value: "both", label: "둘 다" },
      ],
    },
    {
      id: "emergency",
      title: "긴급 상담 요청",
      description: "내담자의 긴급 상담 요청 시 즉시 알림",
      enabled: true,
      type: "switch",
      value: true,
      icon: <Bell className="h-5 w-5" />,
    },
    {
      id: "message",
      title: "메시지 알람",
      description: "내담자가 메시지를 남겼을 때 알림",
      enabled: true,
      type: "switch",
      value: true,
      icon: <MessageSquare className="h-5 w-5" />,
    },
  ],
}

interface AlarmSettingsFormProps {
  category: "emotion" | "lifestyle" | "communication"
}

export function AlarmSettingsForm({ category }: AlarmSettingsFormProps) {
  const [settings, setSettings] = useState(alarmSettings[category])

  const handleSwitchChange = (id: string, checked: boolean) => {
    setSettings((prev) => prev.map((setting) => (setting.id === id ? { ...setting, enabled: checked } : setting)))
  }

  const handleValueChange = (id: string, value: number | string) => {
    setSettings((prev) => prev.map((setting) => (setting.id === id ? { ...setting, value } : setting)))
  }

  return (
    <div className="space-y-6">
      {settings.map((setting) => (
        <Card key={setting.id}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {setting.icon}
                <CardTitle>{setting.title}</CardTitle>
              </div>
              <Switch
                checked={setting.enabled}
                onCheckedChange={(checked) => handleSwitchChange(setting.id, checked)}
              />
            </div>
            <CardDescription>{setting.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {setting.enabled && (
              <div className="flex items-center gap-4">
                <Label className="w-24">기준값:</Label>
                {setting.type === "percentage" && (
                  <div className="flex-1">
                    <Slider
                      value={[setting.value as number]}
                      onValueChange={([value]) => handleValueChange(setting.id, value)}
                      max={100}
                      step={1}
                    />
                    <div className="mt-2 text-right text-sm text-muted-foreground">{setting.value}%</div>
                  </div>
                )}
                {setting.type === "hours" && (
                  <div className="flex-1">
                    <Slider
                      value={[setting.value as number]}
                      onValueChange={([value]) => handleValueChange(setting.id, value)}
                      max={12}
                      step={0.5}
                    />
                    <div className="mt-2 text-right text-sm text-muted-foreground">{setting.value}시간</div>
                  </div>
                )}
                {(setting.type === "days" || setting.type === "time") && setting.options && (
                  <Select
                    value={setting.value as string}
                    onValueChange={(value) => handleValueChange(setting.id, value)}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {setting.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end">
        <Button>설정 저장</Button>
      </div>
    </div>
  )
}

