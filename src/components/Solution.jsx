import './Solution.css'

function Solution() {
    const solutions = [
        {
            icon: '👨‍🏫',
            title: '第三者だからこそできる「毎日の並走」',
            description: '親ではなく「先生」という第三者が毎日見守ることで、子供は報告義務を感じ、学習習慣が自然と身につきます。親子の衝突も回避できます。',
            color: 'primary'
        },
        {
            icon: '💬',
            title: 'LINEで手軽に報告・フィードバック',
            description: 'その日の課題をLINEで配信。子供はノートを写真で送るだけ。丁寧なフィードバックで「見てもらえている」安心感を提供します。',
            color: 'accent'
        },
        {
            icon: '🎥',
            title: '週1回のオンライン面談で理解を深める',
            description: '60分のオンライン面談で、その週の重要ポイントをしっかり解説。分数・小数の変換など、計算のコツを伝授します。',
            color: 'secondary'
        }
    ]

    return (
        <section className="solution section" id="solution">
            <div className="container">
                <h2 className="section-title">
                    <span>Tokunda</span>の3つの特徴
                </h2>

                <div className="solution-grid">
                    {solutions.map((solution, index) => (
                        <div
                            className={`solution-card solution-card--${solution.color}`}
                            key={index}
                        >
                            <div className="solution-number">0{index + 1}</div>
                            <div className="solution-icon">{solution.icon}</div>
                            <h3 className="solution-title">{solution.title}</h3>
                            <p className="solution-description">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solution
