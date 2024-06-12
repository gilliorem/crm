const windowApp = document.querySelector(".window-app");
const connectionWindow = document.querySelector(".connection-window");
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');

const connectButton = document.querySelector('.connect-button');

class User
{		
		constructor(name, email, password)
		{

				this.name = name;
				this.email = email;
				this.password = password;
		}
}

const remi = new User("Rémi", "rems", "remi");
const michel = new User ("Michel","mich", "mimi");
const test = new User ("Test","te", "tes");
const users = [];
users.push(remi, michel, test);

function checkInput(usersList)
{		
		for (let user of usersList)
		{
				if (email.value == user.email && password.value == user.password)
				{
						console.log("user found");
						console.log("user :  " + user.name);
						return user; 
				}
				else if (email.value != user.email && password.value != user.password)
				{
						console.error("user does not exist !");
				}
				else
						console.log("user not found, keep lookin...");
		}
}

function hide(element)
{
		element.style.display = "none";
}

function drawDashboard()
{
		const dashBoardWindow = document.createElement('div');
		windowApp.appendChild(dashBoardWindow);
		dashBoardWindow.classList.add("dashboard-window");
		return dashBoardWindow;
}

function drawWelcome(user)
{
		const welcomeTitle = document.createElement('h2');
		const dashBoarWindow = drawDashboard();
		dashBoarWindow.appendChild(welcomeTitle);
		welcomeTitle.innerText = "Bonjour " + user.name;
}

connectButton.addEventListener("click",()=>
		{
				const user = checkInput(users);
				if (user)
				{
						hide(connectionWindow);
						drawWelcome(user)	
				}
		});
