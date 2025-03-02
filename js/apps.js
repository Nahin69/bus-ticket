

const allBtn = document.getElementsByClassName("seat-btn");
const phoneNumber = document.getElementById("phoneNumber");
const nextBtn = document.getElementById("next-btn");
const applyBtn = document.getElementById("applybtn");





let ticketbtn = false;
let phoneNum = false;
let selectedSeat = 0;

applybtn.disabled = true;

for(const btn of allBtn){
    btn.addEventListener("click", function (event){
        
        if(selectedSeat >= 4){
            
            return;
          
        }



        const seatName = event.target.innerText;

        const seatClass = document.getElementById("selected-seat-num");


        event.target.setAttribute("disabled", true);
        event.target.classList.add("seatColor")
        

        
        ticketbtn = true;
        selectedSeat++;
        nextButton();
        

        // count area

        // const firstTicketCount = getConvertedValue("ticket-count");
        


        if(selectedSeat === 4){
            applyBtn.disabled = false;
            applyBtn.classList.add("apply-btnColor")
            
        }
        

        

        const ticketCount = getConvertedValue("ticket-count");
        document.getElementById("ticket-count").innerText = ticketCount + 1;


        const seatCount = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText = seatCount - 1;



        const div = document.createElement("div");
        div.classList.add("seatClass")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatName;
        p2.innerText = "Economy";
        p3.innerText = "550";

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seatClass.appendChild(div);



        updateTotalCost(p3.innerText);
        updateGrandTotal();
        
    })
}


phoneNumber.addEventListener("input", function(){
    phoneNum = phoneNumber.value.trim() !== "";
    nextButton();
});


function nextButton(){
    if(ticketbtn && phoneNum){
        nextBtn.disabled = false;
        nextBtn.classList.add("next-btnColor")
        
    } else {
        nextBtn.disabled = true;
        
    }
}






function updateGrandTotal(status){
    const totalCost = getConvertedValue("total-price");
    
    if(status == undefined){
        
        document.getElementById("grand-total").innerText = totalCost;
    }
    else{
        const couponCode = document.getElementById("coupon-code").value;

        if(couponCode == "NEW15"){
            const discounted = totalCost * 0.15;
            document.getElementById("grand-total").innerText = totalCost - discounted;
            

            const discountedPrice = document.getElementById("discount-price")

            const div = document.createElement("div");
            div.classList.add("seatClass")

            const p1 = document.createElement("p");
            const p2 = document.createElement("p");

            p1.innerText = "Discount";
            p2.innerText = discounted;

            div.appendChild(p1);
            div.appendChild(p2);
            discountedPrice.appendChild(div);

            couponSection.style.display = "none";


        } else if(couponCode == "Couple 20"){
            const discounted = totalCost * 0.2;
            document.getElementById("grand-total").innerText = totalCost - discounted;




            const discountedPrice = document.getElementById("discount-price")

            const div = document.createElement("div");
            div.classList.add("seatClass")

            const p1 = document.createElement("p");
            const p2 = document.createElement("p");

            p1.innerText = "Discount";
            p2.innerText = discounted;

            div.appendChild(p1);
            div.appendChild(p2);
            discountedPrice.appendChild(div);

            couponSection.style.display = "none";




        } else{
            alert("please enter valid coupon code");
        }

    }
}



function updateTotalCost(value){
    const totalCost = getConvertedValue("total-price");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}



function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}







// const allBtn = document.getElementsByClassName("seat-btn");
// const phoneNumber = document.getElementById("phoneNumber");
// const nextBtn = document.getElementById("next-btn");
// const applyBtn = document.getElementById("applybtn");
// const couponSection = document.getElementById("coupon-section"); // Coupon input & button section

// let ticketbtn = false;
// let phoneNum = false;
// let selectedSeats = 0; // ট্র্যাক করবে কতটি সিট সিলেক্ট হয়েছে

// // ✅ Apply Button প্রথমে ডিজেবল থাকবে
// applyBtn.disabled = true;

// for (const btn of allBtn) {
//     btn.addEventListener("click", function (event) {
//         if (selectedSeats >= 4) return; // যদি ৪টি সিলেক্ট হয়ে যায়, তাহলে আর সিলেক্ট করা যাবে না

//         const seatName = event.target.innerText;
//         const seatClass = document.getElementById("selected-seat-num");

