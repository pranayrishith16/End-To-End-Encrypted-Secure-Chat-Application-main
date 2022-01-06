const rooms = [];

function addRoom(name,key){
    _id = Date.now();
    const room = {_id,name,key}
    rooms.push(room);
    
    return room;
}

function findRoom(roomName){
    return rooms.find(room => room.name == roomName)
}


module.exports = {
    addRoom,
    findRoom,
}




//join user to chat
// function RoomJoin(id,username,room){
//     const room = {id,username,room};

//     users.push(user);

//     return user;
// }


// //get current user
// function getCurrentUser(id){
//     return users.find(user => user.id === id)
// }

// //when users leave
// function userLeave(id){
//     const index = users.findIndex(user => user.id === id);

//     if(index !== -1){
//         return users.splice(index,1)[0];
//     }
// }

// //get users
// function getRoomUsers(room){
//     return users.filter(user => user.room === room)
// }

// module.exports = {
//     userJoin,
//     getCurrentUser,
//     userLeave,
//     getRoomUsers
// }

