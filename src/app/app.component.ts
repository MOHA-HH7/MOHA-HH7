import {Component} from '@angular/core';
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  name: string = 'moha.h.h';
  age: number = 20;
  birthday: number = 2003
  tf: boolean = false
  names: string[] = ["amir", "ali", "moha"];
  numbers: number[] = [10, 12, 15]

  car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
  }
  me: { birthday: number, name: string, age: number } = {
    birthday: 2003,
    name: "moha",
    age: 20,
  }

  studentslist: { name: string, lastName: string, address: string, phoneNumber: string, imageAddress: string } = {
    name: "jude",
    lastName: "Bellingham",
    address: "Birmingham",
    phoneNumber: '5555',
    imageAddress: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.digikala.com%2Fdigiclub%2Fgame-center%2Fgolyapooch%2F&psig=AOvVaw0OFuPR-6wi85EuoIo688iD&ust=1693383501446000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDLyob6gYEDFQAAAAAdAAAAABAE",
  }
  student2:
    { name: string, lastName: string, address: string, phoneNumber: string, imageAddress: string } = {
    name: "Eduardo",
    lastName: "Camavinga",
    address: "Reines",
    phoneNumber: '121212',
    imageAddress: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.digikala.com%2Fdigiclub%2Fgame-center%2Fgolyapooch%2F&psig=AOvVaw0OFuPR-6wi85EuoIo688iD&ust=1693383501446000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDLyob6gYEDFQAAAAAdAAAAABAB",
  }
  student3: { name: string, lastName: string, address: string, phoneNumber: string, imageAddress: string } = {
    name: "Rodrygo",
    lastName: "Goes",
    address: "SaoPaulo",
    phoneNumber: '111111',
    imageAddress: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.digikala.com%2Fdigiclub%2Fgame-center%2Fgolyapooch%2F&psig=AOvVaw0OFuPR-6wi85EuoIo6",
  }

  user1: { name: string, age: number, isStudent: boolean } [] = [
    {
      name: 'amir',
      age: 25,
      isStudent: false
    }
  ]


  taghsim(add1: number, add2: number) {
    return add1 + add2
  }

  constructor() {
    console.log(this.taghsim(25, 20));
    console.log(this.bigger(30, 20,500));
  }

  productPrice(price: 10000000) {
    return
    if (price > 1000000) {
      return price - (price * 0.2);
      if (price < 1000000) {
        return price - (price * 0);
      }
      if (price > 1000000 && price < 5000000) {

      } else {
        price - (price * 0.05)
      }
    }
  }

  takhfif(price: number) {
    if (price > 12000000) {
      return price - (price * 0.3)
    } else if (price <= 12000000) {
      return price - (price * 0.15)
    } else if (price > 12000000 && price < 12000000) {
      return price - (price * 0.03)
    } else {
      return price - (price * 0.02)
    }
  }


  bigger(add1: any, add2: any, add3: any)  {
    if (typeof add1 != "number" || typeof add2 != "number" || typeof add3 != "number") {
     return  (console.log("error"))
    } else if (add1 > add2 && add2 > add3) {
      return (add1);
    } else if (add2 > add1 && add2 > add3) {
      return (add2);
    } else if (add3 > add2 && add3 > add1) {
      return (add3);
    } else if (add1 > add2 && add2 >add3)  {
      return (add1);
    }
  }


  names2: string[] = ["amir", "ali"];

  henrich() {
    for (let i = 0; i < this.names.length; i++) {
      console.log(this.names[i]);
    }
  }


  test120: number = 0;
  sum(add1:number) {
    this.test120 += add1;
  }

  isShow:boolean = false;
  change(){
    this.isShow = !this.isShow;
  }
  title2 = 'appointments';
  patient: string
  status: string
  appointment:string
  phone: string
  Doctor:string
  names3: string[] = ["Kiran Acharya", "Sandeep Hedge",];



  patientslist: {patient: string, status: string, appointment: string, phone: string, doctor: string} = {
    patient: "Kiran Acharya",
    status: "Consult",
    appointment:"6pm",
    phone: "987654321",
    doctor: "Dr.anath",

  }

  patient2:{patient: string, status: string, appointment: string, phone: string, doctor: string} = {
    patient: "Sandeep Hedge",
    status: "Consult",
    appointment:"8pm",
    phone: "987654322",
    doctor: "Dr.anath",
  }
}