//         event.target.setAttribute("disabled", true); // একবার ক্লিক করলে ডিজেবল হবে
//         event.target.classList.add("seatColor");

//         ticketbtn = true;
//         selectedSeats++; // প্রতিবার ক্লিক করলে সিট সংখ্যা বাড়বে
//         nextButton();

//         // ✅ সিটের সংখ্যা আপডেট
//         document.getElementById("ticket-count").innerText = selectedSeats;
//         document.getElementById("seat-count").innerText = getConvertedValue("seat-count") - 1;

//         // ✅ ৪টি সিট হলে "Apply" বাটন এনাবল হবে
//         if (selectedSeats === 4) {
//             applyBtn.disabled = false;
//         }

//         // ✅ সিটের নাম দেখানোর জন্য নতুন div তৈরি
//         const div = document.createElement("div");
//         div.classList.add("seatClass");

//         const p1 = document.createElement("p");
//         const p2 = document.createElement("p");
//         const p3 = document.createElement("p");

//         p1.innerText = seatName;
//         p2.innerText = "Economy";
//         p3.innerText = "550";

//         div.appendChild(p1);
//         div.appendChild(p2);
//         div.appendChild(p3);
//         seatClass.appendChild(div);

//         updateTotalCost(p3.innerText);
//         updateGrandTotal();
//     });
// }

// // ✅ ফোন নাম্বার ইনপুট চেক করা হবে
// phoneNumber.addEventListener("input", function () {
//     phoneNum = phoneNumber.value.trim() !== "";
//     nextButton();
// });

// // ✅ "Next" বাটনের কন্ডিশন চেক করা হবে
// function nextButton() {
//     if (ticketbtn && phoneNum) {
//         nextBtn.disabled = false;
//         nextBtn.classList.add("next-btnColor");
//     } else {
//         nextBtn.disabled = true;
//     }
// }

// // ✅ "Apply" বাটনের কাজ
// applyBtn.addEventListener("click", function () {
//     updateGrandTotal(true);
// });

// // ✅ গ্র্যান্ড টোটাল আপডেট করার ফাংশন
// function updateGrandTotal(status) {
//     const totalCost = getConvertedValue("total-price");

//     if (status === undefined) {
//         document.getElementById("grand-total").innerText = totalCost;
//     } else {
//         const couponCode = document.getElementById("coupon-code").value;

//         if (couponCode === "NEW15") {
//             const discounted = totalCost * 0.15;
//             document.getElementById("grand-total").innerText = totalCost - discounted;

//             showDiscountSection("BDT " + discounted.toFixed(2));

//         } else if (couponCode === "Couple 20") {
//             const discounted = totalCost * 0.2;
//             document.getElementById("grand-total").innerText = totalCost - discounted;

//             showDiscountSection("BDT " + discounted.toFixed(2));

//         } else {
//             alert("Please enter a valid coupon code");
//         }
//     }
// }

// // ✅ ডিসকাউন্ট দেখানোর ফাংশন + Apply Button & Input Field Remove করা হবে
// // ✅ ডিসকাউন্ট দেখানোর ফাংশন + Apply Button & Input Field Remove করা হবে
// function showDiscountSection(discountAmount) {
//     const discountedPrice = document.getElementById("discount-price");

//     // ✅ আগের ডিসকাউন্ট রিমুভ করবে (ডাবল দেখাবে না)
//     discountedPrice.innerHTML = "";

//     const div = document.createElement("div");
//     div.classList.add("seatClass");

//     const p1 = document.createElement("p");
//     const p2 = document.createElement("p");

//     p1.innerText = "Discount";
//     p2.innerText = discountAmount;

//     div.appendChild(p1);
//     div.appendChild(p2);
//     discountedPrice.appendChild(div);

//     // ✅ Apply Button & Coupon Input Hide করে ফেলবে
//     couponSection.style.display = "none";
// }

// // ✅ টোটাল প্রাইস আপডেট করার ফাংশন
// function updateTotalCost(value) {
//     const totalCost = getConvertedValue("total-price");
//     const sum = totalCost + parseInt(value);
//     document.getElementById("total-price").innerText = sum;
// }

// // ✅ Helper function: যেকোনো ID এর ভ্যালুকে সংখ্যা হিসেবে রিটার্ন করবে
// function getConvertedValue(id) {
//     return parseInt(document.getElementById(id).innerText) || 0;
// }
