import * as EmailValidator from 'email-validator'


export const validate_email = (email:string): boolean =>{
    if(email.length == 0){
        return false
    }
    else if(EmailValidator.validate(email)){
        return true
    }
    else{
        return false
    }
}
