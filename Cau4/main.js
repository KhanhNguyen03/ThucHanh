let myStore= new PhoneManagement();
    function showHome() {
    document.getElementById("main").innerHTML = `
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
              
            </tr>
            <tbody id="listPhone">
          </tbody>
            
        </table>
        `
        myStore.listPhone.sort((a,b) => a.name.localeCompare(b.name));
    let list = myStore.listPhone;
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html += `
        <tr>
        <td>${list[i].id}</td>
        <td>${list[i].name}</td>
        <td>${list[i].brand}</td>
        <td>${list[i].price}</td>
          
        </tr>
      `
    }
    document.getElementById('listPhone').innerHTML = html;
}
function showFormAdd() {
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Id">
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="brand" placeholder="Brand">
    <input type="text" id="price" placeholder="Price">
    <button onclick="add()">Add</button>
    `
}

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let brand = document.getElementById("brand").value;
    let price = document.getElementById("price").value;
    let newPhone = new Phone(id, name, brand, price);
    myStore.add(newPhone);
    showHome();
}
