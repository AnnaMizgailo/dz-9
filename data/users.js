let users = {
    "Anna": {
        password: "Anna",
        img: "https://avatars.mds.yandex.net/i?id=138b9b7a42ff50c6978b257332659aaf90850081-10996738-images-thumbs&n=13",
        isBlocked: false
    }
};

function checkUser(login, password){
    const keys = Object.keys(users);
    for(const key of keys){
        if(login == key){
            if(password == users[key].password){
                return true;
            }
            return false;
        }
    }
    return false;
}
function isBlocked(login){
    return user[login].isBlocked;
}
function getAvatar(login){
    return users[login].avatar;
}
function createNewUser(login, password, img){
    if(login !== null && password !== null && img !== null){
        users[login] = {
            password: password,
            img: img,
            isBlocked: false
        }
        return true;
    }
    return false;
}

function putBlock(login){
    user[login].isBlocked = true;
}

module.exports  = {createNewUser, checkUser, getAvatar, isBlocked};