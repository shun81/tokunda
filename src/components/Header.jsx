import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="header-logo">
                    <img src="/assets/logo.png" alt="Tokunda -とくんだ- ホームへ" width="48" height="48" />
                </a>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニュー"
                >
                    <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                    <a href="#problem" onClick={() => setMenuOpen(false)}>お悩み</a>
                    <a href="#service-details" onClick={() => setMenuOpen(false)}>サービス</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}>料金</a>
                    <a href="#cta" className="btn btn-primary header-cta" onClick={() => setMenuOpen(false)}>
                        体験に申し込む
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
