
// Global variables
var allProducts = [];
var previousIndices = [];
var totalVotes = 0;
var selectedProductId;

// CONSTRUCTOR & INSTANCES

function Product(name, id, file_name) {
    this.name = name;
    this.id = id;
    this.file_name = file_name;
    this.vote_count = 0;
    this.display_count = 0;
    this.eligible_flag = 'true';

    allProducts.push(this);
}

// Instantiate products function declaration
function instantiateProducts() {
    var bag = new Product('bag', 'bag_1', 'img/bag.jpg', 0, 0, 'true');
    var banana = new Product('banana', 'banana_1', 'img/banana.jpg', 0, 0, 'true');
    var bathroom = new Product('bathroom', 'bathroom_1', 'img/bathroom.jpg', 0, 0, 'true');
    var boots = new Product('boots', 'boots_1', 'img/boots.jpg', 0, 0, 'true');
    var breakfast = new Product('breakfast', 'breakfast_1', 'img/breakfast.jpg', 0, 0, 'true');
    var bubblegum = new Product('bubblegum', 'bubblegum_1', 'img/bubblegum.jpg', 0, 0, 'true');
    var chair = new Product('chair', 'chair_1', 'img/chair.jpg', 0, 0, 'true');
    var cthulhu = new Product('cthulhu', 'cthulhu_1', 'img/cthulhu.jpg', 0, 0, 'true');
    var dog_duck = new Product('dog_duck', 'dog_duck_1', 'img/dog_duck.jpg', 0, 0, 'true');
    var dragon = new Product('dragon', 'dragon_1', 'img/dragon.jpg', 0, 0, 'true');
    var pen = new Product('pen', 'pen_1', 'img/pen.jpg', 0, 0, 'true');
    var pet_sweep = new Product('pet_sweep', 'pet_sweep_1', 'img/pet_sweep.jpg', 0, 0, 'true');
    var scissors = new Product('scissors', 'scissors_1', 'img/scissors.jpg', 0, 0, 'true');
    var shark = new Product('shark', 'shark_1', 'img/shark.jpg', 0, 0, 'true');
    var sweep = new Product('sweep', 'sweep_1', 'img/sweep.png', 0, 0, 'true');
    var tauntaun = new Product('tauntaun', 'tauntaun_1', 'img/tauntaun.jpg', 0, 0, 'true');
    var unicorn = new Product('unicorn', 'unicorn_1', 'img/unicorn.jpg', 0, 0, 'true');
    var usb = new Product('usb', 'usb_1', 'img/usb.gif', 0, 0, 'true');
    var water_can = new Product('water_can', 'water_can_1', 'img/water_can.jpg', 0, 0, 'true');
    var wine_glass = new Product('wine_glass', 'wine_glass_1', 'img/wine_glass.jpg', 0, 0, 'true');

}

