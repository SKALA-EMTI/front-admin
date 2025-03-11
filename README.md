# FE_MOOD_TRACKER_COUNSELOR

## 프로젝트 구조 컨벤션

src/
├── app/ # App Router 구조
│ ├── (auth)/ # 그룹화된 라우트 (로그인 등)
│ ├── (dashboard)/ # 대시보드 관련 라우트
│ ├── api/ # API 라우트
│ └── layout.tsx # 루트 레이아웃
├── components/ # 재사용 컴포넌트
│ ├── ui/ # 기본 UI 컴포넌트
│ └── features/ # 기능별 복합 컴포넌트
├── lib/ # 유틸리티 함수 및 설정
├── hooks/ # 커스텀 훅
├── types/ # 공통 타입 정의
└── styles/ # 글로벌 스타일



## 협업 워크플로우

간소화된 Git Flow: main, develop, feature/* 브랜치 구조
기능 단위 브랜치 및 PR
PR 전 최소한의 로컬 테스트 권장
핵심 페이지 경로는 문서화 (README.md에 기록)