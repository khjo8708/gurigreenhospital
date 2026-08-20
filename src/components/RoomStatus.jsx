import { rooms, roomsUpdatedAt } from '../data/rooms.js'

function RoomCard({ room }) {
  const inUse = room.status === 'occupied'
  const details = [
    { label: '입관', value: room.encoffinment },
    { label: '발인', value: room.departure },
    { label: '1차 장지', value: room.firstSite },
    { label: '2차 장지', value: room.secondSite },
  ]

  return (
    <article className={inUse ? 'room-card is-occupied' : 'room-card is-available'}>
      <div className="room-card-top">
        <p className="room-card-name">{room.name}</p>
        <p className="room-card-state">{inUse ? '이용 중' : '대기 가능'}</p>
      </div>
      {inUse && room.deceased && (
        <p className="room-card-deceased">故 {room.deceased}</p>
      )}

      {inUse && (
        <>
          <dl className="room-details">
            {details.map((item) => (
              <div className="room-detail" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value || '-'}</dd>
              </div>
            ))}
          </dl>

          <div className="room-family">
            <div className="room-family-head">
              <span>가족관계</span>
              <strong>{room.familyVisible ? '공개' : '비공개'}</strong>
            </div>
            {room.familyVisible ? (
              room.family.length > 0 ? (
                <ul className="room-family-list">
                  {room.family.map((member) => (
                    <li key={`${member.relation}-${member.name}`}>
                      <em>{member.relation}</em>
                      {member.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="room-family-empty">가족관계를 확인 중입니다.</p>
              )
            ) : (
              <p className="room-family-empty">유가족 요청으로 가족관계는 공개하지 않습니다.</p>
            )}
          </div>
        </>
      )}
    </article>
  )
}

export default function RoomStatus() {
  const occupied = rooms.filter((room) => room.status === 'occupied').length
  const available = rooms.length - occupied

  return (
    <div className="room-status" id="rooms">
      <div className="room-status-head">
        <div>
          <p className="section-kicker">Status</p>
          <h3 className="room-status-title">빈소 이용 현황</h3>
        </div>
        <div className="room-status-summary">
          <span>
            이용 <strong>{occupied}</strong>실
          </span>
          <span className="room-status-dot" />
          <span>
            대기 <strong>{available}</strong>실
          </span>
          <span className="room-status-date">{roomsUpdatedAt} 기준</span>
        </div>
      </div>

      <div className="room-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      <p className="room-status-note">
        빈소 현황은 수시로 바뀔 수 있습니다. 조문·이용 전{' '}
        <a href="tel:031-552-5119">031-552-5119</a>로 확인해 주세요.
      </p>
    </div>
  )
}
