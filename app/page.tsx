import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, ArrowUpRight, Book, ChevronDown, ClipboardList, Users } from 'lucide-react'
import { DashboardChart } from '@/components/dashboard-chart'
import { Sidebar } from '@/components/sidebar'

export default function DashboardPage() {
  return (
    <div className="bg-background flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b px-6 py-3">
          <h1 className="text-xl font-semibold">대시보드</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <AlertTriangle className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <img src="https://thispersondoesnotexist.com" alt="김상담 상담사" />
            </Avatar>
            <span className="text-sm">김상담 상담사</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">새로운 회기</span>
                  <div className="rounded-full bg-slate-100 p-2">
                    <Book className="text-primary h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">15명</span>
                  <div className="mt-2 flex items-center">
                    <Badge variant="destructive" className="rounded-sm px-1.5 py-0 text-xs">
                      주의 필요: 3명
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">오늘의 상담</span>
                  <div className="rounded-full bg-slate-100 p-2">
                    <ClipboardList className="text-primary h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">8명</span>
                  <div className="mt-2 flex items-center">
                    <span className="text-muted-foreground text-xs">예정된 상담: 5명</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">전체 내담자</span>
                  <div className="rounded-full bg-slate-100 p-2">
                    <Users className="text-primary h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">127명</span>
                  <div className="mt-2 flex items-center">
                    <span className="flex items-center text-xs text-green-500">
                      <ArrowUpRight className="mr-1 h-3 w-3" /> 12% 지난달 대비
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">심각 요청</span>
                  <div className="rounded-full bg-slate-100 p-2">
                    <AlertTriangle className="text-primary h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">5명</span>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs text-red-500">긴급 요청: 2명</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Profile */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>우선 상담 환자 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-start gap-6">
                <Avatar className="h-24 w-24 rounded-md border">
                  <img
                    src="https://thispersondoesnotexist.com"
                    alt="이지은"
                    className="object-cover"
                  />
                </Avatar>
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold">이지은</h3>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline" className="bg-red-50 text-red-700">
                      불안장애
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      경도 우울증
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">최근 상담: 2024.02.10</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">나이:</span>
                    <span className="font-medium">28세</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">성별:</span>
                    <span className="font-medium">여성</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">상담 유형:</span>
                    <span className="font-medium">개인 심리 상담</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">진단:</span>
                    <span className="font-medium">불안장애, 경도 우울증</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">연락처:</span>
                    <span className="font-medium">010-1234-5678</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">주요 특징:</span>
                    <span className="font-medium text-red-500">불안 증상 심함</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">복용 약물:</span>
                    <span className="font-medium">항불안제 (0.5mg, 1일 2회)</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-16 text-sm">직업:</span>
                    <span className="font-medium">IT 회사 디자이너</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex">
                  <span className="text-muted-foreground w-16 text-sm">메모:</span>
                  <span className="font-medium">수면 장애 호소, 긴급 상담 필요</span>
                </div>
                <div className="mt-2 flex">
                  <span className="text-muted-foreground w-16 text-sm">스트레스 요인:</span>
                  <span className="font-medium">직장 내 업무 과중, 대인관계 갈등, 가족 문제</span>
                </div>
                <div className="mt-2 flex">
                  <span className="text-muted-foreground w-16 text-sm">긴급 연락처:</span>
                  <span className="font-medium">김철수 (배우자) 010-9876-5432</span>
                </div>
                <div className="mt-2 flex">
                  <span className="text-muted-foreground w-16 text-sm">이전 상담:</span>
                  <span className="font-medium">
                    2023년 10월~12월 (총 6회), 불안 증상 일시적 호전 후 재발
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chart */}
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>전체 환자 감정 변화 트렌드</CardTitle>
              <Button variant="outline" size="sm">
                주간 <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <DashboardChart />
            </CardContent>
          </Card>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>오늘의 상담 목록</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <div className="font-medium">김철수 (10:00)</div>
                      <div className="text-muted-foreground text-sm">정기 상담</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50"
                    >
                      진행 예정
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <div className="font-medium">박민지 (14:30)</div>
                      <div className="text-muted-foreground text-sm">초기 상담</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50"
                    >
                      준비중
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>새로운 상담 요청</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <div className="font-medium">이지은</div>
                      <div className="text-sm text-red-500">긴급 · 불안 증상</div>
                    </div>
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      최우선
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <div className="font-medium">홍길동</div>
                      <div className="text-muted-foreground text-sm">우울감 호소</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50"
                    >
                      우선
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
