// 빈소 이용 현황 — status: 'occupied' | 'available'
// familyVisible: true면 가족관계를 공개하고, false면 비공개로 표시합니다.
// GitHub Pages는 서버가 없으므로, 현황을 바꾸려면 이 파일만 수정한 뒤 다시 배포하면 됩니다.

function formatToday() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(new Date())
    .replaceAll('-', '.')
}

export const roomsUpdatedAt = formatToday()

export const rooms = [
  {
    id: 1,
    name: '1빈소',
    status: 'occupied',
    deceased: '이창수',
    encoffinment: '2026.08.21 14:00',
    departure: '2026.08.22 07:30',
    firstSite: '서울시립승화원',
    secondSite: '구리추모공원',
    familyVisible: true,
    family: [
      { relation: '배우자', name: '박순자' },
      { relation: '장남', name: '이정호' },
      { relation: '장녀', name: '이미경' },
    ],
  },
  {
    id: 2,
    name: '2빈소',
    status: 'occupied',
    deceased: '정민호',
    encoffinment: '2026.08.21 16:00',
    departure: '2026.08.22 08:00',
    firstSite: '성남 장례문화사업소',
    secondSite: '선영',
    familyVisible: false,
    family: [],
  },
  {
    id: 3,
    name: '3빈소',
    status: 'available',
    deceased: '',
    encoffinment: '',
    departure: '',
    firstSite: '',
    secondSite: '',
    familyVisible: false,
    family: [],
  },
  {
    id: 4,
    name: '4빈소',
    status: 'occupied',
    deceased: '김영수',
    encoffinment: '2026.08.20 19:00',
    departure: '2026.08.22 06:40',
    firstSite: '서울시립승화원',
    secondSite: '용미리 서울시립묘지',
    familyVisible: true,
    family: [
      { relation: '배우자', name: '최영숙' },
      { relation: '차남', name: '김태현' },
    ],
  },
  {
    id: 5,
    name: '5빈소',
    status: 'available',
    deceased: '',
    encoffinment: '',
    departure: '',
    firstSite: '',
    secondSite: '',
    familyVisible: false,
    family: [],
  },
  {
    id: 6,
    name: '6빈소',
    status: 'available',
    deceased: '',
    encoffinment: '',
    departure: '',
    firstSite: '',
    secondSite: '',
    familyVisible: false,
    family: [],
  },
]
