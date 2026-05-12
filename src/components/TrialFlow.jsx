import './TrialFlow.css'
import SectionHeader from './SectionHeader'

function TrialFlow() {
    const steps = [
        {
            day: 'Day 1',
            icon: '📷',
            title: 'カメラ設定チュートリアル',
            description: '最初の10〜30分で「ノート（手元）をカメラにどう映すか」を一緒に練習します。オンラインでの指導効果を最大化するための必須ステップです。'
        },
        {
            day: 'Day 1〜2',
            icon: '✍️',
            title: '課題取り組み＆添削ラリー',
            description: '配信された課題を自力で解き、ノートを撮影してLINEで提出。講師からのきめ細かい添削指導（ラリー）を体験していただきます。'
        },
        {
            day: 'Day 3',
            icon: '💻',
            title: 'オンライン授業＋面談',
            description: '2日間の取り組みから見えた課題を抽出し、約40分のオンライン授業を実施します。今後の学習のアドバイスも行います。'
        }
    ]

    return (
        <section className="trial-flow section bg-light" id="trial-flow">
            <div className="container">
                <SectionHeader
                    badge="1,500円（税込）"
                    title={<h2 className="section-title">3日間の<span>お試し体験フロー</span></h2>}
                    subtitle="まずは3日間の体験レッスンで、Tokundaのきめ細やかな指導をご体感ください。"
                />

                <div className="trial-flow-cards">
                    {steps.map((item, index) => (
                        <div className="trial-flow-card" key={index}>
                            <div className="trial-day-badge">{item.day}</div>
                            <div className="trial-icon">{item.icon}</div>
                            <h3 className="trial-title">{item.title}</h3>
                            <p className="trial-description">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default TrialFlow
