import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/assets/logo.png" alt="Tokunda ロゴ" className="footer-logo" />
                        <p className="footer-tagline">
                            親子の喧嘩をゼロに。算数の土台を作る。
                        </p>
                    </div>

                    <div className="footer-links">
                        <a href="#problem">お悩み</a>
                        <a href="#solution">特徴</a>
                        <a href="#flow">サービスの流れ</a>
                        <a href="#pricing">料金</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Tokunda -とくんだ- All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
