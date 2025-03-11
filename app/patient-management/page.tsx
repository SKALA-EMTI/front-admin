"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import { PatientList } from "@/components/patient-list"
import { PatientDetail } from "@/components/patient-detail"
import { NewPatientDialog } from "@/components/new-patient-dialog"
import { Search } from "lucide-react"

export default function PatientManagementPage() {
  const [selectedPatientId, setSelectedPatientId] = useState<number>(1)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b px-6 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">내담자 관리</h1>
          <div className="flex items-center gap-2">
            <NewPatientDialog />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left Side - Patient List */}
          <div className="w-full md:w-1/2 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="내담자 검색..." className="pl-9" />
              </div>
            </div>
            <PatientList selectedPatientId={selectedPatientId} onSelectPatient={setSelectedPatientId} />
          </div>

          {/* Right Side - Patient Detail */}
          <div className="w-full md:w-1/2 overflow-auto">
            <PatientDetail patientId={selectedPatientId} />
          </div>
        </div>
      </div>
    </div>
  )
}

