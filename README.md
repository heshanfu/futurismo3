# Futurismo

Tsunemichi Harada（[tsu-nera](https://twitter.com/tsu_nera）)のブログです。

このサイトは、[GatsbyJS](https://next.gatsbyjs.org/)で作成し、 [Netlify](https://www.netlify.com/)にホスティングしています。

ブログとボートフォリオサイトの２つのサイトを１つのドメインで運営しています。

- blog: https://futurismo.biz
- portfolio: https://futurismo.biz/profile

## CI/CDによるアジャイルなブログ記事作成

アジャイルなアプローチで、ブログ記事を作成します。
また、継続的インテグレーション・継続的デリバリをブログ執筆に導入します。

### TL;DR

まずは、概要を紹介します。

- GitHubで記事のissueを作成
- topic branch作成（posts/xxxx-xxxx）
- topic branchからマスタbranchにpull-requestを立てる
- Git commit & Git pushを小さく繰り返して執筆を進める
- GitHubにpushされるたび、Circle CIとNetlifyでビルド & テストを実施
  - textlint
  - prh
  - markdownlint
  - codecov
  - gatsby build
  - （Netlify Previewも裏で動く）
- GitHubのProtect branches機能を設定し、マスタbranchへのマージ可能状態を、次の条件がそろったときとする。
  - CirclCIの結果OK
  - Netlify Deploy Preview画面チェックOK
  - Netlify gatsby build OK
- serverlessのpost-schedulerによって、投稿のスケジューリングをする。
- 投稿の時間になると、post-schedulerがPRのacceptとマスタbranchへのmerge
- Netlifyがmargeをtriggerにしてデプロイ開始
- サイト公開される
- GitHub issue閉じる
- topic branchのクローズ
- slackに完了通知

### 使っている技術・ツール・サービスの紹介

- Markdown ... 見やすい記法
- Visual Studio Code ... 高機能エディタ、ここではMarkdown IDE
- GatsbyJS ... 世界最速のReact製な静的サイトジェネレータ
- Git ... バージョン管理ツール
- GitHub ... ソースコードのホスティングサーバ
- Netlify ... 静的サイトのホスティングサーバ
- CircleCI ... 継続的インテグレーションを行うための高機能cron
- textlint/markdownlint ... 表記や構文のチェックを行うツール
- codecov ... カバレッチ計測サービス
- serverless ... サーバレースサービス、よく分かっていない
- slack ... チャットツール

### 文章執筆IDEとしての Visual Studio Code

Visual Studio Codeを文章執筆のための統合開発環境IDEとして扱います。

プラグインを入れることで、強力なMarkdownの執筆支援が可能です。

- Markdown記法のハイライト
- Markdownリアルタイムプレビュー
- textlint/markdownlintによる静的解析
- Git Integration

### GitHub Flow

GitHub Flowに従った執筆を実施します。

- [GitHub Flow \(Japanese translation\)](https://gist.github.com/Gab-km/3705015)
- [GitHub Flow 図解 \- Qiita](https://qiita.com/tbpgr/items/4ff76ef35c4ff0ec8314)

具体的には、次のとおり。

- Issueを立てる、branchを切る
- pull-requestをなげる
- commitとpushを小さく繰り返す
- レビューとビルド、テストが通ったらmerge
- branchとIssueを閉じる

### Linting Tools

textlintとMarkdownLintを利用しています。

- [作文界のゲームチェンジャー！ 日本語の文章校正ツールのtextlintを試した](https://futurismo.biz/use-textlint-for-markdown/)
- [markdownlintをつかって、Markdownファイルの構文チェックを行う](https://futurismo.biz/use-textlint-for-markdown/)

Lintingからのフィードバックはユニットテストに相当します。

### 継続的インテグレーション（CI）

GitHubにpushされるたび、ビルドとテストを実施します。

- build == yarn install/gatsby build
- test == textlint/markdownlint

ここでは、Circle CIとNetlifyの２つのサービスを利用します。どちらも、 GitHubにpushされたことをトリガにして、動作します。

- [CircleCI](https://circleci.com/) ... yarn install/textlint/markdownlint Markdownのビルド
- [Netlify](https://www.netlify.com/) ... gatsby build JavaScriptのビルド/画面プレビュー

また、[codecov](https://codecov.io/)というカバレッジ計測ツールと連携させることで、カバレッジを計測できます。

- 参考: [textlintで文章カバレッジレポートを継続的に見ていく \| Web Scratch](https://efcl.info/2016/01/12/textlint-coverage/)

### 継続的デリバリ（CD）

レビュー、テスト、ビルドの３つがOKであれば、 記事branchからマスタbranchにmargeします。

ここでは、GitHubのProtected Branches機能によって、
NetlifyとCircleCIの両方がOKでないとmarge禁止というルールを設定します。
1人記事執筆なのでレビュアーいないため、CircleCIとNetlifyが番人となります。

- [GitHub \+ Jenkins で、全てのプルリクエストに対してレビューとテストを必須にする \- Qiita](https://qiita.com/bonotake/items/37fb3194c33f3ae3bbf0)

### 投稿のスケジューリング

この段階まできたら、記事branchはマスタbranchへいつでもmerge可能、デプロイ可能となっています。
なので記事の予約投稿を設定することによって、適切なタイミングで記事を公開します。
予約投稿には、[serverless](https://serverless.com/)というサービスを使います。

- [How To Schedule Posts for Static Site Generators \(Jekyll, Hugo, Phenomic etc\.\)](https://serverless.com/blog/static-site-post-scheduler/)

ついでに、Twitterの予約投稿もしかけます。

投稿の時間になると、serverlessがPRのacceptとマスタbranchへのmergeを実施します。
マスタbranchへのcommitをトリガにしてNetlifyが動作して、本番環境に記事をデプロイします。

あとは、branchとissueを削除して、slackにデプロイ完了の通知がくるのを待ちます。

めでたし、めでたし。

### Reference and Many Thanks

- [オンラインドキュメントへCI/CDを適用している話](https://www.slideshare.net/iwashi86/cicd-86801443)
- [Githubで書く電子書籍](http://azu.github.io/slide/individual/)
- [Introduction \| 技術文書をソフトウェア開発する話](https://azu.gitbooks.io/nodefest-technical-writing/content/)
- [一人で使えるGithub Issue](http://azu.github.io/slide/udonjs/github-issue.html)

## Badges

[![CircleCI](https://circleci.com/gh/tsu-nera/futurismo3/tree/master.svg?style=svg)](https://circleci.com/gh/tsu-nera/futurismo3)

[![codecov](https://codecov.io/gh/tsu-nera/futurismo3/branch/master/graph/badge.svg)](https://codecov.io/gh/tsu-nera/futurismo3)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tsu-nera/futurismo3)
