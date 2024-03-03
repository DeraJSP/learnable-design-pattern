// Define a telephone class
class telephone {
	constructor() {
		// empty array to hold observers
		this.observers = [];
		// empty array to hold contacts stored
		this.contacts = [];
		// hold the number dialed
		this.dialedNumber;
	}

	// add observer to observer array/list
	addObserver(observer) {
		this.observers.push(observer);
	}

	// remove observer from array/list
	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	// method to notify observers
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

  	// add a number to contacts array
	addPhoneNumber(number) {
		this.contacts.push(number);
	}

	// remove number from array
	removePhoneNumber(number) {
		this.contacts = this.contacts.filter(num => num !== number);
	}

	// method to dial only numbers that have been added
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

// define an observer class
class myObservers {
	constructor(name) {
		// store observer name
		this.name = name;
	}

	update(number) {
		console.log(`${this.name}: ${number}`);
	}
}

// instance of the telephone class
const android = new telephone();

// two instances of the observer class
const displayDevice1 = new myObservers("First observer");
const displayDevice2 = new myObservers("Second observer");

// add both display devices as observers to the android subject
android.addObserver(displayDevice1);
android.addObserver(displayDevice2);

// add phone number to the contacts array
android.addPhoneNumber(23480123);
android.addPhoneNumber(23480456);
android.addPhoneNumber(23480789);
android.addPhoneNumber(23470123);
android.addPhoneNumber(23470456);
android.addPhoneNumber(23470789);

// dial phone number
android.dialPhoneNumber(23480123);