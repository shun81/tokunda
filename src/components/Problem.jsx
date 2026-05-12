import './Problem.css'

function Problem() {
    const problems = [
        {
            id: 'homework',
            icon: '😰',
            title: '塾の宿題、本当にやってるの？',
            description: '「やった」と言われても、中身が見えない。確認しようとすると嫌がられる。'
        },
        {
            id: 'conflict',
            icon: '😤',
            title: '教えようとすると喧嘩になる',
            description: '親が言うと素直に聞けない。感情的になってしまい、勉強どころではなくなる。'
        },
        {
            id: 'anxiety',
            icon: '📉',
            title: '分からないところが、放置されていて不安',
            description: '解けない問題がそのまま積み重なっている気がする。どこでつまずいているのか見えない。'
        }
    ]

    // スマホでは「塾の宿題」を最初に表示するためのクラス制御はCSSで行うか、
    // ここでは単純に配列の順番を変更済み（要件通り）

    return (
        <section className="problem section" id="problem">
            <div className="container">
                <h2 className="section-title">
                    こんな<span>お悩み</span>ありませんか？
                </h2>

                <div className="problem-grid">
                    {problems.map((problem, index) => (
                        <div
                            className={`problem-card ${problem.id}`}
                            key={index}
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
