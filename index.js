const jsonServer=require('json-server')

const employeebackend=jsonServer.create()

const middleware=jsonServer.defaults()

const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

employeebackend.use(middleware)
employeebackend.use(route)

employeebackend.listen(PORT,()=>{
    console.log(`Employee server running at ${PORT} and waiting for client request`)
})