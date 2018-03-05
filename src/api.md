# 有借接口文档

[TOC]

### 商品类别

* 电子设备[1]
* 书籍资料[2]
* 宿舍百货[3]
* 乐器[4]
* 门票卡劵[5]
* 美妆护肤[6]
* 女装[7]
* 男装[8]
* 鞋帽配饰[9]
* 代步工具[10]
* 户外运动[11]
* 其他[12]

### 状态码

* 2200 - 成功
* 3302 - 未登录
* 3303 - 用户未认证
* 4400 - 参数错误
* 5500 - 服务错误

### 地址

* https://youjie.hustonline.net/api/v1/
* 上传数据格式: form-data
* 返回数据格式: json

### 图片

* 所有的图片以绝对地址返回**https://youjie.hustonline.net/photo/xxxx.png**

### 说明

* **所有涉及次数的如果我没有返回该字段说明用户或者商品未产生任何行为或者我还没有汇总数据, 可以设置为０或者是１**

## 商品页



### 首页

* url: https://youjie.hustonline.net/api/v1/commodity/

* method: GET

* parameters:

  ```json
  {
   	"type": int,
    	"category": int,
      "address": string,
      "label": int,
    	"pages": int
  }
  ```

  **type: 出租-1, 求租-2**

  **category: 类别参照上面的表**

  **address: 寻求那栋楼的**

  **label分别对应上面的搜索要求, 最新-1, 最近-2, 最热-3, 最贵-4**

  **pages, 从1开始**

* response:

  ```json
  {
    "status": 2200,
    "data": [{
      "_id": string,
      "type": string, // 出租的商品"1", 求租的商品"2"
      "title": string,
      "description": string,
      "price": string, //价格
      "address": string,
      "pub_time": string,　// 发布时间, 时间戳(int)
  }
  ```


* example:

  ```json
  {
      "status": 2200,
      "data": [
          {
              "pub_time": 1514099180177,
              "description": "来来来",
              "title": "自行车出租",
              "pictures": [
                  "https://youjie.hustonline.net/photo/f1ce3fce-e878-11e7-8fb5-0242ac140004.png",
                  "https://youjie.hustonline.net/photo/f1f60752-e878-11e7-8fb5-0242ac140004.png",
                  "https://youjie.hustonline.net/photo/f21f9298-e878-11e7-a29a-0242ac140004.png"
              ],
              "price": "10",
              "address": "韵苑|16栋",
              "_id": "5a3f51ec623bda00198c381c",
              "type": "1"
          }
      ]
  }
  ```



### 发布页

* url: https://youjie.hustonline.net/api/v1/commodity/pub

* method: POST

* parameters:

  ```json
  {
   	"_id": "",
      "type": "",
      "title": "",
      "description": "",
      "price": "",
      "category": "",
      "is_deal": "",
      "origin_price": "",
      "sell_price": "",
      "contact_way": ""
  }
  ```

  **_id是用户后面的编辑操作, _id是商品的编号. id默认填写1(前端填写)**

  **is_deal 为1是不买或不卖**

* response:

  ```json
  {
      "status": 200,
    	"data": {
          "_id": ""
      }
  }
  ```


### 图片接口

* url: https://youjie.hustonline.net/api/v1/commodity/photo

* method: POST

* parameters:

  ```json
  {
      "pictures": [], // 第一次传递图片的时候, 如果没有图片传空数组
      "_id": "",
      "pictures": file
  }
  ```

* response:

  ```json
  {
   	"status": 200,
    	"data": {
          "pictures": [],
          "_id": ""
      }
  }
  ```



### 详情页

#### 商品详情

* url: https://youjie.hustonline.net/api/v1/commodity/detail

* method: GET

* parameters

  ```json
  {
      "_id": ""
  }
  ```

* response:

  ```json
  {
    "status": 200,
    "data": [{
      "_id": string,
      "type": string, // 出租的商品1, 求租的商品2
      "title": string,
      "description": string,
      "price": string, //价格
      "category": string,
      "is_deal": string, //是否可买或者可卖 1-不可买或者不可卖, 2-可买或者可卖
      "origin_price": string,
      "sell_price": string,
      "contact_way": string,
      "address": string,
      "pub_time": int,　// 发布时间, 时间戳(int)
      "num_of_view": int,
      "num_of_collect": int,
      "num_of_like": int,
      "num_of_rent": int,
      "pictures": [],
      "is_like": int,
      "is_collect": int
  }
  ```

  **is_like 0表示不喜欢, 1表示喜欢**

  **is_collect 0表示不收藏, 1表示收藏**

* example

  ```json
  {
      "status": 2200,
      "data": {
          "is_collect": 1,
          "category": 1,
          "num_of_like": 1,
          "is_deal": "1",
          "contact_way": "123456789",
          "is_like": 1,
          "title": "测试商品",
          "num_of_view": 7,
          "sell_price": "15",
          "hot": 0,
          "type": "1",
          "num_of_collect": 1,
          "status": 0,
          "description": "测试出租商品",
          "user_status": 1,
          "price": "10",
          "pub_time": 1518167187612,
          "address": "韵苑5栋",
          "_id": "5a7d6493623bda0021b0351a",
          "origin_price": "20",
          "num_of_rent": 0
      }
  }
  ```

