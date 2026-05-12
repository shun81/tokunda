import './Pricing.css'

function Pricing() {
    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <h2 className="section-title">
                    <span>料金</span>プラン
                </h2>

                <div className="pricing-container">
                    {/* Standard Plan */}
                    <div className="pricing-card standard">
                        <div className="pricing-header">
                            <span className="pricing-label">スタンダードプラン</span>
                            <div className="pricing-amount">
                                <span className="price-yen">¥</span>
                                <span className="price-number">15,000</span>
                                <span className="price-tax">（税込）</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="pricing-features">
                                <li className="pricing-feature">
                                    <span className="feature-icon">📱</span>
                                    <span>毎日(日・祝除く)の課題配信</span>
                                </li>
                                <li className="pricing-feature">
                                    <span className="feature-icon">✍️</span>
                                    <span>毎日のノート添削フィードバック</span>
                                </li>
                                <li className="pricing-feature">
                                    <span className="feature-icon">📚</span>
                                    <span>新演習対応カリキュラム</span>
                                </li>
                                <li className="pricing-feature">
                                    <span className="feature-icon">📖</span>
                                    <span>オリジナル教材(準備中)</span>
                                </li>
                                <li className="pricing-feature unavailable">
                                    <span className="feature-icon">❌</span>
                                    <span className="text-muted">週1回オンライン面談</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#cta" className="btn btn-outline btn-large">
                                3日間の体験を始める
                            </a>
                            <div className="pricing-trial-note">
                                <p className="pricing-note">まずは3日間のお試し体験(1,500円)から</p>
                                <p className="cashback-note">✨ 体験後に入会で体験費用 1,500円 キャッシュバック！</p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="pricing-card premium">
                        <div className="pricing-header">
                            <span className="pricing-label popular">人気No.1</span>
                            <h3 className="plan-name">プレミアムプラン</h3>
                            <div className="pricing-amount">
                                <span className="price-yen">¥</span>
                                <span className="price-number">20,000</span>
                                <span className="price-tax">（税込）</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="pricing-features">
                                <li className="pricing-feature">
                                    <span className="feature-icon">📱</span>
                                    <span>毎日(日・祝除く)の課題配信</span>
                                </li>
                                <li className="pricing-feature">
                                    <span className="feature-icon">✍️</span>
                                    <span>毎日のノート添削フィードバック</span>
                                </li>
                                <li className="pricing-feature">
                                    <span className="feature-icon">📚</span>
                                    <span>新演習対応カリキュラム</span>
                                </li>
                                <li className="pricing-feature">
                                    <span className="feature-icon">📖</span>
                                    <span>オリジナル教材(準備中)</span>
                                </li>
                                <li className="pricing-feature highlight">
                                    <span className="feature-icon">💻</span>
                                    <strong>週1回60分オンライン面談</strong>
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#cta" className="btn btn-primary btn-large">
                                3日間の体験を始める
                            </a>
                            <div className="pricing-trial-note">
                                <p className="pricing-note">まずは3日間のお試し体験(1,500円)から</p>
                                <p className="cashback-note">✨ 体験後に入会で体験費用 1,500円 キャッシュバック！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Pricing
