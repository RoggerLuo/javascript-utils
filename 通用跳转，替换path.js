function clickLink(paperId){
    const ind = location.pathname.lastIndexOf('/')
    const path = location.pathname.slice(0,ind)
    location.href=`${path}/detail.html?paper_id=${paperId}`
}
