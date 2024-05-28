class PhoneManagement {
    listPhone;

    constructor() {
        this.listPhone = [];
        let sp1 = new Phone("A01", "Iphone 10", "Apple", 400);
        let sp2 = new Phone("A02", "Samsung 11", "Samsung", 300);
        this.listPhone.push(sp1);
        this.listPhone.push(sp2);

    }
    add(newPhone) {
        this.listPhone.push(newPhone);
    }sort(arr){


    }


}