const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((json) => displayCategories(json.categories));
}

// Load specific plants list
const loadPlant = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((id) => displayPlant(id.plants))
};

const displayPlant = (TreesNames) => {
    const plantContainer = document.getElementById("card-container");
    plantContainer.innerHTML = "";

    TreesNames.forEach((tree) =>{
        const card = document.createElement("div")
        card.innerHTML= ` <div class="bg-white  rounded-xl shadow-sm py-3 px-5 w-[100%] h-fit space-y-4">
                        <img class=" object-cover w-full rounded-sm" src="${tree.image}" alt="" >
                        <h2 class="mt-3 text-2xl font-bold">${tree.name}</h2>
                        <p>${tree.description}</p>
                        <div class="flex flex-row justify-between items-center mt-2">
                            <a class="bg-[#DCFCF1] p-2 rounded-2xl">${tree.category}</a>
                            <a><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</a>
                        </div>
                        <button class="bg-[#15803D] p-2 w-full rounded-3xl text-white mt-2">Add to Cart</button>
                    </div>`

        plantContainer.append(card);
    })


};


// load all plants by clicking all trees
const loadAllPlants = (id) => {
    const url = `https://openapi.programming-hero.com/api/plants/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((plants) => displayAllPlants(plants.plants));
}

const displayAllPlants = (plants) => {
    const plantsContainer = document.getElementById("card-container");
    plantsContainer.innerHTML = ``;

    // {
    //     "id": 26,
    //     "image": "https://i.ibb.co.com/Ngzp0tkJ/Bougainvillea-min.jpg",
    //     "name": "Bougainvillea",
    //     "description": "A vibrant flowering climber with pink, purple, or red blooms. Perfect for covering fences and garden walls.",
    //     "category": "Climber",
    //     "price": 400
    // }
    plants.forEach(plant => {
        console.log(plant);
        const card = document.createElement("div");
        card.innerHTML = ` <div class="bg-white  rounded-xl shadow-sm py-3 px-5 w-[100%] h-full space-y-4">
                        <img class=" object-cover w-full rounded-sm" src="${plant.image}" alt="" >
                        <h2 class="mt-3 text-2xl font-bold">${plant.name}</h2>
                        <p>${plant.description}</p>
                        <div class="flex flex-row justify-between items-center mt-2">
                            <a class="bg-[#DCFCF1] p-2 rounded-2xl">${plant.category}</a>
                            <a><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</a>
                        </div>
                        <button class="bg-[#15803D] p-2 w-full rounded-3xl text-white mt-2">Add to Cart</button>
                    </div>`
        plantsContainer.append(card);
    })
}



const displayCategories = (items) => {
    const categoriesContainer = document.getElementById("categories-container")
    // categoriesContainer.innerHTML = "";


    for (let item of items) {

        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadPlant(${item.id})"  class="p-5 text-2xl mt-4 rounded-2xl shadow-sm hover:bg-[#15803D] w-[300px] text-start">${item.category_name}</button>`
        categoriesContainer.append(btnDiv);
    }
}
loadCategories()
