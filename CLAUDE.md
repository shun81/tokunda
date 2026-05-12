# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost)
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Architecture

**Stack:** React 19 + Vite 7, plain JavaScript (JSX), CSS with CSS variables. No TypeScript, no state management library, no routing (single page).

**Entry points:** `index.html` → `src/main.jsx` → `src/App.jsx`

**Section composition in App.jsx** (top to bottom):
`Header` → `Hero` → `Problem` → `DailyCorrection` → `Solution` → `ServiceDetails` → `DemoVideo` → `Flow` → `Pricing` → `TrialFlow` → `CTA` → `Footer`

Each component lives in `src/components/` with a paired CSS file (e.g., `Header.jsx` + `Header.css`). Global design tokens (colors, spacing, typography, shared button/card classes, animations) are defined in `src/index.css`.

**CSS variables (defined in `index.css`):**
- Primary: `#F97316` (orange), Secondary: `#1E40AF` (blue), Accent: `#10B981` (green)
- Font: Noto Sans JP (loaded via Google Fonts in `index.html`)
- Shared classes: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-line`, `.btn-large`, `.card`
- Animations: `fadeInUp`, `float`, `pulse`

**Static assets:** `public/assets/` — logo, images, and how-to video (MP4/MOV). Reference them as `/assets/filename` in JSX.

**Deployment:** Vercel (`.vercel/` config present). Build output is `/dist`.

## Development Rules

## 🔴 CRITICAL: パスのハードコード禁止ルール

ユーザー固有の絶対パス（`/Users/shunishii/...`）を直接コードに書かない。

```python
# ✅ 正しい（自分の場所から辿る）
POSTS_DIR = Path(__file__).parent / "posts"

# ❌ 禁止
POSTS_DIR = Path("/Users/shunishii/For_AI/X_autopost_fullhatch/posts")
```

---

## 🔴 CRITICAL: べき等性（二重投稿防止）の確保

**二段階書き込みプロトコルが唯一の冪等性ガード。順序を絶対に変えてはいけない。**

```python
# Phase 1: API を呼ぶ「前」に posting に変更（ファイルロック内）
update_entry_status(POSTS_FILE, "pending", "posting")

# Phase 2: 成功後に posted へ（ここでクラッシュしても次回は posting を見て停止）
tweet_id = post_content(entry)
update_entry_status(POSTS_FILE, "posting", "posted", tweet_id=tweet_id, ...)
```

`posting` エントリが存在する場合は `find_next_entry()` が `None` を返し、次の実行も投稿しない。
自動でリセットしない（リセットすると二重投稿リスクが生じる）。手動でX上を確認後に修正する。

---

## 🔴 CRITICAL: 外部APIにはタイムアウトを必ず設定する

```python
# ✅ 正しい
response = requests.post(url, timeout=30)

# ❌ 禁止
response = requests.post(url)
```

動画処理待ちのポーリングには最大待機時間（例: 120秒）を設定し、超過したら例外を投げる。

---

## 🔴 CRITICAL: サイレント失敗の禁止

```python
# ✅ 正しい
try:
    post_tweet(content)
except Exception as e:
    log(f"❌ 投稿失敗: {e}")
    raise  # cronのexit codeを非0にする

# ❌ 禁止
except Exception:
    pass
```

---

## 🟡 設定値はコードに埋め込まない（Config管理）

ログ保存日数・cron時刻・最大画像枚数などは `config.yaml` に分離する。

---

## 🟡 DataClass + バリデーションでプリミティブ型執着を避ける

```python
@dataclass
class PostContent:
    folder: Path
    images: list[Path]
    videos: list[Path]
    tweet_text: str
    post_type: str = field(init=False)

    def __post_init__(self):
        if len(self.images) > 4:
            log(f"WARNING: 画像は最大4枚。最初の4枚のみ使用します。")
            self.images = self.images[:4]
        self.post_type = _determine_post_type(self.images, self.videos)
```

---

## 🟡 説明変数で複雑な条件を明示する

```python
# ✅
has_images = len(image_files) > 0
has_video = len(video_files) > 0
is_text_only = not has_images and not has_video
```

---

## 🟡 ログの自動クリーニング（30日ルール）

`cron.log` が無制限に増えないよう、起動時に30日超のログをローテーションする。

---

## 🟢 依存ライブラリを追加したら requirements.txt を必ず更新する

新しいライブラリを `pip install` したら即座に `requirements.txt` へ追記する。

---

## 🟢 AI共創型エンジニアリング

### Plan Mode（計画優先）

複雑な変更・新機能追加では `/plan` や `EnterPlanMode` で計画を先に提示し、合意後に実装する。

### 検証フィードバックループ（AI-TDD）

```
1. 人間: 「投稿済みフォルダはスキップされることをテストして」
2. AI: テストコードを書く → 実行 → 失敗なら修正 → 通るまで繰り返す
3. 人間: 最終的なテスト結果を確認して承認する
```

### Task Diary（知識の資産化）

セッション終了時に遭遇したX API の制約・罠を `~/.claude/projects/.../memory/` に記録する。

例: X API v2 の動画アップロードは `processing_info.state` が `"succeeded"` になるまでポーリングが必要（`"failed"` になったら即例外）。

---

## Key Content Notes

- Target audience: Japanese parents of elementary school students preparing for middle school entrance exams (中学受験)
- Service: LINE-based daily math assignment correction service ("とくんだ")
- Pricing: Standard ¥15,000/mo, Premium ¥20,000/mo; both offer a 3-day trial for ¥1,500
- CTA buttons link to the LINE official account
- Mobile breakpoint: 768px; Header has a hamburger menu with `useState` for open/close
