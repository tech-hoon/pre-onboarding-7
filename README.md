# 원티드 프리온보딩(프론트엔드) - 솔라커넥트#2

## 프로젝트 개요

- Todo List 구현
- React, TypeScript, antd 사용
- 버그를 수정하고, 명세에 맞게 기능 구현
- [솔라커넥트](https://www.solarconnect.kr/)에서 제공하는 케이스형 과제

## 구현 사항

### 타이머

- 현재 시간에 맞게 `Date` 객체 생성합니다.

### 완료 버튼(done)

- 클릭 시, `done` 값을 토글로 변경합니다.
- 변경된 `todoState`를 다시 `localStorage`에 저장합니다.

### 만료일 구현

- `antd`의 `datepicker` 사용합니다.
- `<DatePicker/>` 엘리먼트에 만료일을 설정하는 함수를 `onChange`에 걸어주어, 만료일을 설정합니다.

### 유효성 검증

- `input value`나 `dueDate`없을 시, 누락된 값을 재입력하게 유도하는 modal 창이 띄워집니다.
- submit후 `value`와 `dueDate`를 비워주어 UX를 개선하였습니다.

### localStorage 지원 유무

- 브라우저가 `localStorage`를 지원하는지 확인하고 예외처리 합니다.
- [레퍼런스](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

## 데모 링크

[https://tech-hoon.github.io/pre-onboarding-7/](https://tech-hoon.github.io/pre-onboarding-7/)

## 실행 방법

#### Setup

`npm install`

#### Run

`npm start`

## 데모 영상

![demo](https://user-images.githubusercontent.com/19265753/130488194-20427391-e74e-41eb-a09c-30b362ddeb90.gif)
