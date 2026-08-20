const items = [
  {
    title: '방문 전 확인',
    text: '빈소 번호와 조문 가능 시간은 방문 전 031-552-5119로 확인해 주세요. 빈소 상황에 따라 안내가 달라질 수 있습니다.',
  },
  {
    title: '조문 복장',
    text: '검은색 또는 어두운 색 정장이 일반적입니다. 과한 장식과 밝은 색 옷차림은 피하는 것이 좋습니다.',
  },
  {
    title: '부의금',
    text: '흰색 봉투에 성함을 적어 전달합니다. 빈소 입구의 접수 안내를 따르면 됩니다.',
  },
  {
    title: '근조화환',
    text: '화환은 빈소 번호와 상주 성함을 정확히 적어 보내 주시기 바랍니다. 설치 위치는 현장 안내에 따릅니다.',
  },
]

export default function Guide() {
  return (
    <section className="section guide" id="guide">
      <div className="container">
        <p className="section-kicker">Etiquette</p>
        <h2 className="section-title">조문 오실 때</h2>
        <p className="section-lead">
          유가족을 배려하는 작은 예절이 고인에 대한 마음이 됩니다.
        </p>
        <div className="guide-grid">
          {items.map((item) => (
            <article className="guide-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
