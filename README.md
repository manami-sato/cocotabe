# cocotabe

## アプリ名
ここたべ

## 対象OSおよびブラウザ(ver.含む)
- Google Chrome
- PHP Version 8.0.8

## 開発環境/言語

### 開発環境
- Visual Studio Code
- PHPにsimpleXMLがインストールされている。

### 開発言語
JavaScript

## 開発期間
15日間

## 機能一覧/画面一覧

### 機能一覧
- レストラン検索：ホットペッパーグルメサーチAPIを用い、現在地周辺の飲食店を検索する。現在地からの半径を変更可能、他検索条件を指定可能。
- レストラン情報取得：ホットペッパーグルメサーチAPIを用い、飲食店の詳細情報を取得する。
- 地図アプリ連携：現在地をアプリ内の地図上で表示する。また、地図アプリを開いて道を検索できる。
- お気に入り登録：行きたいお店をお気に入りに登録し、画面を閉じた後も残る。

### 画面一覧
- 検索画面：条件を指定してレストランを検索する。
- 一覧画面：検索結果の飲食店を一覧表示する。
- 詳細画面：飲食店の詳細を表示する。
- お気に入り画面：お気に入り登録した飲食店を確認できる。

## 使用しているAPI, フレームワーク
- API：ホットペッパーグルメサーチAPI、Google Maps Platform
- フレームワーク：Vue.js(vue 2.6.14, vue/cli 4.3.0)

## コンセプト
現在地周辺のお店探しに特化したアプリ

## こだわったポイント
P必要と考えた機能を実装する項目のため、お気に入り機能を実装しました。

## デザイン面でこだわったポイント
調べてすぐに向かうUXを想定し、地図の表示を通じて場所の認識のしやすさや、電話のしやすさ（APIに電話番号がなかったので発信はできません）を意識しました。

## アドバイスしていただきたいポイント
実際の業務上で、他の方に読んでいただきやすいコードを書くために意識する内容をアドバイスいただきたいです。
今後のチームおよび個人開発に活かしてまいります。

## 不具合など
PHPファイルを学校のサーバー（PHP Version 7.4.16）にアップロードしてお送りする予定でしたが、PHPでXML形式をJSON形式に変換するSimpleXMLをVersion 7.4.16ではサポートしていなかったため、
ローカルサーバー（PHP Version 8.0.8）上で動作確認済みのものを提出いたします。
また、Google Maps Platformはローカルサーバーでは動作していません（本番環境で動作確認済みです）。

## 自己評価
慣れない部分が多くありましたが、動くものを完成させられたのでよかったです。

## 該当プロジェクトのリポジトリURL
https://github.com/manami-sato/cocotabe

## project setup

### node_modulsのインストール

```
npm install
```

### .envに環境変数の作成

```
VUE_APP_APIKEY_HOTPEPPER=ホットペッパーグルメサーチAPIのAPI Key
VUE_APP_APIKEY_GOOGLEMAP=Google Maps PlatformのAPI Key
```

### PHPの読み込み

```
src/assets/php/cocotabe.phpを
src/assets/mixins/Mixin.vueのproductsDataに入れる
```

### ローカルサーバーを立てる

```
npm run serve
```

### buildする

```
npm run build
```