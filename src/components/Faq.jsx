const faqs = [
  {
    q: '밤에도 접수할 수 있나요?',
    a: '네. 임종 접수와 빈소 상담은 24시간 전화로 받습니다. 031-552-5119로 연락해 주세요.',
  },
  {
    q: '병원에서 임종한 경우 다른 곳으로 옮겨야 하나요?',
    a: '원진녹색병원 내 임종인 경우, 같은 건물 장례식장에서 안치와 장례를 이어갈 수 있습니다. 외부 임종은 이송 방법을 함께 안내합니다.',
  },
  {
    q: '빈소는 몇 개이며 비용은 얼마인가요?',
    a: '빈소 6실을 운영합니다. 규모와 이용료는 조문 인원·일정에 따라 달라지므로, 전화 상담 시 현재 가능한 빈소와 함께 안내해 드립니다.',
  },
  {
    q: '화장장 예약도 대신해 주시나요?',
    a: '화장 예약은 보건복지부 e하늘 장사정보시스템에서 별도로 진행됩니다. 빈소 일정과 맞춰야 하므로, 접수 시 일정 조율 방법을 안내해 드립니다.',
  },
  {
    q: '조문 전에 꼭 전화해야 하나요?',
    a: '빈소 번호와 조문 가능 시간이 바뀔 수 있어, 방문 전 한 번 확인해 주시면 좋습니다.',
  },
]

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title">자주 묻는 질문</h2>
        <p className="section-lead">
          급한 상황에서는 아래보다 전화가 빠릅니다. 대표번호 031-552-5119
        </p>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
