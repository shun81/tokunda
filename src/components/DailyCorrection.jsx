import './DailyCorrection.css'
import SectionHeader from './SectionHeader'

function DailyCorrection() {
    return (
        <section className="daily-correction section bg-light" id="daily-correction">
            <div className="container">
                <SectionHeader
                    badge="Tokundaの最大の強み"
                    badgeVariant="accent"
                    title={<h2 className="section-title">圧倒的な<span>「毎日添削」</span>で<br className="mobile-only" />学習習慣を定着</h2>}
                    subtitle="週1回の指導では間延びしてしまう勉強も、毎日（日曜・祝日を除く）の細やかなやり取りで「今日やること」が明確になり、自然と机に向かう習慣がパチっと身につきます。"
                />

                <div className="correction-showcase">
                    <div className="correction-text-area">
                        <h3>1週間の添削ラリー（例）</h3>
                        <ul className="correction-features">
                            <li>
                                <strong>月曜：</strong> その週の課題を配信。さっそく1日目を解いて提出。
                            </li>
                            <li>
                                <strong>火曜・水曜：</strong> 毎日ノートの写真を送るだけ。間違えた箇所のヒント解説が返ってくるから、その日のうちに直せる。
                            </li>
                            <li>
                                <strong>木曜・金曜：</strong> ちょっとサボりたくなっても、先生が待っているから「とりあえずやろう」と机に向かえる。
                            </li>
                            <li>
                                <strong>土曜：</strong> 1週間の総復習。溜まったノートを見返して、どこが成長したか振り返り。
                            </li>
                            <li className="holiday-note">
                                <strong>日曜・祝日：</strong> お休み。リフレッシュして次の週へ！
                            </li>
                        </ul>
                    </div>

                    <div className="correction-chat-mockup">
                        <div className="chat-header">
                            <div className="chat-person">Tokunda 先生</div>
                        </div>
                        <div className="chat-body">
                            <div className="chat-date">今日</div>

                            <div className="chat-message received">
                                昨日の計算、[3]の(2)の解き方がすごく良かったよ！✨<br />
                                今日の課題はP.45です。計算スペースをしっかり取ってやってみよう！
                            </div>

                            <div className="chat-message sent">
                                わかりました！やってみます✍️
                            </div>

                            <div className="chat-message sent has-image">
                                <div className="image-placeholder">📷 ノートの写真</div>
                                やりました！
                            </div>

                            <div className="chat-message received">
                                提出ありがとう！すぐ確認するね👀<br />
                                途中式もきれいに書けてる。ただ、[1]の計算順番だけもう一回見直してみようか！
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DailyCorrection
