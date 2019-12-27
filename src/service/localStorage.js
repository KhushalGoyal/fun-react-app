import { http } from "../service/addUserToMaster";
export const localStorageService = {
    getUser :  function(){
        if(localStorage.getItem('firstname') && localStorage.getItem('lastname')){
            let userDetails = {
                firstname : localStorage.getItem('firstname'),
                lastname : localStorage.getItem('lastname'),
                email : localStorage.getItem('email'),
                uniqueID : localStorage.getItem('uniqueID')
            }
            http.addUsertoSocket(userDetails);
            return userDetails;
        }else{
            return null;
        }
    },
    addUser : function (userObj){
        let uniqueToken = btoa(userObj.firstname+"_"+userObj.lastname+"_"+userObj.email);
        localStorage.setItem('firstname',userObj.firstname);
        localStorage.setItem('lastname',userObj.lastname);
        localStorage.setItem('email',userObj.email);
        localStorage.setItem('uniqueID',uniqueToken);
        let userDetails = {
            firstname : localStorage.getItem('firstname'),
            lastname : localStorage.getItem('lastname'),
            email : localStorage.getItem('email'),
            uniqueID : localStorage.getItem('uniqueID')
        }
        http.addUsertoSocket(userDetails);
        return userDetails;
    }
}