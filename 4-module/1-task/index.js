function makeFriendsList(friends) {
  
  const ul = document.createElement('ul');
  
  for ( const friend of friends) {
    let li = document.createElement('li');
    li.textContent = `${friend.firstName } + ${friend.lastName}`;
    ul.append(li); 
  }

return ul

}
