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

	notifyObservers() {
		const observer1 = this.observers[0];
    	if (observer1) {
      		observer1.update(this.dialedNumber);
   		}
	    const observer2 = this.observers[1];
	    	if (observer2) {
	      		observer2.update(`Now dialling ${this.dialedNumber}`);
		}
  	}

	addPhoneNumber(number) {
		this.contacts.push(number);
	}

	removePhoneNumber(number) {
		this.contacts = this.contacts.filter(num => num !== number);
	}

	dialPhoneNumber(number) {
		const contact = this.contacts.find((contact) => contact == number);

		  if (contact) {
		      this.dialedNumber = contact;
		      this.notifyObservers();
		      } else {
		    	console.log('Phone number not found!');
		  }
	}
} 

class myObservers {
	constructor(name) {
		this.name = name;
	}

	update(number) {
		console.log(`${this.name}: ${number}`);
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
android.dialPhoneNumber(80123);