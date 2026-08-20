export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <strong>원진녹색병원 장례식장</strong>
            경기도 구리시 동구릉로 65 (인창동)
            <br />
            장례식장 031-552-5119 · 병원 대표 031-550-1111
          </div>
          <div>
            원진재단 부설 원진녹색병원
            <br />
            <a href="http://www.wj-greenhospital.com/" target="_blank" rel="noreferrer">
              병원 홈페이지
            </a>
          </div>
        </div>
        <p className="footer-copy">
          시설·비용·운영 정보는 변동될 수 있습니다. 이용 전 전화로 확인해 주세요.
          <br />© {new Date().getFullYear()} 원진녹색병원 장례식장
        </p>
      </div>
    </footer>
  )
}
