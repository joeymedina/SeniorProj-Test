import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: 'Joey', description: "It's ya boy sad man", email: 'joeymedina@ksu.edu'},
    {id: 2, name: 'Luke', description: 'memes memes memes', email: 'luke@gmail.com'},
    {id: 3, name: 'Josh', description: 'I am cool', email: 'josh@gmail.com' },
    {id: 4, name: 'Deeto', description: "Yo, I'm deeto", email: 'deeto@gmail.com' }
  ];

  constructor() { }

  public getContacts(): Array<{id: number, name, description, email}> {
    return this.contacts;
  }
  public createContact(contact: {id: number, name, description, email}) {
    this.contacts.push(contact);
  }
}
