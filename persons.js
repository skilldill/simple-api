import { v4 as uuid } from "uuid";

const data = [
  { id: uuid(), name: "Harry", lastname: "Potter" },
  { id: uuid(), name: "Ron", lastname: "Wisslie" },
];

class PersonsService {
  constructor(data) {
    this.data = data;
  }

  getPersons() {
    return this.data;
  }

  // { name, lastname }
  addPerson(person) {
    this.data.push({
      ...person,
      id: uuid(),
    });
  }
}

export const personsService = new PersonsService(data);
