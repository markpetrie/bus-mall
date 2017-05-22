'use strict'

var allProducts = [];
var previousIndices = [];
// var totalVotes = 0;
// var totalDisplayCount = 0;
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
var currentSessionVoteCount = 0;


// CONSTRUCTOR & INSTANCES

function Product(name, id, file_name) {
    this.name = name;
    this.id = id;
    this.file_name = file_name;
    this.voteCount = 0;
    this.displayCount = 0;
    this.votePercentage = 0;

    allProducts.push(this);
    localStorage.setItem('allProductsStr', JSON.stringify(allProducts));

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

function resetSessionVoteCounter() {
    currentSessionVoteCount = 0;
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

        var randomProducts = this.getIndices(allProducts); // Passes allProducts array to getIndices method 
        var index1 = randomProducts[0]; // sets index1 variable to the first randomProducts object returned at index [0]
        var index2 = randomProducts[1]; // sets index2 variable to the second randomProducts object returned at index [1] 
        var index3 = randomProducts[2]; // sets index 3 variable to the third randomProducts object returned at index [2]

        // Set var product1, product2 and product3 to the selected random products in the allProducts array 
        var product1 = allProducts[index1];
        var product2 = allProducts[index2];
        var product3 = allProducts[index3];

        if (currentSessionVoteCount > 23 ) {

        } else {
            
            product1.displayCount += 1;
            product2.displayCount += 1;
            product3.displayCount += 1;
            localStorage.setItem('allProductsStr', JSON.stringify(allProducts));

        }

        // append the dom with the appropriate images
        this.image1 = document.getElementById("image1").src = product1.file_name;
        this.image2 = document.getElementById("image2").src = product2.file_name;
        this.image3 = document.getElementById("image3").src = product3.file_name;

        this.image1 = product1.id;
        this.image2 = product2.id;
        this.image3 = product3.id;
    },

    tallyVote: function (id, index1, index2, index3) {
        // totalVotes += 1; // increments the tracker 'votes' property by 1 (it started at 0).
        // totalDisplayCount += productsToDisplay;

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
                product.voteCount += 1;
                currentSessionVoteCount += 1;
            }
        });

        // console.log('totalVotes = ' + totalVotes);
        localStorage.setItem('allProductsStr', JSON.stringify(allProducts));

        var totalVotes = 0;
        var totalDisplayCount = 0;

        for (var i = 0; i < allProducts.length; i++) {
            // var table = document.getElementById('results');
            // var row = document.createElement('tr');
            var product = allProducts[i];
            totalVotes = totalVotes + product.voteCount;
            console.log('total votes: ' + totalVotes);
            totalDisplayCount = totalDisplayCount + product.displayCount;
            console.log('totalDisplayCount ' + totalDisplayCount);
            console.log('currentSessionVoteCount: ' + currentSessionVoteCount);

            localStorage.setItem('allProductsStr', JSON.stringify(allProducts));


            if (currentSessionVoteCount > 24) {
                resetSessionVoteCounter();
                this.render(totalVotes, totalDisplayCount);
            }
        }
    },

    render: function (totalVotes, totalDisplayCount) {

        this.displaySection.removeEventListener('click', voteHandler);
        document.getElementById('title').innerHTML = "<h3>Market Analysis Summary</h3>";
        // document.getElementById('title').style.backgroundColor = 'lightgrey';
        document.getElementById('display').style.display = 'none';
        document.getElementById('tableDiv').style.display = 'block';

        for (var i = 0; i < allProducts.length; i++) {
            var table = document.getElementById('results');
            var row = document.createElement('tr');
            var product = allProducts[i];
            product.votePercentage = Math.round(product.voteCount / totalVotes * 100);
            var productCell = document.createElement('td');
            var voteCountCell = document.createElement('td');
            var displayCountCell = document.createElement('td');
            var votePercentage = document.createElement('td');
            productCell.innerText = product.name;
            voteCountCell.innerText = product.voteCount;
            displayCountCell.innerText = product.displayCount;
            votePercentage.innerText = product.votePercentage + '%';
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
            allVotes.push(product.voteCount);
            allDisplays.push(product.displayCount);
            allPercentages.push(product.votePercentage);
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

    }
}

tracker.displaySection.addEventListener('click', voteHandler);

function voteHandler() {
    if (event.target.id !== 'display') {
        tracker.tallyVote(event.target.id);
        tracker.displayOptions();
    }
}



// Call instantiateProducts function. This is the initial function call on initial page load only.

document.getElementById("tableDiv").style.display = "none";

var allProductsStr = localStorage.getItem('allProductsStr');

if (allProductsStr) {
    allProducts = JSON.parse(allProductsStr);
    resetSessionVoteCounter();

} else {
    resetSessionVoteCounter();
    instantiateProducts();


}

tracker.displayOptions();




