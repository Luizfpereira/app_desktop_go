export namespace models {
	
	export class User {
	    name: string;
	    age: number;
	    email: string;
	    address: string;
	    city: string;
	    state: string;
	    profession: string;
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.age = source["age"];
	        this.email = source["email"];
	        this.address = source["address"];
	        this.city = source["city"];
	        this.state = source["state"];
	        this.profession = source["profession"];
	    }
	}

}

