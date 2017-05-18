'use strict'

var allProducts = [];
var previousIndices = [];
var totalVotes = 0;
var totalDisplayCount = 0;
var selectedProductId;
var productVoteCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var productDisplayCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var productVotePercentage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var productsToDisplay = 3;
var allLabels = [];
var allVotes = [];
var allDisplays = [];
var allPercentages = [];
var activeUser = 0;


// CONSTRUCTOR & INSTANCES

function Product(name, id, file_name) {
    this.name = name;
    this.id = id;
    this.file_name = file_name;
    this.vote_count = 0;
    this.display_count = 0;
    this.eligible_flag = 'true';
    this.vote_percentage = 0;

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

var tracker = {
    image1: document.getElementById("image1"),
    image2: document.getElementById('image2'),
    image3: document.getElementById('image3'),
    displaySection: document.getElementById('display'),
    resultsSection: document.getElementById('results'),
    // totalVotes: 0,

    // randomIndex method belonging to the tracker object
    randomIndex: function (arr) {
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
        return selectedIndices;
    },

    displayOptions: function () {  //
        console.log('totalVotes: ' + totalVotes);
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

        // append the dom with the appropriate images
        this.image1 = document.getElementById("image1").src = product1.file_name;
        this.image2 = document.getElementById("image2").src = product2.file_name;
        this.image3 = document.getElementById("image3").src = product3.file_name;

        this.image1 = product1.id;
        this.image2 = product2.id;
        this.image3 = product3.id;
    },

    tallyVote: function (id) {
        totalVotes += 1; // increments the tracker 'votes' property by 1 (it started at 0).
        totalDisplayCount += productsToDisplay;

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

        allProducts.forEach(function moo(product) {

            console.log('selectedProductId = ' + selectedProductId);
            if (product.id === selectedProductId) {
                product.vote_count += 1;
            }
        });

        console.log('totalVotes = ' + totalVotes);
        if (totalVotes > 24) {
            this.showResults();
        }
    },

    render: function () {
        document.getElementById('title').innerHTML = "<h3>Market Analysis Summary</h3>";
        // document.getElementById('title').style.backgroundColor = 'lightgrey';
        document.getElementById('display').style.display = 'none';
        document.getElementById('tableDiv').style.display = 'block';

        for (var i = 0; i < allProducts.length; i++) {
            var table = document.getElementById('results');
            var row = document.createElement('tr');
            var product = allProducts[i];
            product.vote_percentage = Math.round(product.vote_count / totalVotes * 100);
            console.log('totalVotes: ' + totalVotes);
            console.log('productVotePercentage: ' + product.vote_percentage);
            var productCell = document.createElement('td');
            var voteCountCell = document.createElement('td');
            var displayCountCell = document.createElement('td');
            var votePercentage = document.createElement('td');
            productCell.innerText = product.name;
            voteCountCell.innerText = product.vote_count;
            displayCountCell.innerText = product.display_count;
            votePercentage.innerText = product.vote_percentage + '%';
            row.appendChild(productCell);
            row.appendChild(voteCountCell);
            row.appendChild(displayCountCell);
            row.appendChild(votePercentage);
            table.appendChild(row);

        }

        var table = document.getElementById('results');
        var row = document.createElement('tr');
        var totalLabel = document.createElement('td');
        var totalVoteCount = document.createElement('td');
        var totalProductsDisplayed = document.createElement('td');
        var totalVotePercentage = document.createElement('td');
        totalVoteCount.innerText = totalVotes;
        totalProductsDisplayed.innerText = totalDisplayCount;
        totalVotePercentage.innerText = '100%';
        totalLabel.innerText = "Totals:";
        row.appendChild(totalLabel);
        row.appendChild(totalVoteCount);
        row.appendChild(totalProductsDisplayed);
        row.appendChild(totalVotePercentage);
        table.appendChild(row);


        // chart.js implementation

        allProducts.forEach(function chart(product) {
            allLabels.push(product.name);
            console.log(allLabels);
            allVotes.push(product.vote_count);
            allDisplays.push(product.display_count);
            allPercentages.push(product.vote_percentage);
        }
        )
        var ctx = document.getElementById("voteChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: allLabels,
                datasets: [{
                    label: '# of Votes',
                    data: allVotes,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    },

    showResults: function () {
        this.displaySection.removeEventListener('click', voteHandler);
        console.table(allProducts);
        this.render();
    }
}


//****EVENT LISTENERS****//

// handle welcome form submission
if (document.getElementById('beginSurvey')) {

var welcomeForm = document.getElementById('beginSurvey');
welcomeForm.addEventListener('submit', welcomeHandler);

function welcomeHandler(event) {
    var form = event.target; 
    var name = form.name.value; 
    var ageBracket = form.ageBracket.value;
    var incomeBracket = form.incomeBracket.value; 
    var newUserId = performance.now(); // generate unique id for new user 
    activeUserId = newUserId; // set activeUser to new user id 
    var newUserObj = { userID: newUserId, userName: name, userAgeBracket: ageBracket, userIncomeBracket: incomeBracket}
    localStorage.setItem('newUserObj', JSON.stringify(submissions));
}; 

}


// ------------------------------------------------------------------- //

// handle individual product selection submission

// NEXT STEP IS TO REFACTOR BELOW TO HANDLE LOCAL STORAGE OF PAGE LOADS
// --- THINK about making localStorage redundant wtih in-memory variables that already exist.
// --- LIKELY need to take pieces of code below and move into original voteHandler functions..

// var submissionForm = document.getElementById('elementsForm');
// submissionForm.addEventListener('submit', submitHandler);

// function submitHandler(event) {
//     event.preventDefault();

//     var form = event.target;
//     var name = form.name.value;

//     var submission = { name: name };
//     addToList(submission);
//     saveToLocal(submission);

//     form.reset();
// }

// function addToList(submission) {
//     var list = document.querySelector('ul');
//     var newLi = document.createElement('li');

//     newLi.innerHTML = submission.name + " &#x1F60D;'s " + submission.ele;
//     list.appendChild(newLi);
// }

// function saveToLocal(submission) {
//     submissions.push(submission);
//     localStorage.setItem('submissions', JSON.stringify(submissions));
// }


// ----------------------------------------------------------------- //

tracker.displaySection.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id !== 'display') {
        tracker.tallyVote(event.target.id);
        tracker.displayOptions();
    }
}


// Call instantiateProducts function. This is the initial function call on initial page load only.

document.getElementById("tableDiv").style.display = "none";
instantiateProducts();

// Call displayOptions() method of the tracker object. This is the initial function call on initial page load only.
// Subsequent calls are made from event listener/handler.


tracker.displayOptions();




