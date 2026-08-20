const steps = [
  {
    num: '01',
    title: '임종 접수',
    text: '대표전화로 연락 주시면 빈소·안치 가능 여부를 확인하고 다음 절차를 안내합니다.',
  },
  {
    num: '02',
    title: '고인 안치',
    text: '병원 내 임종인 경우 같은 건물에서 안치합니다. 외부 임종은 이송 방법을 함께 상의합니다.',
  },
  {
    num: '03',
    title: '빈소 마련',
    text: '조문 규모에 맞는 빈소를 준비하고, 제단·접객 동선을 안내해 드립니다.',
  },
  {
    num: '04',
    title: '입관례',
    text: '유가족과 함께 입관 일정을 정하고, 예법에 따라 고인을 모십니다.',
  },
  {
    num: '05',
    title: '발인',
    text: '화장장 또는 장지 이동을 포함한 발인 일정을 조율합니다. 화장 예약은 e하늘에서 별도로 진행됩니다.',
  },
]

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <p className="section-kicker">Process</p>
        <h2 className="section-title">이용 절차</h2>
        <p className="section-lead">
          처음이시더라도 순서만 따라오시면 됩니다. 전화 한 통으로 현재 상황을
          말씀해 주시면 이후 단계를 함께 정리해 드립니다.
        </p>
        <div className="timeline">
          {steps.map((step) => (
            <article className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
