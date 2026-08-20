const ADDRESS = '경기도 구리시 동구릉로 65 (인창동)'
const query = encodeURIComponent(`${ADDRESS} 원진녹색병원`)

export default function Location() {
  return (
    <section className="section" id="location">
      <div className="container">
        <p className="section-kicker">Location</p>
        <h2 className="section-title">오시는 길</h2>
        <p className="section-lead">
          지하철 8호선 동구릉역에서 도보로 오실 수 있습니다. 자가용은 병원 오른쪽
          주차장 입구를 이용해 주세요.
        </p>

        <div className="location-grid">
          <div className="info-list">
            <div className="info-item">
              <h3>주소</h3>
              <p>{ADDRESS}</p>
            </div>
            <div className="info-item">
              <h3>장례식장 전화</h3>
              <p>
                <a href="tel:031-552-5119">031-552-5119</a>
              </p>
            </div>
            <div className="info-item">
              <h3>대중교통</h3>
              <p>지하철 8호선 동구릉역 하차, 도보 약 8~10분</p>
            </div>
            <div className="info-item">
              <h3>주차</h3>
              <p>원진녹색병원 건물 오른쪽 주차장 입구</p>
            </div>
            <div className="map-links">
              <a
                className="btn btn-outline"
                href={`https://map.naver.com/p/search/${query}`}
                target="_blank"
                rel="noreferrer"
              >
                네이버 지도
              </a>
              <a
                className="btn btn-outline"
                href={`https://map.kakao.com/?q=${query}`}
                target="_blank"
                rel="noreferrer"
              >
                카카오맵
              </a>
              <a
                className="btn btn-outline"
                href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                target="_blank"
                rel="noreferrer"
              >
                구글 지도
              </a>
            </div>
          </div>

          <iframe
            className="map-frame"
            title="원진녹색병원 위치"
            src={`https://maps.google.com/maps?q=${query}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
