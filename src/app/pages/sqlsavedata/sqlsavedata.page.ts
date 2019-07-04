import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sqlsavedata',
  templateUrl: './sqlsavedata.page.html',
  styleUrls: ['./sqlsavedata.page.scss'],
})
export class SqlsavedataPage implements OnInit {

  data: any;

  constructor(private storage: Storage) {
    this.data = {};

    this.setValue("name", "Ajay Kumar");
    this.setValue("phone", 25534332);

    let myData = [
      {
        country: "India",
        address: "Bangalore",
        phone: "23466533"
      }, {
        country: "India",
        address: "Delhi",
        phone: "24424453"
      }, {
        country: "India",
        address: "Pune",
        phone: "28568656"
      }
    ];

    this.setValue("offices", myData);
  } // eo ctor


  setValue(key: string, value: any) {
    this.storage.set(key, value).then((response) => {
      console.log('set' + key + ' ', response);

      this.getValue(key);

    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });
  }

  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log('get ' + key + ' ', val);
      this.data[key] = "";
      this.data[key] = val;
    }).catch((error) => {
      console.log('get error for ' + key + '', error);
    });
  }

  removeKey(key: string) {
    this.storage.remove(key).then(() => {
      console.log('removed ' + key);
      this.data[key] = "";
    }).catch((error) => {
      console.log('removed error for ' + key + '', error);
    });
  }

  //Get Current Storage Engine Used
  driverUsed() {
    console.log("Driver Used: " + this.storage.driver);
  }

  // Traverse key/value pairs
  traverseKeys() {
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
      console.log("key " + key);
      console.log("iteration_no: " + iterationNumber);
      console.log("value: " + value);
    });
  }

  // Traverse key/value pairs
  listKeys() {
    this.storage.keys().then((k) => {
      console.table(k)
    });
  }

  // Total Keys Stored
  getKeyLength() {
    this.storage.length().then((keysLength: Number) => {
      console.log("Total Keys " + keysLength);
    });
  }

  ngOnInit() {
  }

}
