class telephone {
	constructor() {
		this.observers = [];
		this.contacts = [];
		this.dialedNumber;
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

	dialPhoneNumber(dialedNum) {
		for (let i = 0; i < this.contacts.length; i++) {
			if (dialedNum == this.contacts[i]) {
				this.dialedNumber = this.contacts[i];
				this.notiyObservers();
			} else {
				this.dialedNumber = 'Number not found';
				this.notifyObservers();
			}
		}
	}

	notifObservers() {
		this.observers.forEach(observer => {
			observer.update()
		})
	}
} 

class myObservers {
	constructor(name) {
		this.name = name;
	}

	update(dialedNum) {
		console.log(`${this.name}: ${android.dialedNumber}`);
	}
}

const android = new telephone();
const displayDevice1 = new myObservers("First observer");
const displayDevice2 = new myObservers("Second observer");
android.addObserver(displayDevice1);
android.addObserver(displayDevice2);
android.addPhoneNumber(80123);
android.addPhoneNumber(80456);
android.addPhoneNumber(80789);
android.dialPhoneNumber(8012);