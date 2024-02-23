const seatsNumber = document.querySelectorAll('.seat-number');
let seatCount = 8;
let totalSeat = 0;
let totalPrice = 0;
let sets = [];
for (const setNum of seatsNumber) {
    setNum.addEventListener('click', function () {
        if(sets.includes(setNum.innerText)){
            return;
        }
        

