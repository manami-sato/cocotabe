# cocotabe

### 作者
佐藤真奈実
### アプリ名
ここたべ

#### コンセプト
現在地周辺のお店探しに特化したアプリ

#### こだわったポイント
調べてすぐに向かうUXを想定し、地図の表示のしやすさや電話のしやすさ（APIに電話番号がなかったので発信はできません）を目標にしました。

### 公開したアプリのURL
https://click.ecc.ac.jp/ecc/msatou/cocotabe/

### 該当プロジェクトのリポジトリURL
https://github.com/manami-sato/cocotabe

## 開発環境
### 開発環境
Visual Studio Code

### 開発言語
JavaScript

## 動作対象端末・OS
### 動作対応OS
iOS

## 開発期間
日間

## アプリケーション機能

### 機能一覧
- レストラン検索：ホットペッパーグルメサーチAPIを用い、現在地周辺の飲食店を検索する。
- レストラン情報取得：ホットペッパーグルメサーチAPIを用い、飲食店の詳細情報を取得する。
- 地図アプリ連携：現在地をアプリ内の地図上で表示する。また、飲食店の所在地をアプリ内の地図上で表示し、地図アプリを開いて道を検索できる。
- お気に入り登録：行きたいお店をお気に入りに登録し、画面を閉じた後も残る。

### 画面一覧
- 検索画面：条件を指定してレストランを検索する。
- 一覧画面：検索結果の飲食店を一覧表示する。
- 詳細画面：飲食店の詳細を表示する。
- お気に入り画面：お気に入り登録した飲食店を確認できる。

### 使用しているAPI,SDK,ライブラリなど
- API：ホットペッパーグルメサーチAPI、Google Maps Platform
- フレームワーク：Vue.js

### アドバイスしていただきたいポイント


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
