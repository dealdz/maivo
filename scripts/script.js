function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

function spin1() {
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("speenWheel");
    const transitionTime = 2; // زمن الانتقال بالثواني
    let SelectedItem = "";

    // Shuffle 450 because class box1 has been added 90 degrees at the beginning. minus 40 per item so that the arrow position fits in the middle.
    // Each item has a 12.5% ​​win rate except the bicycle item which only has about a 4% chance of winning.
    // Items in the form of iPads and Samsung Tabs will never win.
    // let Bike = shuffle([2210]); //Possibility: 33% or 1/3
    // Proses
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + 1700 + "deg)";
    element.classList.remove("animate");
    setTimeout(function() {
        element.classList.add("animate");
    }, 5000);

    // Munculkan Alert
    setTimeout(function() {
        fail.play();
        jQuery(".spinwin-modal1").show();
    }, 5500);

    // Delay and set to normal state
    setTimeout(function() {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(1700deg)";
    }, 6000);
}
jQuery(document).on("click", ".downloadnow", function() {
    jQuery(".spinwin-modal1").hide();
})
function spin2() {
    // Play the sound
    wheel.play();
    // Inisialisasi variabel
    const box = document.getElementById("box");
    const element = document.getElementById("speenWheel");
	const targetAngle = 3000; // الزاوية المحددة للحصول على النتيجة المرغوبة
	const transitionTime = 0.5;

    let SelectedItem = "";

    // Shuffle 450 because class box1 has been added 90 degrees at the beginning. minus 40 per item so that the arrow position fits in the middle.
    // Each item has a 12.5% ​​win rate except the bicycle item which only has about a 4% chance of winning.
    // Items in the form of iPads and Samsung Tabs will never win.
    // let Bike = shuffle([2210]); //Possibility: 33% or 1/3
    // Proses
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + 3000 + "deg)";
    element.classList.remove("animate");
    setTimeout(function() {
        element.classList.add("animate");
    }, 5000);

    // Munculkan Alert
    setTimeout(function() {
        applause.play();
        jQuery(".spinwin-modal2").show();
    }, 5500);

    // Delay and set to normal state
    setTimeout(function() {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(3000deg)";
    }, 6000);
}
jQuery(document).on("click", ".back-button", function() {
    jQuery(".spinwin-modal2").hide();
})