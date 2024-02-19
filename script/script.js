let count = 0;
const price = 550;
const NEW15 = 0.15;
const Couple20 = 0.2;
const busClass = "Economoy";

// document.getElementById('coupon').addEventListener('click', () =>{
//     const couponCode = document.getElementById('coupon').value;
//     console.log(couponCode);

//     grandTotalCountCoupon(couponCode);
// });

// disabling initially
const inputNumber = document.getElementById("phNumber");
const nextKey = document.getElementById("next");
const couponContainerDiv = document.getElementById("couponContainer");

console.log(couponContainerDiv.children[0]);

disabled(nextKey);
disabled(inputNumber);
disabled(couponContainerDiv.children[0]);
disabled(couponContainerDiv.children[1]);

const seats = document.querySelectorAll(".bookSeat");

for (var i = 0; i < seats.length; i++) {
  const seat = seats[i];

  seat.addEventListener("click", () => {
    // get seat number
    const seatName = seat.innerText;
    const selectedSeatContainer = document.getElementById("fare");

    const p1 = document.createElement("p");
    p1.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = busClass;
    const p3 = document.createElement("p");
    p3.innerText = price;

    const div = document.createElement("div");

    // console.log(div);
    addFlexStyle(div);
    flexStyleGrow(p1);
    flexStyleGrow(p2);
    flexStyleGrow(p3);

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    count++; // increment sear selection
    console.log("count", count);

    //can only take 4 tickets
    if (count <= 4) {
      document.getElementById("bookingCounter").innerText = count;
      let theSeatCounter = parseInt(
        document.getElementById("seatCount").innerText
      );
      document.getElementById("seatCount").innerText = theSeatCounter - 1;
      addGreenStyle(seat);
      // console.log(seat.innerText);
      selectedSeatContainer.appendChild(div);

      totalCount("total");
      totalCount("grandTotal");

      if (count === 4) {
        // document.getElementById("couponContainer").classList.remove("hidden");
        enabled(couponContainerDiv.children[0]);
        enabled(couponContainerDiv.children[1]);
      }

      //phone number next key validation / enable

      if (count >= 1) {
        enabled(inputNumber);

        // console.log(inputNumber);
        // console.log(nextKey);

        inputNumber.addEventListener("keyup", () => {
          const parseInputNumber = parseInt(inputNumber.value);
        //   console.log(parseInputNumber);
          if (!isNaN(parseInputNumber)) {
            enabled(nextKey);
          }
        });
      }
      

      // Enabling a disabled button to enable it again

      // grandTotalCount("grandTotal");
    } else {
      alert("You are unable to select more!");
    }
  });
}

function addGreenStyle(e) {
  e.style.backgroundColor = "#1DD100";
  disabled(e);
}

function addFlexStyle(e) {
  e.style.display = "flex";
  e.style.flexDirection = "row";
}

function flexStyleGrow(e) {
  e.style.flexGrow = 1;
}

function totalCount(e) {
  let totalCount = parseInt(document.getElementById(e).innerText);
  document.getElementById(e).innerText = totalCount + price;
}

function enabled(e) {
  //   e.setAttribute("disabled", false);
  e.disabled = false;
  //   console.log(e);
}

function disabled(e) {
  e.setAttribute("disabled", true);
}

function hasCoupon(c) {
  const couponCode = document.getElementById(c).value;
  console.log(couponCode);

  let totalGrandCount = parseInt(
    document.getElementById("grandTotal").innerText
  );
  console.log(totalGrandCount);

  if (couponCode === "NEW15") {
    const discount = totalGrandCount * NEW15;
    document.getElementById("grandTotal").innerText =
      totalGrandCount - discount;
    document.getElementById("couponContainer").classList.add("hidden");
  } else if (couponCode === "Couple 20") {
    const discount = totalGrandCount * Couple20;
    document.getElementById("grandTotal").innerText =
      totalGrandCount - discount;
    document.getElementById("couponContainer").classList.add("hidden");
  } else {
    alert("Please provide a valid coupon code!");
  }
}
