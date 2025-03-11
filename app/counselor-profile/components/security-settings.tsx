"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, EyeOff, RefreshCw, Shield, LogOut } from "lucide-react"

export function SecuritySettings() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginHistory] = useState([
    { id: 1, date: "2025-03-04 14:30", device: "Chrome / Windows", location: "서울, 대한민국", status: "성공" },
    { id: 2, date: "2025-03-03 09:15", device: "Safari / macOS", location: "서울, 대한민국", status: "성공" },
    { id: 3, date: "2025-03-01 18:45", device: "Chrome / Android", location: "부산, 대한민국", status: "성공" },
    { id: 4, date: "2025-02-28 11:20", device: "Chrome / Windows", location: "대전, 대한민국", status: "실패" },
  ])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>비밀번호 변경</CardTitle>
          <CardDescription>계정 보안을 위해 정기적으로 비밀번호를 변경하세요.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">현재 비밀번호</Label>
            <div className="relative">
              <Input id="current-password" type={showPassword ? "text" : "password"} placeholder="현재 비밀번호 입력" />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">새 비밀번호</Label>
            <Input id="new-password" type="password" placeholder="새 비밀번호 입력" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">새 비밀번호 확인</Label>
            <Input id="confirm-password" type="password" placeholder="새 비밀번호 재입력" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>비밀번호 변경</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>보안 설정</CardTitle>
          <CardDescription>계정 보안을 강화하기 위한 추가 설정을 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">2단계 인증</Label>
              <p className="text-sm text-muted-foreground">로그인 시 추가 인증 코드를 요구합니다.</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">로그인 알림</Label>
              <p className="text-sm text-muted-foreground">새로운 기기에서 로그인할 때 알림을 받습니다.</p>
            </div>
            <Switch checked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">자동 로그아웃</Label>
              <p className="text-sm text-muted-foreground">일정 시간 활동이 없으면 자동으로 로그아웃됩니다.</p>
            </div>
            <Switch checked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>로그인 기록</CardTitle>
          <CardDescription>최근 계정 로그인 활동을 확인합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>날짜 및 시간</TableHead>
                <TableHead>기기 / 브라우저</TableHead>
                <TableHead>위치</TableHead>
                <TableHead>상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loginHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.device}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    <span className={item.status === "성공" ? "text-green-600" : "text-red-600"}>{item.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            새로고침
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            모든 기록 보기
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>계정 관리</CardTitle>
          <CardDescription>계정 관련 추가 설정을 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            개인정보 설정 관리
          </Button>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <LogOut className="h-4 w-4" />
            모든 기기에서 로그아웃
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

