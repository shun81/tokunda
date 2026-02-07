import './Pricing.css'

function Pricing() {
    const features = [
        { icon: '📱', text: '毎日のLINE課題配信' },
        { icon: '✍️', text: 'ノート添削フィードバック' },
        { icon: '💻', text: '週1回60分オンライン面談' },
        { icon: '📚', text: '新演習対応カリキュラム' }
    ]

    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <h2 className="section-title">
                    <span>料金</span>プラン
                </h2>

                <div className="pricing-card">
                    <div className="pricing-header">
                        <span className="pricing-label">月額</span>
                        <div className="pricing-amount">
                            <span className="price-yen">¥</span>
                            <span className="price-number">10,000</span>
                            <span className="price-tax">（税込）</span>
                        </div>
                    </div>

                    <div className="pricing-body">
                        <ul className="pricing-features">
                            {features.map((feature, index) => (
                                <li key={index} className="pricing-feature">
                                    <span className="feature-icon">{feature.icon}</span>
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pricing-footer">
                        <a href="#cta" className="btn btn-primary btn-large">
                            無料体験に申し込む
                        </a>
                        <p className="pricing-note">まずは1週間の無料体験からスタート</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
