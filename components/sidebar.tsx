'use client'

import { Button } from '@/components/ui/button'
import { FileText, LayoutDashboard, MessageSquare, Settings, Users } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="flex w-[208px] flex-col border-r bg-white">
      {/* Logo */}
      <div className="flex h-[60px] items-center justify-center border-b">
        <div className="text-primary text-2xl font-bold">
          <span className="text-blue-600">LO</span>
          <span className="text-blue-500">GO</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-1 px-2 py-4">
        <Button
          variant={isActive('/') ? 'default' : 'ghost'}
          className="w-full justify-start gap-2 text-slate-600"
          onClick={() => {
            router.push('/')
          }}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>대시보드</span>
        </Button>

        <Button
          variant={isActive('/patient-management') ? 'default' : 'ghost'}
          className="w-full justify-start gap-2 text-slate-600"
          onClick={() => {
            router.push('/patient-management')
          }}
        >
          <Users className="h-5 w-5" />
          <span>내담자 관리</span>
        </Button>

        <Button
          variant={isActive('/diary-management') ? 'default' : 'ghost'}
          className="w-full justify-start gap-2 text-slate-600"
          onClick={() => {
            router.push('/diary-management')
          }}
        >
          <FileText className="h-5 w-5" />
          <span>일기 관리</span>
        </Button>

        <Button
          variant={isActive('/alarm-settings') ? 'default' : 'ghost'}
          className="w-full justify-start gap-2 text-slate-600"
          onClick={() => {
            router.push('/alarm-settings')
          }}
        >
          <MessageSquare className="h-5 w-5" />
          <span>내담자 알림 설정</span>
        </Button>

        <Button
          variant={isActive('/counselor-profile') ? 'default' : 'ghost'}
          className="w-full justify-start gap-2 text-slate-600"
          onClick={() => {
            router.push('/counselor-profile')
          }}
        >
          <Users className="h-5 w-5" />
          <span>마이페이지(설정)</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start gap-2 text-slate-600">
          <Settings className="h-5 w-5" />
          <span>설정</span>
        </Button>
      </div>
    </div>
  )
}
