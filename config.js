// 公開サイトの設定。共通DB（Supabase various_apps）の公開用の窓口 pub_snapshot() を匿名で読む。
// ここにある鍵は「公開してよい」鍵（publishable key）。読めるのは pub_snapshot() が返す公開分だけ。
window.SITE_CONFIG = {
  supabaseUrl: "https://bcxwfosythkuwdmkwkkj.supabase.co",
  publishableKey: "sb_publishable_M1RuhvoQzl7D6To4FR2NYQ_LvNnA5bW",
  sixdogArchive: "https://saltums.github.io/six-dog/",
};
