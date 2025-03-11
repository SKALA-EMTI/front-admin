'use client'

import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PatientEmotionChart } from '@/components/patient-emotion-chart'
import { ArrowDown, ArrowUp, Droplets, Sun, Users } from 'lucide-react'
import { patientData } from './patient-list'

interface PatientDetailProps {
  patientId: number
}

export function PatientDetail({ patientId }: PatientDetailProps) {
  // 선택된 환자 ID에 해당하는 환자 데이터 찾기
  const patient = patientData.find((p) => p.id === patientId) || patientData[0]

  // 환자별 감정 데이터 (실제로는 API에서 가져올 수 있음)
  const emotionData: Record<
    number,
    { mainEmotion: string; emotionPercentage: number; emotionChange: number }
  > = {
    1: { mainEmotion: '불안', emotionPercentage: 40, emotionChange: -12 },
    2: { mainEmotion: '우울', emotionPercentage: 65, emotionChange: 8 },
    3: { mainEmotion: '스트레스', emotionPercentage: 55, emotionChange: -5 },
    4: { mainEmotion: '분노', emotionPercentage: 70, emotionChange: 15 },
    5: { mainEmotion: '불안', emotionPercentage: 35, emotionChange: -7 },
  }

  const patientEmotion = emotionData[patientId] || emotionData[1]

  return (
    <div className="space-y-6 p-6">
      {/* 환자 기본 정보 */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <img
              src={`/placeholder.svg?height=64&width=64&text=${patient.name.substring(0, 1)}`}
              alt={patient.name}
            />
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{patient.name}</h2>
            <p className="text-muted-foreground">최근 상담: {patient.lastConsultation}</p>
          </div>
        </div>
        <Button variant="outline">상담 노트</Button>
      </div>

      {/* 환자 상세 정보 */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex">
                <span className="text-muted-foreground w-16 text-sm">나이:</span>
                <span className="font-medium">{patient.age}세</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-16 text-sm">성별:</span>
                <span className="font-medium">{patient.gender}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-16 text-sm">상태:</span>
                <Badge
                  variant="outline"
                  className={`bg-${patient.status === '불안' ? 'red' : patient.status === '우울' ? 'blue' : patient.status === '스트레스' ? 'yellow' : 'orange'}-100 text-${patient.status === '불안' ? 'red' : patient.status === '우울' ? 'blue' : patient.status === '스트레스' ? 'yellow' : 'orange'}-800`}
                >
                  {patient.status}
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex">
                <span className="text-muted-foreground w-16 text-sm">상담 횟수:</span>
                <span className="font-medium">{patient.consultationCount}회</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-16 text-sm">메모:</span>
                <span className="font-medium">{patient.notes}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
            <div className="text-4xl font-bold">
              {patientEmotion.mainEmotion} {patientEmotion.emotionPercentage}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">감정 변화</h3>
            <div
              className={`text-4xl font-bold ${patientEmotion.emotionChange < 0 ? 'text-red-500' : 'text-green-500'} flex items-center`}
            >
              {patientEmotion.emotionChange < 0 ? (
                <ArrowDown className="mr-1 h-8 w-8" />
              ) : (
                <ArrowUp className="mr-1 h-8 w-8" />
              )}
              {patientEmotion.emotionChange < 0
                ? patientEmotion.emotionChange
                : `+${patientEmotion.emotionChange}`}
              %
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI 분석 추천 */}
      <Card className="border-yellow-100 bg-yellow-50">
        <CardContent className="p-6">
          <h3 className="mb-2 text-lg font-medium">AI 분석 추천</h3>
          <p>
            {patient.status === '불안' &&
              '환자는 불안 증상이 지속되고 있습니다. 인지행동치료와 호흡 기법을 활용한 상담을 추천합니다.'}
            {patient.status === '우울' &&
              '환자는 우울감이 증가하고 있습니다. 긍정적인 경험 상담과 활동 계획을 추천합니다.'}
            {patient.status === '스트레스' &&
              '환자는 스트레스 수준이 높습니다. 스트레스 관리 기법과 마음챙김 명상을 추천합니다.'}
            {patient.status === '분노' &&
              '환자는 분노 조절에 어려움을 겪고 있습니다. 분노 관리 기법과 감정 인식 훈련을 추천합니다.'}
          </p>
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

      {/* 상담 기록 */}
      <h3 className="text-lg font-medium">최근 상담 기록</h3>
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="border-b pb-3">
              <div className="flex justify-between">
                <div className="font-medium">{patient.lastConsultation}</div>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  {patient.consultationCount}회차
                </Badge>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                {patient.status === '불안' &&
                  '불안감이 지속되고 있으며, 수면 패턴이 불규칙합니다. 인지행동치료를 통해 불안 요소를 식별하고 대처 방법을 논의했습니다.'}
                {patient.status === '우울' &&
                  '우울감이 증가하고 있으며, 일상 활동에 대한 흥미가 감소했습니다. 활동 계획과 인지 재구성 기법을 논의했습니다.'}
                {patient.status === '스트레스' &&
                  '직장에서의 스트레스가 증가했습니다. 명상과 호흡 기법을 연습하고 스트레스 관리 방법에 대해 논의했습니다.'}
                {patient.status === '분노' &&
                  '분노 조절에 어려움을 겪고 있으며, 대인관계에서 갈등이 발생하고 있습니다. 분노 관리 기법과 의사소통 방법을 논의했습니다.'}
              </p>
            </div>

            <div className="border-b pb-3">
              <div className="flex justify-between">
                <div className="font-medium">
                  {
                    new Date(new Date(patient.lastConsultation).getTime() - 7 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split('T')[0]
                  }
                </div>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  {patient.consultationCount - 1}회차
                </Badge>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                이전 세션에서 논의한 대처 전략의 효과를 검토했습니다. 일부 개선이 있었으나 지속적인
                관리가 필요합니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
