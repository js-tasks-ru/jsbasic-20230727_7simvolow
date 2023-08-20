function makeFriendsList(friends) {
  let ulElem = document.createElement('ul');
  ulElem.innerHTML = friends.map((friend) => `<li>${friend.firstName} ${friend.lastName}</li>`).join("");
  return ulElem;
}
