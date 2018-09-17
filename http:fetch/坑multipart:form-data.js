
`
fetch(url,options)

If you set a string as options.body, you have to set the Content-Type in request header ,
or it will be text/plain by default.

If options.body is specific object like let a = new FormData() or let b = new URLSearchParams(), 
you don't have to set the Content-Type by hand.It will be added automaticlly.


for a ,it will be something like
multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

as you see, the boundary is automaticlly added.
for b, it is application/x-www-form-urlencoded;

`

const headers = 'Content-Type': 'multipart/form-data'
