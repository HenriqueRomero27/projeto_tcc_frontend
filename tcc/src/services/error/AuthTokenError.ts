export class AuthTokenError extends Error{
    constructor(){
        super("[ERROR] Invalid Token.")
    }
}