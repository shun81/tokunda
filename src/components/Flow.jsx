import './Flow.css'

function Flow() {
    const steps = [
        {
            step: 1,
            icon: '📱',
            title: 'LINE登録',
            description: 'LPからお申込み後、Tokunda公式LINEに登録'
        },
        {
            step: 2,
            icon: '📋',
            title: '日々の課題配信',
            description: '曜日・休日に合わせた課題をお知らせ'
        },
        {
            step: 3,
            icon: '📸',
            title: 'ノート写真で報告',
            description: '解いて丸付け・解き直ししたノートを撮影して送信'
        },
        {
            step: 4,
            icon: '✍️',
            title: '毎日のフィードバック',
            description: '先生からの直接の添削と解き方アドバイス（日・祝除く）'
        },
        {
            step: 5,
            icon: '💻',
            title: '週1オンライン面談',
            description: '60分の面談で重要な解法をレクチャー'
        }
    ]

    return (
        <section className="flow section" id="flow">
            <div className="container">
                <h2 className="section-title">
                    1週間の<span>サービスフロー</span>
                </h2>

                <div className="flow-timeline">
                    {steps.map((item, index) => (
                        <div className="flow-item" key={index}>
                            <div className="flow-step">
                                <span className="step-number">STEP {item.step}</span>
                                <div className="step-icon">{item.icon}</div>
                            </div>
                            <div className="flow-content">
                                <h3 className="flow-title">{item.title}</h3>
                                <p className="flow-description">{item.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="flow-connector">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flow-note">
                    <div className="note-icon">📚</div>
                    <div className="note-content">
                        <strong>対応教材</strong>
                        <p>小学4年生「新演習」をベースに、ポイントチェックや練習問題レベルを完璧にすることを目標としています。</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Flow
