

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



