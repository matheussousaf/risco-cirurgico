'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class UserController {
    
    async createUser({request}) {
        const data = request.only(['username', 'email', 'password']);
        const userExists = await User.where({username: data.username}).fetch();
        
        if(userExists != null){
            const user = await User.create(data)
            return user;
        }
        else{
            return {
                "Err": "Usuário já existe"
            }
        }
    }

    async authenticate({request, auth}) {
        const {email, password} = request.all()
        
        const token = await auth.attempt(email, password)

        return token
    }

    async getUser({request}) {
        const query = request.get()
        console.log(query);
        const user = await User.where({username: query.name}).fetch();
        return user;
    }


}

module.exports = UserController
