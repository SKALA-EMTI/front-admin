'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// 샘플 데이터
const patients = [
  {
    id: 1,
    name: '이민지',
    age: 28,
    gender: '여성',
    lastConsultation: '2024.02.10',
    consultationCount: 8,
    status: '불안',
    notes: '수면 장애 호소, 불안감 증가',
    isActive: true,
  },
  {
    id: 2,
    name: '김철수',
    age: 35,
    gender: '남성',
    lastConsultation: '2024.02.15',
    consultationCount: 12,
    status: '우울',
    notes: '가족 관계 문제, 업무 스트레스',
  },
  {
    id: 3,
    name: '박지영',
    age: 42,
    gender: '여성',
    lastConsultation: '2024.02.08',
    consultationCount: 5,
    status: '스트레스',
    notes: '직장 내 갈등, 불면증',
  },
  {
    id: 4,
    name: '정민호',
    age: 31,
    gender: '남성',
    lastConsultation: '2024.02.12',
    consultationCount: 3,
    status: '분노',
    notes: '분노 조절 어려움, 대인관계 문제',
  },
  {
    id: 5,
    name: '최수진',
    age: 25,
    gender: '여성',
    lastConsultation: '2024.02.14',
    consultationCount: 6,
    status: '불안',
    notes: '시험 스트레스, 사회 불안',
  },
]

// 상태에 따른 배지 색상
const statusColors: Record<string, string> = {
  불안: 'bg-red-100 text-red-800 hover:bg-red-100',
  우울: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  스트레스: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
  분노: 'bg-orange-100 text-orange-800 hover:bg-orange-100',
}

// 환자 데이터를 외부에서 접근할 수 있도록 export
export const patientData = patients

interface PatientListProps {
  selectedPatientId: number
  onSelectPatient: (id: number) => void
}

export function PatientList({ selectedPatientId, onSelectPatient }: PatientListProps) {
  return (
    <div className="h-[calc(100vh-8.5rem)] overflow-auto">
      {patients.map((patient) => (
        <Button
          key={patient.id}
          variant="ghost"
          className={cn(
            'h-auto w-full justify-start rounded-none border-b p-4',
            selectedPatientId === patient.id ? 'bg-slate-50' : ''
          )}
          onClick={() => onSelectPatient(patient.id)}
        >
          <div className="flex w-full flex-col text-left">
            <div className="mb-2 flex items-center justify-between">
              <div className="font-medium">
                {patient.name} ({patient.age}, {patient.gender})
              </div>
              <Badge variant="outline" className={cn(statusColors[patient.status] || '')}>
                {patient.status}
              </Badge>
            </div>
            <div className="text-muted-foreground grid grid-cols-2 gap-2 text-sm">
              <div>마지막 상담: {patient.lastConsultation}</div>
              <div>상담 횟수: {patient.consultationCount}회</div>
            </div>
            <div className="text-muted-foreground mt-1 text-sm">{patient.notes}</div>
          </div>
        </Button>
      ))}
    </div>
  )
}
