const socket = new WebSocket('ws://localhost:8080');

// pageElements
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

socket.onmessage = ({
  data
}) => {
  const li = document.createElement('li');
  ul.append(li);
  li.innerHTML = data;
}

button.onclick = () => {
  socket.send(input.value);
  input.value = '';
}