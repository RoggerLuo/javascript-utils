
const data = JSON.stringify({ name: appName, description: appDes })

const options = { method: "POST", body: data, headers: { "Content-Type": "application/json" } }

return request( protocol_and_host + '/app', options)

关键是
1. JSON.stringify
2. headers的content-type