#### 收藏

* url: https://youjie.hustonline.net/api/v1/commodity/collect

* method: POST

* parameters:

  ```json
  {
      "_id": ""
  }
  ```

* response

  ```json
  {
      "status": 200,
    	"data": "成功"
  }
  ```



#### 喜欢

* url: https://youjie.hustonline.net/api/v1/commodity/like

* method: POST

* parameters:

  ```json
  {
      "_id": ""
  }
  ```

* response

  ```json
  {
      "status": 200,
    	"data": "成功"
  }
  ```



#### 想买

* url:  https://youjie.hustonline.net/api/v1/commodity/buy

* method: POST

* parameters:

  ```json
  {
      "_id": ""
  }
  ```
  **type是商品的标识, 是出租商品还是求租商品**

* response:

  ```json
  {
      "status": 200,
      "data": "ok"
  }
  ```


#### 分享

- url: https://youjie.hustonline.net/api/v1/commodity/share

- method: POST

- parameters:

  ```json
  {
      "_id": ""
  }
  ```

- response:

  ```json
  {
      "status": 200,
    	"data": ""
  }
  ```

  **当用户点击分享按钮的时候, 上传此信息**




## 搜索页

### 获取热门搜索

* url: https://youjie.hustonline.net/api/v1/search/hot

* method: GET

* response:

  ```json
  {
      "status": 200,
    	"data": [
          "自行车",
          "电脑",
  		"吹风机"
      ]
  }
  ```


### 搜索商品

* url: https://youjie.hustonline.net/api/v1/search/

* method: POST

* parameters:

  ```json
  {
      "content": ""
  }
  ```

* response:

  ```json
  {
     "status": 200,
     "data": [{
          "_id": string, //商品的id
      	"type": string, // 出租的商品-1, 求租的商品-2
      	"title": string,
      	"description": string,
      	"price": string, //价格
      	"category": string,
      	"is_deal": string, //是否可买或者可卖 1-不可买或者不可卖, 2-可买或者可卖
      	"origin_price": string,
      	"sell_price": string,
      	"contact_way": string,
      	"address": string,
      	"pub_time": int,　// 发布时间, 时间戳(int)
      	"num_of_view": int,
      	"num_of_collect": int,
      	"num_of_like": int,
      	"num_of_rent": int,
      	"pictures": []
  	}, {}]
  }
  ```

* example

  ```json
  {
      "status": 2200,
      "data": [
          {
              "category": "1",
              "status": 0,
              "is_deal": 2,
              "contact_way": "simoe97",
              "type": "1",
              "description": "华科最美丽的女子的二手口红，只卖女生哦",
              "order_time": "2017-12-19 19:32:52",
              "title": "张晓萌的口红",
              "pictures": [
                  "https://youjie.hustonline.net/photo/596921ca-e4b0-11e7-bf7d-0242ac140004.png",
                  "https://youjie.hustonline.net/photo/59693d72-e4b0-11e7-bf7d-0242ac140004.png"
              ],
              "price": 100,
              "num_of_view": 4,
              "sell_price": "100",
              "hot": 0,
              "pub_time": 1513683172354,
              "address": "韵苑23栋",
              "_id": "5a38f8e4623bda0019f418f6",
              "origin_price": "200"
          }
      ]
  }
  ```




## 用户页

### 个人主页

* url: https://youjie.hustonline.net/api/v1/user

* method: GET

* response: 

  ```json
  {
    "status": 200,
    "data": {
        "_id": string,
        "nick_name": string,
        "avatar_url": string,
        "status": string,
        "address": string,
        "money": int,
        "num_of_pub": int,
        "num_of_view": int,
        "num_of_collect": int,
        "num_of_rent": int
    }
  }
  ```

  **返回的内容中可能没有num_of_collect等有关数据统计的字段, 因为应用不是实时的, 前端需要做好判断**

  **status为1时未认证, 3时已经认证, 2正在验证中**

### 获取个人信息

* url: https://youjie.hustonline.net/api/v1/user/get_personal_information

* method: GET

* response:

  ```json
  {
      "status": 200,
      "data": {
          "college": string, 
      	"class": string,
      	"address": string,
      	"contact_way": string,
      	"status": int
      }
  }
  ```

  **status: 1是未认证, 2是已认证**. 有的字段没有出现请自行处理

### 编辑个人信息

* path: https://youjie.hustonline.net/api/v1/user/update_personal_information

* method: POST

* parameters:

  ```json
  {
      "college": "", 
      "class": "",
      "address": "",
      "contact_way": ""
  }
  ```

* response:

  ```json
  {
  	"status": 200,
      "data": "ok"
  }
  ```


### 个人认证

* url: https://youjie.hustonline.net/api/v1/user/personal_verify

* method: POST

* parameters:

  ```json
  {
      "name": string,
    	"card_type": int,
    	"card_number": int,
    	"picture": file
  }
  ```

* response

  ```json
  {
      "status": 200,
    	"data": "ok"
  }
  ```

