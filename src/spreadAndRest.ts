// Spread operator

const friends = ['Rahim', 'Karim'];

const schoolFriends = ['pintu', 'chintu', 'bulbul'];

const collegeFriends = ['Salman', 'Shakib'];

friends.push(...schoolFriends);

friends.push(...collegeFriends)
console.log(friends);


const user = { name: 'Soriful', phoneNo: '0172345675432' };
const otherInfo = { hobby: 'outing', favouriteColor: 'Black' };
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

// Rest Operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friends: string) =>
        console.log(`send invitation to ${friends}`));
}

sendInvite("pintu", "cinthu", 'bulbul', 'chulbul', 'soriful');