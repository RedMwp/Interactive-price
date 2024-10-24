let pricingDue = document.querySelector(".pricing-due");
let trialBtn = document.querySelector(".cta-btn");
let checkBox = document.querySelector("#check");
let range = document.querySelector("#range");
let pricingAmount = document.querySelector(".pricing-amount");
let popup = document.querySelector(".popup");
let popupTimeline = document.querySelector(".popup-before");

let changeAmount = value => {
    let val = value;
    pricingAmount.innerText = value;
};
let getFormData = callback => {
    let amount = parseInt(range.value);
    let due = pricingDue.innerText;

    callback({
        due,
        amount
    });
};

let popupTimer = () => {
    let val = 95;

    const countdown = setInterval(() => {
        popupTimeline.style.width = `${val}%`;

        val--;

        if (val == 0) {
            clearInterval(countdown);

            popup.classList.remove("active");
        }
    }, 50);
};

range.oninput = () => {
    let val = range.value;
    changeAmount(`$${val}`);
};

checkBox.onclick = () => {
    if (checkBox.checked) {
        pricingDue.innerText = "year";
        range.min = 20;
        range.value = 20;

        changeAmount("$20.00");
    } else {
        pricingDue.innerText = "month";
        changeAmount("$16.00");
        range.min = 16;
        range.value = 16;
    }
};

trialBtn.onclick = () => {
    getFormData(data => {
        console.log(data);
    });
    popup.classList.add("active");
    popupTimer();
};