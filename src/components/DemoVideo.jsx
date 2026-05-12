import './DemoVideo.css'
import SectionHeader from './SectionHeader'

function DemoVideo() {
    return (
        <section className="demo-video section bg-light" id="demo-video">
            <div className="container">
                <SectionHeader
                    badge="実際の利用シーン"
                    title={<h2 className="section-title">こんな感じで<span>毎日やりとり</span>しています</h2>}
                    subtitle="LINEでノートの写真を送るだけ。先生からの返信も、この画面で完結します。"
                />

                <div className="demo-video-wrapper">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="demo-video-player"
                        title="Tokunda サービス紹介動画"
                    >
                        <source src="/assets/tokunda_howto.mp4" type="video/mp4" />
                        <source src="/assets/tokunda_howto.mov" type="video/quicktime" />
                        お使いのブラウザは動画再生に対応していません。
                    </video>
                </div>
            </div>
        </section>
    )
}

export default DemoVideo
