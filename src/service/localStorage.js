export const localStorageService = {
    getUser :  function(){
        if(localStorage.getItem('name') && localStorage.getItem('lastname')){
            return localStorage.getItem('name') + localStorage.getItem('lastname');
        }else{
            return null;
        }
    }
}