export class User {
    username = '';
    name = '';
    lastName = '';
    email = '';
    password = '';

    constructor(username, email, password, name, userName){
        this.username = username;
        this.name = name;
        this.username = userName;
        this.email = email;
        this.paswword = password;
    }
}