'use client'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PatientEmotionChart } from './patient-emotion-chart'
import { ArrowDown, ArrowUp, Droplets, Sun, Users } from 'lucide-react'

interface PatientDetailProps {
  patientId: number
}

export function PatientDetail({ patientId }: PatientDetailProps) {
  return (
    <div className="space-y-6 p-6">
      {/* 환자 기본 정보 */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24 rounded-lg border">
            <img src="https://thispersondoesnotexist.com" alt="이민지" className="object-cover" />
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">이민지</h2>
            <p className="text-muted-foreground">최근 상담: 2024.02.10</p>
          </div>
        </div>
        <Button variant="outline">상담 노트</Button>
      </div>

      {/* 감정 변화 그래프 */}
      <Card>
        <CardContent className="pt-6">
          <PatientEmotionChart />
        </CardContent>
      </Card>

      {/* 주요 감정 및 변화 */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">주요 감정</h3>
            <div className="text-4xl font-bold">불안 40%</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">감정 변화</h3>
            <div className="flex items-center text-4xl font-bold text-red-500">
              <ArrowDown className="mr-1 h-8 w-8" />
              -12%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI 분석 추천 */}
      <Card className="border-yellow-100 bg-yellow-50">
        <CardContent className="p-6">
          <h3 className="mb-2 text-lg font-medium">AI 분석 추천</h3>
          <p>환자는 최근 우울감이 증가하고 있습니다. 긍정적인 경험 상담을 추천합니다.</p>
        </CardContent>
      </Card>

      {/* 메타 정보 */}
      <h3 className="text-lg font-medium">생활 패턴</h3>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Droplets className="mb-2 h-8 w-8 text-blue-500" />
            <h4 className="text-sm font-medium">물 섭취량</h4>
            <div className="mt-1 text-2xl font-bold">650ml</div>
            <div className="mt-1 flex items-center text-xs text-red-500">
              <ArrowDown className="mr-1 h-3 w-3" />
              15%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Sun className="mb-2 h-8 w-8 text-yellow-500" />
            <h4 className="text-sm font-medium">햇빛 노출</h4>
            <div className="mt-1 text-2xl font-bold">25분</div>
            <div className="mt-1 flex items-center text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              10%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Users className="mb-2 h-8 w-8 text-purple-500" />
            <h4 className="text-sm font-medium">소셜 활동</h4>
            <div className="mt-1 text-2xl font-bold">2회</div>
            <div className="mt-1 flex items-center text-xs text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              5%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
