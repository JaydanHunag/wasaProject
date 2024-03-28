在這次的測驗中我將功能分成三個區塊

App.vue ： 更換頁面的字體顏色、背景顏色

HomeView.vue : 輸入 input 類型 利用 prop 來觸發相對應的 input DOM 或是 select DOM ,
將最終結果顯示在畫面上。

AboutView.vue : 串接 randomUserAPI ， 使用 Bootstrap Table 將部分資料顯示在畫面上

元件部分：

InputSelector.vue ： 根據 prop 得來的 inputType ， 判斷顯示的 DOM 為何 ， 並且將內容透過 emit，
發送到 HomeView，在透過 v-model 顯示結果到頁面上

tableUser.vue : 製作 Table

這次的 Project 中並沒有使用 Vuex，Pinia 等狀態管理工具
不過將這些元件拆分開來，在維護上也較為直觀，程式碼也不會過度冗長
