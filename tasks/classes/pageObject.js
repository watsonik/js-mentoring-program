/**
 * Organize a page object structure https://drive.google.com/file/d/1w3B4Z2ABy2AkacJFRlQosrYXwwv3jw_V/view
 */

class BasePage {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}
	get footer() {
		return new Footer('footer');
	}

	get header() {
		return new Header('header');
	}

	open(url) {
		return this.baseUrl + url;
	}
}

class LoginPage extends BasePage {
	open() {
		return super.open('/login');
	}

	get email() {
		return 'email field';
	}

	get password() {
		return 'password field';
	}

	get submitButton() {
		return 'submit button';
	}

	typeEmail(email) {
		return `I typed ${email} in ${this.email}`;
	}

	typePassword(password) {
		return `I typed ${password} in ${this.password}`;
	}

	clickSubmit() {
		return `I've just clicked ${this.submitButton}`;
	}
}

class Component {
	constructor(name) {
		this.name = name;
	}

	review() {
		return `This is ${this.name} component`;
	}
}

class Footer extends Component {
	constructor(name) {
		super(name);
	}
}

class Header extends Component {

	constructor(name) {
		super(name);
	}

}

module.exports = {
	BasePage,
	LoginPage
};
