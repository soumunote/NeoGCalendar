# NeoGCalendar
desknet's NEO (以下 NEO) Calendar から Google Calendar へスケジュールを転送する。  

## アプリケーションの概要
### 利用条件
- desknet's 
  * NEO V6.0 R1.0 
  * Windows 
  * PostgreSQL 9.6
### 準備
1. NEO の個人と Google Account を対応付ける為のデータベースを準備
   1. NEO の「管理者メニュー設定/オプションメニュー設定」に他アプリへのURLを設定する機能がある。  
      ここで、$UID =>「ログインID」、 $PWD=>「パスワード」を送る機能がある  
   2. 上記機能により一旦、本アプリで「ログインID」「パスワード」を受け取る  
      (本来なら OAuth2 等を使って、秘匿情報は受け取らないべきなのだが、NEOにその機能が無い)  
   3. 上記秘匿情報にて、NEO へのログインを試みて、OKなら、処理を続行  
      NGなら、不正アクセスと判断し、処理を中止する。  
      NEOへのログイン方法  
      ```
      POST http://(NEOサーバのアドレス)/scripts/dneo/dneor.exe/certify/
      Content-Type: application/x-www-form-urlencoded
      Accept: application/json

      cmd=certify&UserID=(ログインID)&_word=(パスワード)
      ```
      NEOからの成功レスポンス例  
      ```
      HTTP/1.1 200 OK
      Content-Type: application/json; charset=utf-8

      {
        "status": "ok",
        "rssid": "...",
        "STOKEN": "...",
        "Name": "...",
        "id": "(NEOデータベース内のユーザID)",
        "Group": "8",
        "Mail": "...",
        "UserID": "(ユーザID)"
      }
      ```
   4. NEOへの認証がOKなら、OAuth2 による認証を開始する旨、画面表示を行う
   5. Google への OAuth2 が完了したら access_token が取得できるので、本アプリにて保管を行う

### スケジュール処理
#### access_token の管理
- Google の access_token は期限が1年になっているようなので、満了1月前から週1で満了する旨の警告メールを送信する  
- access_token が満了したら、退職 or 使用中止とみなして、データを破棄する
#### スケジュールの転送
- 10分間隔程度でスケジュールを転送する

## 開発バック知識
### express
[Express application generator](http://expressjs.com/en/starter/generator.html) を使用した
