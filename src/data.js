export const Roles = [
    {
        name : "admin",
        permissions : [ 
            { action : "manage" , on :"all"},
        ]
    },
    {
        name : "user",
        permissions : [  
            { action : "read" , on :"userpage"} ,
        ]
    },
]
export const Users = [
    {
        username : "admin1",
        password : "admin1",
        role     : "admin",
    },
    {
        username : "admin2",
        password : "admin2",
        role     : "admin",
    },
    {
        username : "user1",
        password : "user1",
        role     : "user",
    },
    {
        username : "user2",
        password : "user2",
        role     : "user",
    },
]

export const login = (username,password) => {
    let LoginUser = null
    Users.forEach((user) => {
       
        if (username === user.username && password === user.password)
        {   
            LoginUser = user ;
        }
        
    })
    console.log(LoginUser);
    return LoginUser 
}