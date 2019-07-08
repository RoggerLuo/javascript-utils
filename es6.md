####函数的双重用途
带有 [[Construct]] 方法的函数被称为构造函数（constructor）
箭头函数就没有该方法

####函数调用方式的判断
调用 Person.call() 并将 person 变量作为第一个参数会将 Person 内部的 this 设置为 person。 使用 instanceof Person 辨别它们显得无能为力

新引入的该元属性允许你通过检查 new.target 是否被定义来准确的判断出函数是否被 new 调用

####块级函数 
"use strict"  
你可以根据是否想让函数提升到顶部来选择块级函数（声明）或 let 函数表达式

非"use strict"  
非严格模式下块级函数的存在，但是具体行为有些不同。函数的声明会被提升至函数作用域或全局作用域的顶部，而不是块内

### 箭头函数
不能被 new 调用， 既然你不能使用 new 调用箭头函数，那么 prototype 就没有存在的理由。箭头函数没有 prototype 属性。
  
不能更改 this

**why:**  
在 JavaScript 编程中 this 绑定是发生错误的根源之一。this 的值很容易丢失，使得程序以意想之外的方式运行. 

箭头函数限制 this 为固定值,JavaScript 引擎可以对一些操作进行优化


**即用函数表达式**
括号包裹的是箭头函数的定义，并不包括（"Nicholas"）

```
let person = ((name) => {

    return {
        getName: function() {
            return name;
        }
    };

})("Nicholas");
```


### 尾调用优化和迭代
尾调用优化的主要使用场景是使用递归,而且该优化的效果及其显著

使用 **默认参数** 来去除 return 语句中的乘法运算,之后把临时的结果传给下一次迭代