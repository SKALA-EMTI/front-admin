'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Sidebar } from '@/components/sidebar'
import { NewPatientDialog } from '@/components/new-patient-dialog'
import { Search } from 'lucide-react'
import { PatientList } from './components/patient-list'
import { PatientDetail } from './components/patient-detail'

export default function DiaryManagementPage() {
  const [selectedPatientId, setSelectedPatientId] = useState<number>(1)

  return (
    <div className="bg-background flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b px-6 py-3">
          <h1 className="text-xl font-semibold">일지 관리</h1>
          <NewPatientDialog />
        </header>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Left Side - Patient List */}
          <div className="flex w-1/2 flex-col border-r">
            <div className="border-b p-4">
              <div className="relative">
                <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                <Input placeholder="내담자 검색..." className="pl-9" />
              </div>
            </div>
            <PatientList
              selectedPatientId={selectedPatientId}
              onPatientSelect={setSelectedPatientId}
            />
          </div>

          {/* Right Side - Patient Detail */}
          <div className="w-1/2 overflow-auto">
            <PatientDetail patientId={selectedPatientId} />
          </div>
        </div>
      </div>
    </div>
  )
}
