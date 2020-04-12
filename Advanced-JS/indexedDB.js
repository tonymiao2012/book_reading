let request, database
let indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB

request = indexedDB.open('Admin')
request.onerror = function(event) {
	console.log('Bad thing happend when opening:', event.target.errorCode)
}

request.onsuccess = function(event) {
	database = event.target.result
}

// Think about the data type you want to store
let user = {
	username: '007',
	firstName: 'James',
	lastName: 'Bond',
	password: 'foo'
}

let store = database.createObjectStore('users', { keyPath: 'username'})
