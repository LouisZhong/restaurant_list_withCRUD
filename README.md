# 餐廳清單website
使用node.js + express + handlebars搭設地方餐廳查詢平台，彙整各式各類餐廳資訊，包含餐廳類型、餐廳圖片簡覽、餐廳評比、詳細資料...等

## 專案畫面
![image](https://github.com/LouisZhong/restaurant_list/blob/main/public/img/cover.PNG)

## 環境建置與需求

- [Visual Studio code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## 專案安裝流程
1.開啟終端機(Terminal) Clone本專案至本機電腦:
```
https://github.com/LouisZhong/restaurant_list.git
```

2.進入專案資料夾
```
cd restaurant_list
```

3.依序安裝npm、Express、Handlebars、Modemon
```
npm install
```
```
npm install express@4.18.2
```
```
npm install express-handlebars@6.0.6
```
```
npm install -g nodemon
```

4.啟動伺服器
```
npm run dev
```
當終端機顯示"Express is listening on localhost:3000"，代表啟動成功，即可在瀏覽器輸入http://localhost:3000  開始瀏覽網頁


## 網站功能

- 卡片式簡覽地方餐廳，包含餐廳名稱、外觀、評比
- 可快速搜尋餐廳名字
- 點選後，可瀏覽餐廳詳細資料
