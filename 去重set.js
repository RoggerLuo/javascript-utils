
let sets2 = new Set([1,2,2,4])
sets.add(5);//Set { 1, 5 }      重复加入无效
sets.delete(1);//Set { 5 }      删除一个key(5)
let array = Array.from(sets1) //set转数组