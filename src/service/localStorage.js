export const localStorageService = {
    getUser :  function(){
        return localStorage.getItem('name') + localStorage.getItem('lastname');
    }
}