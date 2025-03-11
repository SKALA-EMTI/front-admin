'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, X, Upload } from 'lucide-react'

export function BasicInfoForm() {
  const [specialties, setSpecialties] = useState<string[]>([
    '불안장애',
    '우울증',
    '스트레스 관리',
    '가족 상담',
  ])
  const [newSpecialty, setNewSpecialty] = useState('')

  const addSpecialty = () => {
    if (newSpecialty && !specialties.includes(newSpecialty)) {
      setSpecialties([...specialties, newSpecialty])
      setNewSpecialty('')
    }
  }

  const removeSpecialty = (specialty: string) => {
    setSpecialties(specialties.filter((s) => s !== specialty))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>기본 정보</CardTitle>
          <CardDescription>상담사 프로필에 표시될 기본 정보를 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="https://thispersondoesnotexist.com" alt="프로필 사진" />
                <AvatarFallback>김상담</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="flex gap-2">
                <Upload className="h-4 w-4" />
                사진 변경
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" defaultValue="김상담" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" defaultValue="counselor@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">연락처</Label>
                  <Input id="phone" defaultValue="010-1234-5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">자격증 번호</Label>
                  <Input id="license" defaultValue="심리상담사 2023-12345" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">소속 기관</Label>
            <Input id="organization" defaultValue="마음 심리 상담센터" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">소개</Label>
            <Textarea
              id="bio"
              rows={4}
              defaultValue="10년 경력의 심리 상담사입니다. 불안장애, 우울증, 스트레스 관리에 전문성을 가지고 있으며, 내담자 중심의 상담을 지향합니다."
            />
          </div>

          <div className="space-y-2">
            <Label>전문 분야</Label>
            <div className="mb-2 flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <Badge key={specialty} variant="secondary" className="flex items-center gap-1">
                  {specialty}
                  <button onClick={() => removeSpecialty(specialty)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="새 전문 분야 추가"
                value={newSpecialty}
                onChange={(e) => setNewSpecialty(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addSpecialty()}
              />
              <Button type="button" onClick={addSpecialty} size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                추가
              </Button>
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
