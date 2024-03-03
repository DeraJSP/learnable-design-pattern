class telephone {
	constructor() {
		this.observers = [];
		this.contacts = [];
		this.dialedNumber = 10000;
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	addPhoneNumber(number) {
		this.contacts.push(number);
	}

	removePhoneNumber(number) {
		this.contacts = this.contacts.filter(num => num !== number);
	}

	dialPhoneNumber(number) {
		for (let i = 0; i < this.contacts.length; i++) {
			if (number == this.contacts[i]) {
				this.dialedNumber = number;
				this.notifyObservers();
			}
		}
	}

	notifyObservers() {
		this.observers.forEach(observer => {
			observer.update(this.dialedNumber)
		})
	}
} 

class myObservers {
	constructor(name) {
		this.name = name;
	}

	update(number) {
		console.log(this.dialedNumber);
	}
}

const android = new telephone();
const displayDevice1 = new myObservers("First observer");
const displayDevice2 = new myObservers("Second observer");
android.addObserver(displayDevice1);
android.addObserver(displayDevice2);
android.addPhoneNumber(123);
android.addPhoneNumber(456);
android.addPhoneNumber(789);
android.dialPhoneNumber(456);
android.dialPhoneNumber(789);