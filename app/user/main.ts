import User from './user';

let allUsers : Record<string, User> = {
    "vnmc": new User("vnmc"),
    "pnt": new User("pnt"),
    "meowu": new User("meowu")
}

function AddNewUser(AllUsers : Record<string, User>, newUser: User) : void {
    AllUsers[newUser.userName] = newUser;
}

function GetAllUser(AllUsers: Record<string, User>){
    let result = [];
    for (let user in AllUsers) { 
        result.push(
            {
                "userID": AllUsers[user].getUserID(),
                "userName": AllUsers[user].getUserName(),
                "amountOfMoney": AllUsers[user].getAmountOfMoney()
            }
        )
    }
    return result;
}

export default {
    AddNewUser,
    allUsers,
    GetAllUser
};