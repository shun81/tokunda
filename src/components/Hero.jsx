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
                    <div className="hero-badge animate-fade-in-up">
                        <span className="badge-icon">📚</span>
                        <span>小4から始める中学受験の土台づくり</span>
                    </div>

                    <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        親子の喧嘩を<span className="text-primary">ゼロ</span>に。<br />
                        算数の<span className="text-primary">土台</span>を作る。
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Tokunda -とくんだ- は、親に代わって第三者がLINEで毎日並走。<br className="hide-mobile" />
                        中学受験における「計算・基礎の習慣化」をサポートする伴走型学習サービスです。
                    </p>

                    <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <a href="#cta" className="btn btn-primary btn-large">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                            </svg>
                            無料体験に申し込む
                        </a>
                        <a href="#flow" className="btn btn-secondary">
                            サービスの流れを見る
                        </a>
                    </div>

                    <div className="hero-features animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="hero-feature">
                            <span className="feature-check">✓</span>
                            <span>新演習対応</span>
                        </div>
                        <div className="hero-feature">
                            <span className="feature-check">✓</span>
                            <span>毎日LINE並走</span>
                        </div>
                        <div className="hero-feature">
                            <span className="feature-check">✓</span>
                            <span>週1オンライン面談</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="hero-card animate-float">
                        <img src="/assets/logo.png" alt="Tokunda ロゴ" className="hero-logo" />
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