// Tracker object is instantiated once (?) on initial page load
var tracker = {
    image1: document.getElementById("image1"),
    image2: document.getElementById('image2'),
    image3: document.getElementById('image3'),
    displaySection: document.getElementById('display'),
    totalVotes: 0,

    /*
    option1: document.getElementsByClassName('option1')[0],
    option2: document.getElementsByClassName('option2')[0],
    option3: document.getElementsByClassName('option3')[0],
    displaySection: document.getElementById('display'),
    totalVotes: 0,
    */

    // randomIndex method belonging to the tracker object
    randomIndex: function (arr) { // arr currently = allProducts. NOTE: CHANGE THIS FUNCTION TO NOT INCLUDE THE PREVIOUS 3 SELECTED PRODUCTS.
        return Math.floor(Math.random() * arr.length);
    },

    getIndices: function (arr) {
        var selectedIndices = [];
        while (selectedIndices.length < 3) {
            var item = this.randomIndex(arr);

            if (previousIndices.indexOf(item) === -1) {

                if (selectedIndices.indexOf(item) === -1) { // -1 means the currently selected product index is NOT already in the selected Indices array (for next display)
                    selectedIndices.push(item);


                }

            }

        }

        previousIndices = selectedIndices.slice(0);
        console.log('previousIndices: ' + previousIndices);
        console.log('selectedIndices: ' + selectedIndices);
        return selectedIndices;
    },
    // This method is first called by line 133, but subsequent calls come from vote click events (listern/handler)
    displayOptions: function () {  //
        var randomProducts = this.getIndices(allProducts); // Passes allProducts array to getIndices method 
        var index1 = randomProducts[0]; // sets index1 variable to the first randomProducts object returned at index [0]
        var index2 = randomProducts[1]; // sets index2 variable to the second randomProducts object returned at index [1] 
        var index3 = randomProducts[2]; // sets index 3 variable to the third randomProducts object returned at index [2]

        // Set var product1, product2 and product3 to the selected random products in the allProducts array 
        var product1 = allProducts[index1];
        var product2 = allProducts[index2];
        var product3 = allProducts[index3];

        product1.display_count += 1;
        product2.display_count += 1;
        product3.display_count += 1;

        // TODO append the dom with the appropriate images
        this.image1 = document.getElementById("image1").src = product1.file_name;
        this.image2 = document.getElementById("image2").src = product2.file_name;
        this.image3 = document.getElementById("image3").src = product3.file_name;

        console.log('this.image1 = ' + this.image1);
        console.log('this.image2 = ' + this.image2);
        console.log('this.image3 = ' + this.image3);


        // this.option1.innerHtml = product1.name // sets the innerText of the DOM class id="option1" to the name of product1
        // this.option2.innerText = product2.name; // sets the innerText of the DOM class id="option1" to the nae of restaurant2
        // this.option3.innerText = product3.name; // see above.


        // sets the id of the DOM id="option1", "option2" and "option3" to the class to the id of product
        // At this point, the DOM has been updated and script execution has stopped until user makes a choice with 'click' event.
        // 'click' event trigger event listener on line 125, which calls the voteHandler() function, which calls the tallyVote function
        // which in turn increments the vote count for the selected product and then calls the tracker.displayOptions() function all over again.

        this.image1 = product1.id;
        this.image2 = product2.id;
        this.image3 = product3.id;
    },

    tallyVote: function (id) {
        totalVotes += 1; // increments the tracker 'votes' property by 1 (it started at 0).

        var selectedProductId;

        if (id = 'image1') {
            selectedProductId = this.image1;
        }
        else if (id = 'image2') {
            selectedProductId = this.image2;
        }
        else if (id = 'image3') {

            selectedProductId = this.image3;
        }





        // for loop
        // for ( var i = 0; i < allRestaurants.length; i ++ ) {
        //     var restaurant = allRestaurants[i];
        //     if ( restaurant.id === id ) {
        //         restaurant.votes += 1;
        //     }
        // }

        // for each loop
        allProducts.forEach(function moo(product) { // loops through allRestaurants array using each restaurant object
            // and increments the selected restaurant's vote property by 1.
            // Matches the selected restaurant's id to the related restaurant ID
            // in the allRestaurants array to determine the correct restaurant
            // to increment its 'votes' property.
            // console.log('product.id: ' + product.id);
            // console.log('id: ' + id);
            console.log('selectedProductId = ' + selectedProductId);
            if (product.id === selectedProductId) {
                product.vote_count += 1;
            }
        });


        console.log('totalVotes = ' + totalVotes);
        if (totalVotes > 2) { // If the total number of votes in the tracker object's 'votes' property is > 3, calls the
            // tracker object's showResults() method (line 120 below), which removes the event listener
            // from the page (no more voting) and writes to console the voting results using allRestaurants array
            // which will display name, id and updated 'votes' totals for each product and stops code execution
            // on line 131.
            this.showResults();
        }
    },

    showResults: function () {
        this.displaySection.removeEventListener('click', voteHandler);
        console.table(allProducts);
        // for ( var i = 0; i < allRestaurants.length; i ++ ) {
        //     var restaurant = allRestaurants[i];
        //     console.log( restaurant.name + ': ' + restaurant.votes );
        // }
    }
}

//****EVENT LISTENERS****//

tracker.displaySection.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id !== 'display') {


        tracker.tallyVote(event.target.id);
        tracker.displayOptions();
    }
}


// Call instantiateProducts function. This is the initial function call on initial page load only.
instantiateProducts();

// Call displayOptions() method of the tracker object. This is the initial function call on initial page load only.
// Subsequent calls are made from event listener/handler.
tracker.displayOptions();

