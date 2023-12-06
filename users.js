fetch("https://jsonplaceholder.typicode.com/users").then(out=>out.json()).then(result=>displayData(result))

function displayData(arrayOfData){
    for(i of arrayOfData){
       cardData = `
       <div class="card col-lg-6 cd mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title fs-2 cd-text">${i.name}<hr></h5>
                <h6 class="card-subtitle mb-2 text-body-secondary mt-3 fs-3 cd-text">${i.username}</h6>
                <p class="card-text mt-3 fs-3 cd-text">${i.email}</p>
                <p class="card-text mt-3 fs-4 cd-text">${i.phone}</p>
                <div class="card-header fs-3 card-hover-text">
                Address
                </div>
                <ul class="list-group list-group-flush card-hover-text fs-4">
                <li class="list-group-item">${i.address.street}</li>
                <li class="list-group-item">${i.address.suite}</li>
                <li class="list-group-item">${i.address.city}</li>
                <li class="list-group-item">${i.address.zipcode}</li>
                </ul>
            </div>
        </div>
       `

       r1.innerHTML += cardData
    }
}