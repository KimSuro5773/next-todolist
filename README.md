# Codeit Frontend Deep TodoList Task

## 배포 링크

배포 링크 : [todolist-doit.vercel.app](todolist-doit.vercel.app)

## 주요기능

- **할 일 관리**: 할 일 생성, 수정, 삭제, 완료 처리
- **상세 페이지**: 메모 작성 및 이미지 첨부
- - **반응형 디자인**: 모바일, 태블릿, 데스크탑 지원

## 기술 스택

| 분류      | 기술                      |
| --------- | ------------------------- |
| Framework | Next.js 16, React 19      |
| Language  | TypeScript                |
| Styling   | Tailwind CSS 4, shadcn/ui |
| Font      | Nanum Square              |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

```
.env 파일을 생성하여 NEXT_PUBLIC_API_SERVER_URL을 추가하여 사용
```

프로젝트 구조

```
src/
├── app/                # App Router 페이지
│   ├── page.tsx       # 메인 페이지 (할 일 목록)
│   └── items/[itemId] # 상세 페이지
├── actions/           # Server Actions
├── components/        # 재사용 가능한 컴포넌트
│   └── ui/           # 공통 UI 컴포넌트
├── types/            # TypeScript 타입 정의
└── lib/              # 유틸리티 함수
```
