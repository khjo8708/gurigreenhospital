import { IconAccess, IconCar, IconHome, IconMeal, IconRoom, IconStore, IconUsers } from './Icons.jsx'

const facilities = [
  {
    icon: <IconRoom />,
    title: '빈소 6실',
    text: '유가족과 조문객이 고인을 모실 수 있도록 빈소 6실을 운영합니다. 규모는 상담 시 안내합니다.',
  },
  {
    icon: <IconHome />,
    title: '안치실',
    text: '병원 내 안치 시설을 갖추어 임종 이후 이동 부담을 줄이고, 고인을 정중히 모십니다.',
  },
  {
    icon: <IconUsers />,
    title: '유족대기실',
    text: '조문 전후 잠시 숨을 고를 수 있는 대기 공간을 마련해 두었습니다.',
  },
  {
    icon: <IconMeal />,
    title: '식당',
    text: '유가족과 조문객을 위한 식사 공간을 운영합니다. 이용 시간은 현장 안내에 따릅니다.',
  },
  {
    icon: <IconStore />,
    title: '매점',
    text: '상주 물품과 간단한 생필품을 현장에서 구하실 수 있습니다.',
  },
  {
    icon: <IconAccess />,
    title: '장애인 편의시설',
    text: '거동이 불편하신 분도 이용하실 수 있도록 편의시설을 갖추고 있습니다.',
  },
  {
    icon: <IconCar />,
    title: '주차장',
    text: '병원 건물 오른쪽 입구로 들어오시면 주차장을 이용하실 수 있습니다.',
  },
]

export default function Facilities() {
  return (
    <section className="section facilities" id="facilities">
      <div className="container">
        <p className="section-kicker">Facilities</p>
        <h2 className="section-title">유가족과 조문객을 위한 시설</h2>
        <p className="section-lead">
          빈소, 안치, 식당, 대기실, 주차까지 한곳에서 이용하실 수 있습니다.
          시설 이용 가능 여부는 빈소 상황에 따라 달라질 수 있습니다.
        </p>
        <div className="card-grid">
          {facilities.map((item) => (
            <article className="card" key={item.title}>
              <div className="icon-bubble">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
