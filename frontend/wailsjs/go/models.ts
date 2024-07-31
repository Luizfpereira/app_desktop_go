export namespace models {
	
	export class User {
	    name?: string;
	    email?: string;
	    // Go type: time
	    birth_date?: any;
	    address?: string;
	    address_number?: number;
	    cep?: number;
	    gender?: string;
	    profession?: string;
	    doctor?: string;
	    weight?: number;
	    height?: number;
	    imc?: number;
	    polysomnography?: string;
	    // Go type: time
	    assessment_date?: any;
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.email = source["email"];
	        this.birth_date = this.convertValues(source["birth_date"], null);
	        this.address = source["address"];
	        this.address_number = source["address_number"];
	        this.cep = source["cep"];
	        this.gender = source["gender"];
	        this.profession = source["profession"];
	        this.doctor = source["doctor"];
	        this.weight = source["weight"];
	        this.height = source["height"];
	        this.imc = source["imc"];
	        this.polysomnography = source["polysomnography"];
	        this.assessment_date = this.convertValues(source["assessment_date"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

