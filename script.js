const clients = [
  {
    name: 'Paulo',
    email: 'paulo@test.com'
  },
  {
    name: 'Ricardo',
    email: 'ricardo@test.com'
  },
  {
    name: 'Luiza',
    email: 'luiza@test.com'
  }
]

const list = document.getElementById('Clients');

let index = 0;
while(index < clients.length) {
  const client = clients[index];
  const listItem = document.createElement('li');

  const text = document.createTextNode(client.name);
  listItem.appendChild(text);

  list.appendChild(listItem); 
  index++;
}



