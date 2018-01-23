const getApps = co.wrap(function*(condition){
	const appList = yield find(condition)
		.limit(param.size || Default_Val.size)
		.sort(param.sort || Default_Val.sortType)
		.exec()
		.then(Db_Tool.toSimpleObject)
	
	const promiseMap = appList.map((el)=>{
		return getBugNumberOfTheDay(el._id).then(bugs=>{
			el.bugNumberToday = bugs.length
			return el
		})
	})
	return appList
})



return new Promise(resolve => {
	resolve(someValue)
})
