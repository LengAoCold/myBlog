# dart
## 变量
### 数据类型
1. Number（数值）
    1. int   只能是整数
    2. double   既可以是整数，也可以是浮点
2. String（字符串）
    1. String
3. Boolean（布尔值）
    1. bool
4. List （数组）
    1. List
5. Map （字典）


## 运算符
1. 算数运算符
    1. ~/ （取整）  %（取余）
2. 赋值运算符
    1. 基础赋值运算符
        1. =     ??=
    2. 复合赋值运算符
        1.  +=    -=   *=   /=    %=   ~/=


## 类型转换
1. Number与String之间转换
    1. Number转换String用toString()
    2. String转换Number用int/double.parse()
2. 布尔类型与其他类型
    1. isEmpty 判断字符串是否为空
    2. isNaN  是否是数字


## 常用属性 Or 方法
1. List
    1. 属性
        1. length
        2. reversed 倒序排序
        3. isEmpty  是否为空
        4. isNotEmpty  是否不为空
    2. 方法
        1. add 是新增数组（相当于js中push）不过只能新增一个
        2. addAll  新增多个，拼接数组
        3. indexOf  查询索引值（同js）
        4. remove   删除  传入具体值
        5. removeAt 删除  传入索引值
        6. filled(length, fill)  // 固定长度的集合
        7. fillRange  修改数组，（start, end, 修改值)
        8. insert    指定位置插入单个
        9. insertAll 指定位置插入多个
        10. join   （同js）
2. Map
    1. 属性
        1. keys
        2. values
        3. isEmpty  是否为空
        4. isNotEmpty  是否不为空
    2. 方法
        1. add  新增
        2. addAll  新增多个，合并
        3. remove  移除某个
        4. containsValue  查看value中是否有某个值，返回bool
        5. toList  转换成list

    
## 循环方式
1. forEach
