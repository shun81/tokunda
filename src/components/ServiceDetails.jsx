import './ServiceDetails.css'

function ServiceDetails() {
    return (
        <section className="service-details section" id="service-details">
            <div className="container">
                <h2 className="section-title">
                    「解き方」だけでなく<br />
                    <span>勉強の仕方</span>から指導します
                </h2>

                <div className="details-content">
                    <div className="detail-item">
                        <div className="detail-text">
                            <h3>週1回40分のオンライン面談</h3>
                            <p>
                                分からない問題を教えるだけではありません。<br />
                                <strong>「ノートの作り方」「計算欄の取り方」「別ノートへの解き直し」</strong>など、
                                中学受験に必要な「自走するための勉強の型」を指導します。
                            </p>
                        </div>
                        <div className="detail-image-wrapper">
                            <img src="/assets/online-session.png" alt="Tokundaの講師によるオンライン面談。ノートの作り方や計算欄の取り方を指導している様子。" className="detail-image" />
                        </div>
                    </div>

                    <div className="detail-item reverse">
                        <div className="detail-text">
                            <h3>点数を上げるノートの取り方</h3>
                            <p>
                                ただ答えを書くだけでは成績は上がりません。<br />
                                「どこで間違えたか」「何を修正すべきか」が一目でわかるノート作りを指導。<br />
                                丁寧なフィードバックで、一生使える学習資産を作ります。
                            </p>
                        </div>
                        <div className="detail-image-wrapper">
                            <img src="/assets/note-taking.png" alt="丁寧に作られた中学受験向けノート。計算欄が広く取られ、解き直しスペースが整理されている例。" className="detail-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetails
