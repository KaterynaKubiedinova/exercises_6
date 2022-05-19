const users = [{

	"id": 1,
	
	"first_name": "Dulcinea",
	
	"last_name": "Beeton",
	
	"email": "dbeeton0@google.co.uk"
	
	}, {
	
	"id": 2,
	
	"first_name": "Shoshanna",
	
	"last_name": "Eymer",
	
	"email": "seymer1@behance.net"
	
	}, {
	
	"id": 3,
	
	"first_name": "Cull",
	
	"last_name": "Nazareth",
	
	"email": "cnazareth2@squidoo.com"
	
	}, {
	
	"id": 4,
	
	"first_name": "Dorella",
	
	"last_name": "Damerell",
	
	"email": "ddamerell3@taobao.com"
	
	}, {
	
	"id": 5,
	
	"first_name": "Robena",
	
	"last_name": "Jankovic",
	
	"email": "rjankovic4@youtube.com"
	
	}, {
	
	"id": 6,
	
	"first_name": "Jarret",
	
	"last_name": "Guitton",
	
	"email": "jguitton5@ucoz.ru"
	
	}, {
	
	"id": 7,
	
	"first_name": "Elias",
	
	"last_name": "Hanson",
	
	"email": "ehanson6@aol.com"
	
	}, {
	
	"id": 8,
	
	"first_name": "Corby",
	
	"last_name": "Gartrell",
	
	"email": "cgartrell7@sogou.com"
	
	}, {
	
	"id": 9,
	
	"first_name": "Scarlet",
	
	"last_name": "Eilhertsen",
	
	"email": "seilhertsen8@reverbnation.com"
	
	}, {
	
	"id": 10,
	
	"first_name": "Merv",
	
	"last_name": "Lequeux",
	
	"email": "mlequeux9@sohu.com"
	
	}];

(function() {
	let ID = function() {
		return Math.random().toString(36).substr(2, 9);
	}

	const storage = {
		setItem(key, value) {
			localStorage.setItem(key, JSON.stringify(value));
		},

		getItem(key) {
			return JSON.parse(localStorage.getItem(key));
		},
	};

	if(!storage.getItem("users")) {
		storage.setItem("users", users);
	};

	const form = document.querySelector("#add-user-form");
	const usersTable = document.querySelector('.users-table-body');

	form.onsubmit = function(event) {
		event.preventDefault();

		const first_name = this.first_name.value;
		const last_name = this.last_name.value;
		const email = this.email.value;
		
		const dataUsers = storage.getItem('users');

		dataUsers.push({
			id: ID(),
			first_name,
			last_name,
			email,
		});

		storage.setItem('users', dataUsers);

		render();
		myEvent();
	};

	function render() {
		let html = '';
		const dataUsers = storage.getItem('users');

		for (let user of dataUsers) {
			html += `<tr class = 'user-row'>
			<td>${user.first_name}</td>
			<td>${user.last_name}</td>
			<td>${user.email}</td>
		</tr>`
		}
		usersTable.innerHTML = html;
	}

	function myEvent(){
		const rows = usersTable.querySelectorAll('.user-row');

		for (let row of rows) {
			row.ondblclick = function() {
				alert(row.firstElementChild.textContent);
			}
			
			row.onclick = function() {
				row.classList.toggle('row');
			}
		}
	}

	render();
	myEvent();
})();