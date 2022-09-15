(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{394:function(e,n,a){"use strict";a.r(n);var s=a(1),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("一些实用的小方法\n")]),e._v(" "),a("h2",{attrs:{id:"_1、array-prototype-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、array-prototype-filter"}},[e._v("#")]),e._v(" 1、Array.prototype.filter")]),e._v(" "),a("p",[e._v("顾名思义，用来过滤的方法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const filterArr = [1, 2, 3, 4, 5]\n\n// 三个参数：遍历项 索引 数组本身\n// 配合箭头函数，返回大于3的集合\nconst filterArr2 = filterArr.filter((num, index, arr) => num > 3)\nconsole.log(filterArr2)\n[ 4, 5 ]\n")])])]),a("h2",{attrs:{id:"_2、array-prototype-some"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、array-prototype-some"}},[e._v("#")]),e._v(" 2、Array.prototype.some")]),e._v(" "),a("p",[e._v("some，意思就是只有一个是真，那就返回真。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const someArr = [false, true, false, true, false]\n\n// 三个参数：遍历项 索引 数组本身\n// 配合箭头函数，只要有一个为true，就返回true，一个都true都没有，就返回false\nconst someArr2 = someArr.some((bol, index, arr) => bol)\nconsole.log(someArr2)\ntrue\n")])])]),a("h2",{attrs:{id:"_3、array-prototype-every"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、array-prototype-every"}},[e._v("#")]),e._v(" 3、Array.prototype.every")]),e._v(" "),a("p",[e._v("every跟some是相反的，some是只有一个就行，every是要所有为真才返回真。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const everyArr = [false, true, false, true, false]\n\n// 三个参数：遍历项 索引 数组本身\n// 配合箭头函数，需要所有为true，才返回true，否则返回false\nconst everyArr2 = everyArr.every((bol, index, arr) => bol)\nconsole.log(everyArr2)\n")])])]),a("h2",{attrs:{id:"_4、find-和-findindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、find-和-findindex"}},[e._v("#")]),e._v(" 4、find 和 findIndex")]),e._v(" "),a("ul",[a("li",[e._v("find：找到返回被找元素，找不到返回undefined")]),e._v(" "),a("li",[e._v("findIndex：找到返回被找元素索引，找不到返回-1")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const findArr = [\n  { name: '科比', no: '24' },\n  { name: '罗斯', no: '1' },\n  { name: '利拉德', no: '0' }\n]\n\nconst kobe = findArr.find(({ name }) => name === '科比')\nconst kobeIndex = findArr.findIndex(({ name }) => name === '科比')\nconsole.log(kobe) // { name: '科比', no: '24' }\nconsole.log(kobeIndex) // 0\n\n")])])]),a("h2",{attrs:{id:"_5、includes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、includes"}},[e._v("#")]),e._v(" 5、includes")]),e._v(" "),a("p",[e._v("传入元素，如果数组中能找到此元素，则返回true，否则返回false")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const includeArr = [1, 2 , 3, '林三心', '科比']\n\nconst isKobe = includeArr.includes('科比')\nconsole.log(isKobe) // true\n\n")])])]),a("p",[e._v("跟indexOf很像，但还是有区别的")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const arr = [1, 2, NaN]\n\nconsole.log(arr.indexOf(NaN)) // -1  indexOf找不到NaN\n\n")])])]),a("h2",{attrs:{id:"_6、求幂运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、求幂运算符"}},[e._v("#")]),e._v(" 6、求幂运算符")]),e._v(" "),a("p",[e._v("以前求幂，我们需要这么写")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const num = Math.pow(3, 2) // 9\n")])])]),a("p",[e._v("ES7提供了求幂运算符："),a("code",[e._v("**")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const num = 3 ** 2 // 9\n")])])]),a("h2",{attrs:{id:"_7、object-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、object-values"}},[e._v("#")]),e._v(" 7、Object.values")]),e._v(" "),a("p",[e._v("可以用来获取对象的value的集合")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const obj = {\n  name: '林三心',\n  age: 22,\n  gender: '男'\n}\n\nconst values = Object.values(obj)\nconsole.log(values) // [ '林三心', 22, '男' ]\n")])])]),a("h2",{attrs:{id:"_8、object-entries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、object-entries"}},[e._v("#")]),e._v(" 8、Object.entries")]),e._v(" "),a("p",[e._v("可以用来获取对象的键值对集合")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const obj = {\n  name: '林三心',\n  age: 22,\n  gender: '男'\n}\n\nconst entries = Object.entries(obj)\nconsole.log(entries) \n// [ [ 'name', '林三心' ], [ 'age', 22 ], [ 'gender', '男' ] ]\n")])])]),a("h2",{attrs:{id:"_9、async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、async-await"}},[e._v("#")]),e._v(" 9、async/await")]),e._v(" "),a("p",[e._v("这个是很常用的语法了，我的理解就是："),a("code",[e._v("以同步方式执行异步操作")])]),e._v(" "),a("p",[e._v("我们平时可能会遇到这种场景，接口一，请求到数据一，而数据一被当做请求二的参数去请求数据二，我们会用Promise这么做")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function fn() {\n  // 模拟第一次请求\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(5)\n    }, 1000)\n  }).then(res => {\n    // 模拟第二次请求\n    new Promise((resolve, reject) => {\n      setTimeout(() => {\n        // 拿第一次请求的数据去乘10，当做第二次请求的数据\n        resolve(res * 10)\n      }, 2000)\n    }).then(sres => {\n      console.log(sres)\n    })\n\n  })\n}\nfn() // 1 + 2 = 3 3秒后输出 50\n")])])]),a("p",[e._v("这样的嵌套是不美观的，如果有很多个接口，那就会嵌套很多层，此时我们可以使用async/await来以同步方式执行异步，注意以下几点：")]),e._v(" "),a("ul",[a("li",[e._v("await只能在async函数里使用")]),e._v(" "),a("li",[e._v("await后面最好接Promise，如果后面接的是普通函数则会直接执行")]),e._v(" "),a("li",[e._v("async函数返回的是一个Promise")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function fn1 () {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(5)\n    }, 1000)\n  })\n}\n\nfunction fn2 (data) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(data * 10)\n    }, 2000)\n  })\n}\n\nasync function req () {\n  // 同步方式执行异步，像排队一样\n  const data1 = await fn1() // 等待1秒后返回数据再往下执行\n  const data2 = await fn2(data1) // 拿data1去请求2秒后，往下走\n  console.log(data2) // 总共3秒后 输出 50\n}\nreq()\n\n")])])]),a("h2",{attrs:{id:"_10、promise-finally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、promise-finally"}},[e._v("#")]),e._v(" 10、Promise.finally")]),e._v(" "),a("p",[e._v("新增的Promise方法，无论失败或者成功状态，都会执行这个函数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// cheng\nnew Promise((resolve, reject) => {\n      resolve('成功喽')\n    }).then(\n      res => { console.log(res) },\n      err => { console.log(err) }\n    ).finally(() => { console.log('我是finally') })\n\nnew Promise((resolve, reject) => {\n    reject('失败喽')\n  }).then(\n    res => { console.log(res) },\n    err => { console.log(err) }\n  ).finally(() => { console.log('我是finally') })\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);