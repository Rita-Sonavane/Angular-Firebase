import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

    uploadUsers(users: { [key: string]: User }) {
      Object.keys(users).forEach(key => {
        this.firestore.collection('users').doc(key).set(users[key]);
      });
    }
  
    getUsers() {
      return this.firestore.collection<User>('users').valueChanges();
    }
  
    updateUser(user: User): Promise<void> {
      return this.firestore.collection('users').doc(user.id).update(user);
    }
  
}
