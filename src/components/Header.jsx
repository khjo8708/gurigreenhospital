import { IconPhone, LogoMark } from './Icons.jsx'

const links = [
  { href: '#about', label: '소개' },
  { href: '#facilities', label: '시설' },
  { href: '#process', label: '이용 절차' },
  { href: '#guide', label: '조문 안내' },
  { href: '#location', label: '오시는 길' },
  { href: '#faq', label: '문의' },
]

export default function Header({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="logo" href="#top" onClick={close}>
          <LogoMark />
          <span className="logo-text">
            <strong>원진녹색병원</strong>
            <span>장례식장</span>
          </span>
        </a>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="주요 메뉴">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-phone" href="tel:031-552-5119">
          <IconPhone />
          031-552-5119
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
