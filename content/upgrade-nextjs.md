---
title: "Next.js 14 から 16 へアップグレードした"
date: 2026-04-20
image: "/images/eyecatch-next-upgrade.png"
description: "このブログを Next.js 14 から 16 にアップグレードしました。ついでに TypeScript 全面化と Cache Components の導入まで一気にやった記録です。"
tags: ["Next.js", "React", "TypeScript", "upgrade"]
---

## アップグレードした動機

このブログは Next.js 14 で作って<br>
運用してきたのですが、<br>
ついに Next.js 16 が出たので、<br>
勉強も兼ねてアップグレードすることにしました。

せっかくなので、モダンな機能も取り入れたい。<br>
具体的には Server Components の使い方を<br>
もう少し整理して、<br>
新しい Cache Components の仕組みも<br>
試してみたいなと。

ついでに、ずっと気になっていた<br>
JavaScript と TypeScript の混在状態も<br>
この機会に TypeScript に統一することにしました。

## 事前準備として掃除から

いきなりアップグレードするのではなく、<br>
まずは掃除から始めました。

`package.json` を見直したら、<br>
`axios`、`react-markdown`、`image-size`、<br>
`unist-util-visit` は、<br>
実は import している場所が<br>
一つもない状態でした。<br>
これらをまとめて削除。

また `jsconfig.json` と `tsconfig.json` が<br>
両方存在していたので、<br>
パスエイリアスを `tsconfig.json` に寄せて<br>
`jsconfig.json` は削除。

こういう地味な掃除を先にやっておくと、<br>
アップグレード後のトラブルが減るはずです。

## 本体のアップグレード

ここからが本番。<br>
Next.js 公式の codemod を使うと、<br>
破壊的変更の大部分を自動で変換してくれます。

```
npx @next/codemod@canary upgrade latest
```

このコマンド一つで、<br>
`next`、`react`、`react-dom` が最新に上がります。<br>
加えて、Next.js 16 の大きな変更点である<br>
「params が Promise になる」というやつも<br>
別の codemod で一括変換できました。

`next lint` コマンドも廃止されたので、<br>
こちらも codemod で ESLint CLI に移行。<br>
Flat Config に切り替わります。

## TypeScript への全面移行

小規模プロジェクトなので、<br>
ファイルを一気に `.ts` / `.tsx` にリネームする<br>
ビッグバン方式で移行しました。

全 18 ファイルを `git mv` でリネームしつつ、<br>
各コンポーネントに props の型を付与。<br>
`tsconfig.json` は `strict: true` に変更。

記事データの型として `Post` と `PostFrontmatter` を<br>
共通の場所に定義して、<br>
複数のコンポーネントから import する形に整理しました。

Next.js 16 からは `next typegen` で<br>
`PageProps<"/blog/[slug]">` のようなルート型を<br>
自動生成してくれるので、<br>
params の型付けもすごく楽でした。

## Cache Components で PPR を実現

Next.js 16 の目玉機能である<br>
Cache Components も試してみました。

`next.config.mjs` で `cacheComponents: true` を有効にし、<br>
キャッシュしたい関数に `"use cache"` ディレクティブを<br>
付けていくだけ。

結果、`/blog/[slug]` のページが<br>
動的レンダリングから PPR (Partial Prerendering) に変わり、<br>
全記事がビルド時に<br>
プリレンダリングされるようになりました。

`/projects` の GitHub API フェッチも<br>
`cacheLife("hours")` で 1 時間キャッシュに。<br>
これで GitHub のレート制限も気にしなくて済みます。

明示的にオプトインする新しいキャッシュモデル、<br>
個人的にはとても分かりやすくて好みです。<br>
最後まで読んでいただきありがとうございます。
