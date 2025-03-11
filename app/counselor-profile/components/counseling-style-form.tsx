"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"

export function CounselingStyleForm() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>상담 스타일</CardTitle>
          <CardDescription>선호하는 상담 방식과 스타일을 설정하세요.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>선호하는 상담 방식</Label>
            <RadioGroup defaultValue="both" className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="face-to-face" id="face-to-face" />
                <Label htmlFor="face-to-face">대면 상담</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">온라인 상담</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both">둘 다 가능</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>주요 상담 접근법</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="cbt" checked />
                <Label htmlFor="cbt">인지행동치료 (CBT)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="psychodynamic" checked />
                <Label htmlFor="psychodynamic">정신역동적 접근</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="humanistic" />
                <Label htmlFor="humanistic">인간중심치료</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="solution-focused" checked />
                <Label htmlFor="solution-focused">해결중심치료</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mindfulness" />
                <Label htmlFor="mindfulness">마음챙김 기반 접근</Label>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="session-length">선호하는 세션 길이</Label>
            <Select defaultValue="60">
              <SelectTrigger>
                <SelectValue placeholder="세션 길이 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30분</SelectItem>
                <SelectItem value="45">45분</SelectItem>
                <SelectItem value="60">60분</SelectItem>
                <SelectItem value="90">90분</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>근무 가능 시간</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weekday-start">평일</Label>
                <div className="flex items-center gap-2">
                  <Select defaultValue="09:00">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>~</span>
                  <Select defaultValue="18:00">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="17:00">17:00</SelectItem>
                      <SelectItem value="18:00">18:00</SelectItem>
                      <SelectItem value="19:00">19:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weekend-start">주말</Label>
                <div className="flex items-center gap-2">
                  <Select defaultValue="10:00">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="12:00">12:00</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>~</span>
                  <Select defaultValue="16:00">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="weekend-availability">주말 상담 가능 여부</Label>
              <Switch id="weekend-availability" checked />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="notes">추가 참고사항</Label>
            <Textarea
              id="notes"
              placeholder="상담 스타일이나 선호사항에 대한 추가 정보를 입력하세요."
              defaultValue="초기 상담 시 내담자의 이전 상담 경험과 기대사항을 중점적으로 파악합니다. 필요에 따라 과제를 제공하는 방식을 선호합니다."
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>저장하기</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

