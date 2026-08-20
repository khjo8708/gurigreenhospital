import { IconClock, IconHeart, IconHome } from './Icons.jsx'
import RoomStatus from './RoomStatus.jsx'

const points = [
  {
    icon: <IconHome />,
    title: '병원 부설 장례식장',
    text: '원진녹색병원 내에서 임종 직후 별도 이송 없이 안치와 장례를 이어갈 수 있습니다.',
  },
  {
    icon: <IconClock />,
    title: '24시간 임종 접수',
    text: '밤낮을 가리지 않고 전화로 빈소 현황과 안치 가능 여부를 안내합니다.',
  },
  {
    icon: <IconHeart />,
    title: '유가족 중심 안내',
    text: '빈소 마련, 입관, 발인까지 필요한 절차를 순서대로 설명해 드립니다.',
  },
]

export default function About() {
  return (
    <>
      <div className="stats" aria-label="시설 요약">
        <div className="stat">
          <strong>24시간</strong>
          <span>임종 접수 · 상담</span>
        </div>
        <div className="stat">
          <strong>빈소 6실</strong>
          <span>조문 규모에 맞게 안내</span>
        </div>
        <div className="stat">
          <strong>안치 6구</strong>
          <span>병원 내 안치 시설</span>
        </div>
        <div className="stat">
          <strong>동구릉역</strong>
          <span>8호선 도보 약 8분</span>
        </div>
      </div>

      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <p className="section-kicker">About</p>
              <h2 className="section-title">
                구리시 인창동에서
                <br />
                마지막 길을 함께합니다
              </h2>
              <p className="section-lead">
                원진녹색병원 장례식장은 원진재단 부설 의료기관 안에 자리한 중형
                장례식장입니다. 의료진과 장례 인력이 가까운 거리에서 협력해, 유가족이
                이동과 절차에 덜 지치도록 돕습니다.
              </p>
              <div className="about-points">
                {points.map((item) => (
                  <article className="about-point" key={item.title}>
                    <div className="icon-bubble">{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="about-panel">
              <div>
                <span>원진녹색병원 장례식장</span>
                <h3>
                  빈소 현황과 이용료는
                  <br />
                  전화로 바로 확인해 드립니다
                </h3>
              </div>
              <p>
                빈소 규모와 비용은 조문객 수와 일정에 따라 달라집니다. 방문 전
                031-552-5119로 빈소 번호와 조문 가능 시간을 확인해 주시기 바랍니다.
              </p>
            </aside>
          </div>

          <RoomStatus />
        </div>
      </section>
    </>
  )
}
