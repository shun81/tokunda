# SEO最適化ガイド - Tokunda LP

このドキュメントは、Tokunda LPに実装されたSEO対策をまとめたものです。

## 実装済みのSEO対策

### 1. メタタグの強化 (`index.html`)

#### 基本メタタグ
- **タイトル**: 親子の喧嘩をゼロに。算数の土台を作る。
- **説明文**: Tokundaの価値提案を含む160文字のメタディスクリプション
- **キーワード**: 中学受験、算数、LINE、オンライン学習など関連検索キーワード
- **Canonical URL**: https://tokunda.jp/ （重複コンテンツ問題を回避）

#### Open Graph タグ (SNS共有最適化)
```html
<meta property="og:title" content="Tokunda -とくんだ- | 親子の喧嘩をゼロに。算数の土台を作る。" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/assets/logo.png" />
```
- Facebook、Line、Slackなどで共有された時の表示を最適化

#### Twitter Card タグ
- Twitter/X上での共有表示を最適化
- Large Image カード形式で視認性を向上

#### 言語指定
- `<html lang="ja">` で日本語コンテンツを明記

### 2. 構造化データ (Schema.org)

JSON-LD形式の構造化データを追加：

#### Organization スキーマ
```json
{
  "@type": "Organization",
  "name": "Tokunda -とくんだ-",
  "url": "https://tokunda.jp/",
  "logo": "https://tokunda.jp/assets/logo.png"
}
```
- ブランド認識向上
- ナレッジパネル表示の基礎

#### Service スキーマ
```json
{
  "@type": "Service",
  "name": "Tokunda -毎日算数添削-",
  "areaServed": "JP",
  "offers": [
    {"name": "スタンダードプラン", "price": "15000"},
    {"name": "プレミアムプラン", "price": "20000"}
  ]
}
```
- サービス内容、対応地域、料金をGoogleに明確に伝達
- Googleナレッジグラフの充実

### 3. 画像のalt属性最適化

全画像に説明的なalt属性を追加：

| 画像 | 改善前 | 改善後 |
|------|--------|--------|
| ロゴ | "Tokunda" | "Tokunda -とくんだ- ロゴ。LINEベースの毎日算数添削サービス。" |
| オンライン面談 | "オンライン指導の様子" | "Tokundaの講師によるオンライン面談。ノートの作り方や計算欄の取り方を指導している様子。" |
| ノート例 | "点数を上げるノート" | "丁寧に作られた中学受験向けノート。計算欄が広く取られ、解き直しスペースが整理されている例。" |

**メリット**
- 画像検索（Google Images）での流入増加
- 画像の読み込み失敗時のユーザー体験向上
- アクセシビリティ（スクリーンリーダー対応）の改善

### 4. robots.txt と sitemap.xml

#### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://tokunda.jp/sitemap.xml
```
- 検索エンジンのクローリングガイドを提供
- 重要なサイトマップへの参照

#### sitemap.xml
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tokunda.jp/</loc>
    <lastmod>2026-05-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```
- Google Search Consoleでのサイト登録に必須
- 更新頻度を伝達

### 5. セマンティックHTML

#### セクションIDの活用
```html
<section className="problem section" id="problem">
<section className="service-details section" id="service-details">
<section className="flow section" id="flow">
<section className="pricing section" id="pricing">
```
- セマンティックな見出し階層（H1 → H2 → H3）
- ナビゲーション内部リンク（#problem, #flow, #pricing）が検索エンジンに認識される

#### 適切な見出し構造
- H1: ページタイトル（Hero セクション）
- H2: 各セクションタイトル
- H3: サブセクション見出し

## SEO監視・改善

### Google Search Console への登録
1. https://search.google.com/search-console/ にアクセス
2. プロパティを追加: https://tokunda.jp/
3. robots.txt と sitemap.xml が認識されることを確認

### 監視すべき指標
- **Google順位**: 関連キーワード（「中学受験 算数」「LINE 家庭教師」など）
- **クリック数**: Search Consoleの検索分析レポート
- **クロール状況**: エラー、有効性を確認
- **モバイルフレンドリー**: PageSpeed Insights でスコア確認

### PageSpeed Insights での最適化
- https://pagespeed.web.dev/ でスコア確認
- Core Web Vitals: LCP、FID、CLSが良好であることを確認
- Vercel上のデプロイで自動的にCDN配信される

## 今後の推奨事項

### 短期
1. **Google Search Console に登録** → robots.txt、sitemap.xml が認識されることを確認
2. **Google ビジネスプロフィールの作成** → ローカルSEO対応
3. **Googleアナリティクス4の設定** → 来訪者数、流入元、ユーザー行動の追跡

### 中期
1. **ブログコンテンツの追加** → 「中学受験 親の向き合い方」など関連検索キーワード向けの記事
2. **内部リンク戦略の強化** → 各セクションへの相互リンク
3. **ユーザーテスト** → ページの回遊性、CTA達成率の測定

### 長期
1. **バックリンク獲得** → 教育メディア、親向けメディアでの紹介
2. **SNS連携強化** → 定期的なコンテンツ更新がSEOランキングに好影響
3. **スキーママークアップの拡張** → FAQスキーマ、プロダクトレビュースキーマなど

## チェックリスト

ページ更新時の確認項目：

- [ ] `<title>` タグを検索キーワードを含む60文字以下で設定
- [ ] `<meta name="description">` を150-160文字で設定
- [ ] すべての画像に説明的な `alt` 属性を付与
- [ ] Canonical URL が自身のURLになっている
- [ ] 見出し階層（H1 → H2 → H3）が正しい
- [ ] 内部リンクのアンカーテキストが記述的（「ここをクリック」ではなく「サービスの流れ」など）
- [ ] robots.txt を更新した場合は Google に再送信
- [ ] sitemap.xml に新しいページを追加（複数ページの場合）

## 関連リソース

- [Google 検索セントラルブログ](https://developers.google.com/search?hl=ja)
- [Schema.org](https://schema.org/) - 構造化データの標準
- [Vercel Analytics](/docs/analytics) - ページ閲覧状況の追跡
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
