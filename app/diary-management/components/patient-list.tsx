"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PatientListProps {
  selectedPatientId: number
  onPatientSelect: (id: number) => void
}

// 샘플 데이터
const patients = [
  {
    id: 1,
    name: "이민지",
    age: 28,
    gender: "여성",
    lastConsultation: "2024.02.10",
    consultationCount: 8,
    status: "불안",
    notes: "수면 장애 호소, 불안감 증가",
  },
  {
    id: 2,
    name: "김철수",
    age: 35,
    gender: "남성",
    lastConsultation: "2024.02.15",
    consultationCount: 12,
    status: "우울",
    notes: "가족 관계 문제, 업무 스트레스",
  },
  {
    id: 3,
    name: "박지영",
    age: 42,
    gender: "여성",
    lastConsultation: "2024.02.08",
    consultationCount: 5,
    status: "스트레스",
    notes: "직장 내 갈등, 불면증",
  },
]

// 상태에 따른 배지 색상
const statusColors: Record<string, string> = {
  불안: "bg-red-100 text-red-800 hover:bg-red-100",
  우울: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  스트레스: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
}

export function PatientList({ selectedPatientId, onPatientSelect }: PatientListProps) {
  return (
    <div className="flex-1 overflow-auto">
      {patients.map((patient) => (
        <Button
          key={patient.id}
          variant="ghost"
          className={cn(
            "w-full justify-start p-4 h-auto border-b rounded-none",
            selectedPatientId === patient.id ? "bg-slate-50" : "",
          )}
          onClick={() => onPatientSelect(patient.id)}
        >
          <div className="flex flex-col w-full text-left">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">
                {patient.name} ({patient.age}, {patient.gender})
              </div>
              <Badge variant="outline" className={cn(statusColors[patient.status] || "")}>
                {patient.status}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div>마지막 상담: {patient.lastConsultation}</div>
              <div>상담 횟수: {patient.consultationCount}회</div>
            </div>
            <div className="text-sm text-muted-foreground mt-1">{patient.notes}</div>
          </div>
        </Button>
      ))}
    </div>
  )
}

