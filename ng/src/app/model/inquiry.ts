export class Inquiry {
    firstName: string;
    lastName: string;
    id?: number;
  
    constructor(firstName: string, lastName: string, id?: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
    }
  }