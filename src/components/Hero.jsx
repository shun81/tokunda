import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title animate-fade-in-up delay-1">
                        もう算数で喧嘩しない。<br />
                        中学受験の土台を作る毎日添削。
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up delay-2">
                        LINEでノートの写真を送るだけ。<br />
                        専門の講師が毎日（日・祝除く）きめ細かく添削し、<br />
                        自ら机に向かう学習習慣を育てます。
                    </p>

                    <div className="hero-cta animate-fade-in-up delay-3">
                        <a href="#cta" className="btn btn-primary btn-large">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                            </svg>
                            3日間のお試し体験を始める
                        </a>
                        <a href="#flow" className="btn btn-secondary">
                            サービスの流れを見る
                        </a>
                    </div>

                    <div className="hero-features animate-fade-in-up delay-4">
                        <div className="hero-feature">
                            <span className="feature-check">✓</span>
                            <span>新演習対応</span>
                        </div>
                        <div className="hero-feature">
                            <span className="feature-check">✓</span>
                            <span>毎日添削<small> (日・祝除く)</small></span>
                        </div>
                        <div className="hero-feature">
                            <span className="feature-check">✓</span>
                            <span>週1オンライン面談</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in-up delay-3">
                    <div className="hero-card animate-float">
                        <img src="/assets/logo.png" alt="Tokunda -とくんだ- ロゴ。LINEベースの毎日算数添削サービス。" className="hero-logo" />
                        <div className="hero-card-content">
                            <div className="chat-bubble chat-sent">
                                <span>今日の計算課題やりました！📝</span>
                            </div>
                            <div className="chat-bubble chat-received">
                                <span>すごい！丁寧にノートが書けてるね💯</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span>scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
