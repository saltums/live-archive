# ライブハウスとバンドの記録（公開サイト）

GitHub Pages に置く公開サイト。設計は `system-map/設計_公開サイト.md`。

- `index.html` … トップ・地図・会場・アーティスト・公演。開くたびに共通DB の `pub_snapshot()` を読む（組み立て不要。DB を直せばすぐ反映）
- `config.js` … Supabase の URL と公開用の鍵（publishable key）
- `artists/<slug>/` … 公開段階 full のバンドの詳しいページ。`python -I -X utf8 public-site/tools/build.py` で共通DB から組み立てる
- 何を公開するかは共通DB 側で決める：出どころの `arc_sources.is_public`、出演者の `arc_artists.publish`（full / simple / name）

## 名古屋ライブアーカイブ（地図、map.html）

- 新栄と鶴舞の街を斜め俯瞰で見せる Three.js の地図。公演があった夜のハコの窓が光り、年のつまみで年を動かす。扉を押すと `index.html#venue-<番号>` へ（ハコのページは夜の配色になる）
- 街並みは OpenStreetMap（© OpenStreetMap contributors）。`town/osm/` に取ったものを `python -I -X utf8 public-site/tools/build_town.py` で `town/town.json` に。ハコの位置・開店閉店もこのスクリプトの VENUES に書く
- 公開の地図は共通DB の `pub_snapshot()` と `town/nights.json`（地図のハコの全公演。台帳の分を含む。2026-11-17 に「知り合いにしか見せないので入れてよい」と決めた）を読む。`python -I -X utf8 venue-ledger/tools/build_town_private.py` が nights.json と関係者用（Claude の中のページ）の両方を作る
- nights.json の出演は `acts`（[組の番号, 表示名] の表）への番号。`pages` は専用ページのある組（公開段階 full で slug のある組 → `artists/<slug>/`）、`alias` はほかの呼び名
- 外からのリンク: `map.html?d=2016-05-22&v=crr&a=1263`（日付・ハコの key・組の番号。どれも省ける）。バンドのページ（band-sites/kit/build_site.py）は、地図にあるハコでの出演に「この夜の街を見る」を付ける
- `bands.html`（バンドの棚）… 街の地図と並ぶ、組の側の入口。`town/nights.json` から組ごとの足あと（年ごとの帯）を数える。専用ページのある組（pages）は上にカードで出る。地図の「組・さがす」から行ける