### 我发布的

* url: https://youjie.hustonline.net/api/v1/user/pub

* method: GET

* response: 

  ```json
  {
     "status": 200,
     "data": [{
          "_id": string,
      	"type": string, // 出租的商品1, 求租的商品2
      	"title": string,
      	"description": string,
      	"price": string, //价格
      	"category": string,
      	"is_deal": string, //是否可买或者可卖 1-不可买或者不可卖, 2-可买或者可卖
      	"origin_price": string,
      	"sell_price": string,
      	"contact_way": string,
      	"address": string,
      	"pub_time": int,　// 发布时间, 时间戳(int)
      	"num_of_view": int,
      	"num_of_collect": int,
      	"num_of_like": int,
      	"num_of_rent": int,
      	"pictures": []
  	}, {}]
  }
  ```

​       **返回的内容中可能没有num_of_collect等有关数据统计的字段, 因为应用不是实时的, 前端需要做好判断**

### 我的收藏

* url: https://youjie.hustonline.net/api/v1/user/collect

* method: GET

* response:

  ```json
  {
     "status": 200,
     "data": [{
       	"_id": string
      	"type": string, // 出租的商品1, 求租的商品2
      	"title": string,
      	"description": string,
      	"price": string, //价格
      	"category": string,
      	"is_deal": string, //是否可买或者可卖 1-不可买或者不可卖, 2-可买或者可卖
      	"origin_price": string,
      	"sell_price": string,
      	"contact_way": string,
      	"address": string,
      	"pub_time": int,　// 发布时间, 时间戳(int)
      	"num_of_view": int,
      	"num_of_collect": int,
      	"num_of_like": int,
      	"num_of_rent": int,
      	"pictures": []
  	}, {}]
  }
  ```



### 我租出的

* url: https://youjie.hustonline.net/api/v1/user/sell

* method: GET

* response: 

  ```json
  {
     "status": 200,
     "data": [{
      	"type": string, // 出租的商品1, 求租的商品2
      	"title": string,
      	"description": string,
      	"price": string, //价格
      	"category": string,
      	"is_deal": string, //是否可买或者可卖 1-不可买或者不可卖, 2-可买或者可卖
      	"origin_price": string,
      	"sell_price": string,
      	"contact_way": string,
      	"address": string,
      	"pub_time": int,　// 发布时间, 时间戳(int)
      	"num_of_view": int,
      	"num_of_collect": int,
      	"num_of_like": int,
      	"num_of_rent": int,
      	"pictures": []
  	}, {}]
  }
  ```



### 我想租的

* url: https://youjie.hustonline.net/api/v1/user/buy

* method: GET

* response: 

  ```json
  {
     "status": 200,
     "data": [{
      	"type": string, // 出租的商品1, 求租的商品2
      	"title": string,
      	"description": string,
      	"price": string, //价格
      	"category": string,
      	"is_deal": string, //是否可买或者可卖 1-不可买或者不可卖, 2-可买或者可卖
      	"origin_price": string,
      	"sell_price": string,
      	"contact_way": string,
      	"address": string,
      	"pub_time": int,　// 发布时间, 时间戳(int)
      	"num_of_view": int,
      	"num_of_collect": int,
      	"num_of_like": int,
      	"num_of_rent": int,
      	"pictures": []
  	}, {}]
  }
  ```

### 取消

* url: https://youjie.hustonline.net/api/v1/user/delete

* method: POST

* parameter:

  ```json
  {
      "_id": ""
  }
  ```

* response:

  ```json
  {
      "status": 200,
      "data": "ok"
  }
  ```




## 登录

### 用户登录

* url: https://youjie.hustonline.net/api/v1/login

* method: POST

* parameter:

  ```json
  {
      "code": ""
  }
  ```

* response:

  ```json
  {
      "status": 200,
    	"data": {
          "token": ""
      }
  }
  ```

* **以后每次上传放在header中, 字段名为token**

### 信息上传

* url: https://youjie.hustonline.net/api/v1/upload

* method: POST

* parameters:

  ```json
  {
      "nick_name": "",
    	"avatar_url": ""
  }
  ```

* response:

  ```json
  {
      "status": 200,
    	"data": "ok"
  }
  ```

### 排行榜

### 微信

### 在用户有群进入小程序或者是分享小程序到群中是把群的GID传给我

### 微信群信息上传

* url: https://youjie.hustonline.net/api/v1/rank/upload_gid

* method: POST

* parameters:

  ```json
  {
      "encrypted_data": "",
    	"iv": ""
  }
  ```

* response

  ```json
  {
   	"status": 2200,
    	"data": "成功"
  }
  ```

### 微信排行

* url: https://youjie.hustonline.net/api/v1/rank/wechat

* method: GET

* response:

  ```json
  {
      "status": 200,
    	"data": [{
          "gid": ""
          "wealth_value": ""
      }, {}]
  }
  ```


###楼栋

* url: https://youjie.hustonline.net/api/v1/rank/address

* method: GET

* response: 

  ```json
  {
      "status": 200,
      "data": [{
          "address": "",
          "wealth_value": ""
      }, {}]
  }
  ```
