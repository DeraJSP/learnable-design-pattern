class telephone {
	constructor() {
		this.observers = [];
		this.contacts = [];
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
				console.log(`${this.contacts[i]}`);
				console.log('Now Dialling 2347023232');
				this.notifyObservers();
			}
		}
	}

	notifyObservers() {
		this.observers.forEach(observer => {
			observer.update(this.contacts)
		})
	}
} 

class myObservers {
	constructor(name) {
		this.name = name;
	}

	update(contacts) {
		console.log(`${this.name} Display: ${contacts.at(-1)} added to phonebook`)
	}
}

const telephone1 = new telephone();
const displayDevice1 = new myObservers("Display 1");
telephone1.addObserver(displayDevice1);
telephone1.addPhoneNumber(123);
telephone1.addPhoneNumber(456);
telephone1.addPhoneNumber(789);
telephone1.dialPhoneNumber(45);

