import conf from '../config/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client()
    account
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).
        setProject(conf.appwriteProjectId)
        
        this.account=new Account(this.client)
    }

    async createAccount({name,email,password}){
        try{
            const userAccount= await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                return this.login({email,password})
            }
            else{
                return null
            }
        }
        catch(error){
            throw error 
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }
        catch(err){
            throw err
        }
    }

    async getCurrentUser(){
        try{
           return  await this.account.get();

        }
        catch(err){
            console.log(err.message)
            return null
        }
        
    }
    async logout(){
        try{
            return await this.account.deleteSessions()
        }
        catch(err){
            throw err
        }
    }


}

const authService=new AuthService();
export default authService