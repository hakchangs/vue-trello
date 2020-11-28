# vue-trello

Trello 클론 해봄.

## 구성

1. server: 기존 구현소스 사용함. [express](https://github.com/jeonghwan-kim/lecture-vue-trello-server)
2. front: 여기서 구현한 내용들. (vue)

## 평가

### 소요시간: 3일

D-1: DB/API분석, 환경구성, API모델 생성(with.테스트)
D-2: Vuex Store 구현(with.테스트), 로그인, 보드관리, 리스트관리, 카드관리
D-3: 드래그&드랍 보완, 포지션 저장 보완.

### 기능

#### 빠진기능

- 배경색변경
- 카드설명 아이콘표시
- 드래그&드랍 이동시 기울임 스타일
- Modal 백그라운드 액션막기
- 로그아웃
- 네비게이션바

#### 부가기능

- Enter/Ctrl+Enter 등 키보드제어
- blur 액션처리
- 좌우 마우스드래그 스크롤 (슬라이더 드래그, 마우스클릭+이동)
- 리스트 드래그&드랍시, 대상이 명확함.
