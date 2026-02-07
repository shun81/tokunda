import './Problem.css'

function Problem() {
    const problems = [
        {
            icon: '😤',
            title: '教えようとすると喧嘩に…',
            description: '親が教えると感情的になってしまい、毎回衝突。勉強どころではなくなってしまう。'
        },
        {
            icon: '😰',
            title: '塾の宿題、本当にやってる？',
            description: '塾任せにしていると、計算や基礎の抜け漏れに気づけない。でも確認する時間もない。'
        },
        {
            icon: '📉',
            title: '計算ミスが多くて不安…',
            description: '応用問題よりも計算や基礎問題での失点が多い。土台が固まっていない気がする。'
        }
    ]

    return (
        <section className="problem section" id="problem">
            <div className="container">
                <h2 className="section-title">
                    こんな<span>お悩み</span>ありませんか？
                </h2>

                <div className="problem-grid">
                    {problems.map((problem, index) => (
                        <div
                            className="problem-card"
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="problem-icon">{problem.icon}</div>
                            <h3 className="problem-title">{problem.title}</h3>
                            <p className="problem-description">{problem.description}</p>
                        </div>
                    ))}
                </div>

                <div className="problem-arrow">
                    <span>↓</span>
                </div>

                <p className="problem-conclusion">
                    これらの悩みを<strong className="text-primary">Tokunda</strong>が解決します
                </p>
            </div>
        </section>
    )
}

export default Problem
