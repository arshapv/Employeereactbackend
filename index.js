const jsonServer=require('json-server')

const EmployeeServer=jsonServer.create()

const middleware=jsonServer.defaults()

const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

EmployeeServer.use(middleware)
EmployeeServer.use(route)

EmployeeServer.listen(PORT,()=>{
    console.log(`employee running at ${PORT} and waiting for client request`)
})