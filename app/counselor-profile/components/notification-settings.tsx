"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>상담 및 내담자 관련 알림 설정을 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">내담자 관련 알림</h3>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">감정 변화 알림</Label>
                <p className="text-sm text-muted-foreground">내담자의 감정 상태가 크게 변할 때 알림을 받습니다.</p>
              </div>
              <Switch checked />
            </div>

            <div className="space-y-2">
              <Label>감정 변화 기준값</Label>
              <div className="flex items-center gap-4">
                <Slider defaultValue={[20]} max={50} step={5} className="flex-1" />
                <span className="w-12 text-right">20%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">감정 기록 없음 알림</Label>
                <p className="text-sm text-muted-foreground">
                  내담자가 일정 기간 감정 기록을 하지 않을 때 알림을 받습니다.
                </p>
              </div>
              <Switch checked />
            </div>

            <div className="space-y-2">
              <Label>미입력 기간</Label>
              <Select defaultValue="3">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3일</SelectItem>
                  <SelectItem value="5">5일</SelectItem>
                  <SelectItem value="7">7일</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">긴급 상담 요청 알림</Label>
                <p className="text-sm text-muted-foreground">내담자가 긴급 상담을 요청할 때 알림을 받습니다.</p>
              </div>
              <Switch checked />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">상담 일정 알림</h3>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">상담 일정 알림</Label>
                <p className="text-sm text-muted-foreground">예정된 상담 일정에 대한 알림을 받습니다.</p>
              </div>
              <Switch checked />
            </div>

            <div className="space-y-2">
              <Label>알림 시간</Label>
              <Select defaultValue="both">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">하루 전</SelectItem>
                  <SelectItem value="hour">1시간 전</SelectItem>
                  <SelectItem value="both">둘 다</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">일정 변경 알림</Label>
                <p className="text-sm text-muted-foreground">상담 일정이 변경될 때 알림을 받습니다.</p>
              </div>
              <Switch checked />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">알림 수신 방법</h3>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">앱 내 알림</Label>
                <p className="text-sm text-muted-foreground">앱 내에서 알림을 받습니다.</p>
              </div>
              <Switch checked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">이메일 알림</Label>
                <p className="text-sm text-muted-foreground">이메일로 알림을 받습니다.</p>
              </div>
              <Switch checked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">SMS 알림</Label>
                <p className="text-sm text-muted-foreground">SMS로 알림을 받습니다.</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>저장하기</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

