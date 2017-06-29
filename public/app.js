function renderUsernames() {
	console.log('received data' + this.responseText);
	const usernames = JSON.parse(this.responseText);
	let list = document.createElement('ul');
	for (const i in usernames) {
		let li = document.createElement('a');
		li.setAttribute('href','http://www.baidu.com')
		let text = document.createElement('li');
		text.innerText = usernames[i].name;
		li.appendChild(text);
		//li.id = usernames[i].id;
		list.appendChild(li);
		//document.getElementById('1').addEventListener('click', console.log("received"));

	}
	document.getElementById('root').appendChild(list);//??
	//document.getElementById('1').addEventListener('dblclick', window.open(this.href));
}

let req = new XMLHttpRequest();
req.addEventListener('load', renderUsernames);
req.open('GET', 'http://' + window.location.host + '/api/users');
req.send();