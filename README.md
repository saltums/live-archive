# ライブハウスとバンドの記録（公開サイト）

GitHub Pages に置く公開サイト。設計は `system-map/設計_公開サイト.md`。

- `index.html` … トップ・地図・会場・アーティスト・公演。開くたびに共通DB の `pub_snapshot()` を読む（組み立て不要。DB を直せばすぐ反映）
- `config.js` … Supabase の URL と公開用の鍵（publishable key）
- `artists/<slug>/` … 公開段階 full のバンドの詳しいページ。`python -I -X utf8 public-site/tools/build.py` で共通DB から組み立てる
- 何を公開するかは共通DB 側で決める：出どころの `arc_sources.is_public`、出演者の `arc_artists.publish`（full / simple / name）
