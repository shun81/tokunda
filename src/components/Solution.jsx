import './Solution.css'

function Solution() {
    const solutions = [
        {
            icon: '👨‍🏫',
            title: '親の代わりに先生が毎日伴走「第三者」だから喧嘩にならない',
            description: '親が言うと角が立つことも、先生からなら素直に聞ける。報告がない時は、親ではなく先生が「待ってるよ」と優しくリマインドします。',
            color: 'primary'
        },
        {
            icon: '💬',
            title: '毎日の添削ラリー（※日・祝除く）',
            description: '解いた問題のノート写真を送るだけで、毎日細やかな添削が返ってきます。テンポのいいラリーで毎日の学習習慣が自然と身につきます。',
            color: 'accent'
        },
        {
            icon: '📅',
            title: '1週間分の日割りスケジュール',
            description: '土曜日に翌週1週間分のスケジュールを作成。「今日なにをやればいいか」が明確なので、迷わず学習に取り組めます。',
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
