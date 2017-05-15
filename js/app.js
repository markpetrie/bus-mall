
// Global variables
var allProducts = [];

// CONSTRUCTOR & INSTANCES

function Product(name, id, file_name, vote_count, display_count, eligible_flag) {
    this.name = name;
    this.id = id;
    this.file_name = file_name;
    this.vote_count = vote_count;
    this.display_count = display_count;
    this.eligible_flag = eligible_flag;

    allProducts.push(this);
}

// Instantiate products 
function instantiateProducts() {
    var bag = new Product('bag', 'bag_1','img/bag.jpg', 0, 0, 'true');
    var banana = new Product('banana','banana_1', 'img/banana.jpg', 0, 0, 'true');
    var bathroom = new Product('bathroom', 'bathroom_1', 'img/bathroom.jpg', 0, 0, 'true');
    var boots = new Product('boots', 'boots_1', 'img/boots.jpg', 0, 0, 'true');
    var breakfast = new Product('breakfast', 'breakfast_1', 'img/breakfast.jpg', 0, 0, 'true');
    var bubblegum = new Product('bubblegum', 'bubblegum_1', 'img/bubblegum.jpg', 0, 0, 'true');
    var chair = new Product('chair', 'chair_1', 'img/chair.jpg', 0, 0, 'true');
    var cthulhu = new Product('cthulhu', 'cthulhu_1', 'img/cthulhu.jpg', 0, 0, 'true');
    var dog_duck = new Product('dog-duck', 'dog-duck_1', 'img/dog-duck.jpg', 0, 0, 'true');
    var dragon = new Product('dragon', 'dragon_1', 'img/dragon.jpg', 0, 0, 'true');
    var pen = new Product('pen', 'pen_1', 'img/pen.jpg', 0, 0, 'true');
    var pet_sweep = new Product('pet_sweep', 'pet_sweep_1', 'img/pet_sweep.jpg', 0, 0, 'true');
    var scissors = new Product('scissors', 'scissors_1', 'img/scissors.jpg', 0, 0, 'true');
    var shark = new Product('shark', 'shark_1', 'img/shark.jpg', 0, 0, 'true');
    var sweep = new Product('sweep', 'sweep_1', 'img/sweep.jpg', 0, 0, 'true');
    var tauntaun = new Product('tauntaun', 'tauntaun_1', 'img/tauntaun.jpg', 0, 0, 'true');
    var unicorn = new Product('unicorn', 'unicorn_1', 'img/unicorn.jpg', 0, 0, 'true');
    var usb = new Product('usb', 'usb_1', 'img/usb.jpg', 0, 0, 'true');
    var water_can = new Product('water_can', 'water_can_1', 'img/water_can.jpg', 0, 0, 'true');
    var wine_glass = new Product('wine_glass', 'wine_glass_1', 'img/wine_glass.jpg', 0, 0, 'true');


}

