let random_id = Math.ceil(Math.random() * 10000)
console.log(random_id)
let a = document.getElementsByClassName("icon")[0];
let filter_icon_container = document.getElementById("filter-icon-container");
let nav = document.getElementById("nav")
let searchbox = document.getElementById("searchbox");
let searchbutton = document.getElementById("searchbutton");
let searchBgContainer = document.getElementById("searchBgContainer");
let inputvalue = ""
let hostelsData = []
let main_page_bg = document.getElementById("main_page_bg")
let display_hostel_detail_view = document.getElementById("display_hostel_detail_view");
let view_more_button = document.getElementById("view_more_button")
let clearFilterButton = document.getElementById("clearFilterButton")
let page_1 = document.getElementById("page_1");
let page_2 = document.getElementById("page_2");
let page_3 = document.getElementById("page_3");
let to_page_3 = document.getElementById("open_profile_button");
let back_to_explore = document.getElementById("back_to_explore");
to_page_3.onclick = () => {
    page_3.classList.toggle("make_page_none");
    page_2.classList.toggle("make_page_none")
}
back_to_explore.onclick = () => {
    page_3.classList.toggle("make_page_none");
    page_2.classList.toggle("make_page_none")
}


clearFilterButton.onclick = () => {
    getHostelData()
    inputvalue = ""
    searchbox.value = ""
}

view_more_button.onclick = () => {
    main_page_bg.classList.toggle("d-none")
    display_hostel_detail_view.classList.toggle("make_none")
}

//_____________________________filter ids small________________________________
let getFilterSmall = document.getElementById("makefilter");
let locationFilteEle = document.getElementById("locationFilter-sm");
let wifiFilteEle = document.getElementById("wifiFilter-sm");
let waterFilteEle = document.getElementById("waterFilter-sm");
let getRating = 3
let rating_3 = document.getElementById("rating_3").onclick = () => {
    getRating = 3;
};
let rating_4 = document.getElementById("rating_4").onclick = () => {
    getRating = 4;
};
let rating_5 = document.getElementById("rating_5").onclick = () => {
    getRating = 5;
};
  

let bedShare = 2
let bed_2 = document.getElementById("bed-2").onclick = () => {
    bedShare = 2
}
let bed_3 = document.getElementById("bed-3").onclick = () => {
    bedShare = 3
}
let bed_4 = document.getElementById("bed-4").onclick = () => {
    bedShare = 4
}





//_________________________________filter ids large_________________________
let getfilterLarge = document.getElementById("filterLarge");
let locationFilteEleLg = document.getElementById("locationFilter-lg");
let wifiFilteEleLg = document.getElementById("wifiFilter-lg");
let waterFilteEleLg = document.getElementById("waterFilter-lg");
let getRatingLg = 3
let rating_3Lg = document.getElementById("rating_3Lg").onclick = () => {
    getRatingLg = 3;
};
let rating_4Lg = document.getElementById("rating_4Lg").onclick = () => {
    getRatingLg = 4;
};
let rating_5Lg = document.getElementById("rating_5Lg").onclick = () => {
    getRatingLg = 5;
};

let bedShareLg = 2
let bed_2Lg = document.getElementById("bed-2Lg").onclick = () => {
    bedShareLg = 2
}
let bed_3Lg = document.getElementById("bed-3Lg").onclick = () => {
    bedShareLg = 3
}
let bed_4Lg = document.getElementById("bed-4Lg").onclick = () => {
    bedShareLg = 4
}

getFilterSmall.addEventListener("click", getfilterSearch);
getfilterLarge.addEventListener("click", getfilterSearchLg);

a.addEventListener('click', () => {
    nav.classList.toggle("d_none")
    filter_icon_container.classList.toggle('icon-down')
})

let cardsContainer = document.getElementById("cards-bg-container");

//___________________________________________createing and appending  the cards______________________________________

function createAndAppendCard(item) {
    let {
        name,
        address,
        location,
        id,
        image,
        description,
        price
    } = item;
    let {
        rating
    } = item.facilities;

    let containerid = "containerId" + id;
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", containerid)
    cardContainer.classList.add("card-container");
    cardsContainer.appendChild(cardContainer);
    let cardImge = document.createElement("img");
    cardImge.setAttribute("src", image);
    cardImge.setAttribute("class", "card-image");
    cardContainer.appendChild(cardImge)
    let cardTextContainer = document.createElement("div");
    cardTextContainer.classList.add("card-text-bg-container");
    cardContainer.appendChild(cardTextContainer);
    let cardNameHeading = document.createElement("h1");
    cardNameHeading.classList.add("card-heading");
    cardNameHeading.textContent = name;
    cardTextContainer.appendChild(cardNameHeading)

    let cardAddrHeading = document.createElement("p");
    cardAddrHeading.classList.add("card-address");
    cardAddrHeading.textContent = address;
    cardTextContainer.appendChild(cardAddrHeading);

    let ratingStars = document.createElement("p");
    ratingStars.style.color = "#f19116"
    let h_rating = ""
    for (let i = 0; i < rating; i++) {
        h_rating += "&#9733;"
    }
    ratingStars.innerHTML = h_rating;
    cardTextContainer.appendChild(ratingStars);

    let card_click = document.getElementById(containerid);
    card_click.onclick = () => {
        main_page_bg.classList.toggle("d-none")
        display_hostel_detail_view.classList.remove("make_none")
        let detail_hostel_image = document.getElementById("detail_hostel_image").src = image
        let detail_name_of_hostel = document.getElementById("detail_name_of_hostel").textContent = name
        let detail_address_of_hostel = document.getElementById("detail_address_of_hostel").textContent = location
        let detail_description_of_hostel = document.getElementById("detail_description_of_hostel").textContent = description
        let detail_prise_of_hostel = document.getElementById("detail_prise_of_hostel").textContent = price + "/-"

        let detail_rating = document.getElementById("detail_rating").innerHTML = h_rating;
    }
}

// ______________________________________________creating cards function_______________________________________
function createCards() {
    cardsContainer.textContent = "";
    let count = 0;
    for (let item of hostelsData) {
        if (item.name.toLocaleLowerCase().includes(inputvalue.toLocaleLowerCase())) {
            createAndAppendCard(item);
            count = count + 1;
        }
    }
    if (count === 0) {
        let nodataimg = document.createElement("img");
        nodataimg.src = "https://res.cloudinary.com/dldcgj0mx/image/upload/v1666773543/nodata1_z41sip.jpg"
        nodataimg.style.height = "600px"

        cardsContainer.appendChild(nodataimg)
    }
}
//____________________________________________________________filter search small device________________________________________________________

function getfilterSearch() {

    cardsContainer.textContent = "";
    let count = 0;
    for (let item of hostelsData) {
        let {
            location,
            wifi,
            hotwater,
            rating,
            bedsharing
        } = item.facilities;

        if ((locationFilteEle.value == location) && (wifiFilteEle.checked == wifi) && (waterFilteEle.checked == hotwater) && (getRating == rating) && (bedsharing.includes(bedShare))) {
            createAndAppendCard(item);
            count = count + 1;
        }
    }
    if (count === 0) {
        let nodataimg = document.createElement("img");
        nodataimg.src = "https://res.cloudinary.com/dldcgj0mx/image/upload/v1666773543/nodata1_z41sip.jpg"
        nodataimg.style.height = "600px"

        cardsContainer.appendChild(nodataimg)
    }
}

//___________________________________________filter search large device________________________________________________________

function getfilterSearchLg() {

    cardsContainer.textContent = "";
    let count = 0;
    for (let item of hostelsData) {
        let {
            location,
            wifi,
            hotwater,
            rating,
            bedsharing
        } = item.facilities;

        if ((locationFilteEleLg.value == location) && (wifiFilteEleLg.checked == wifi) && (waterFilteEleLg.checked == hotwater) && (getRatingLg == rating) && (bedsharing.includes(bedShareLg))) {
            createAndAppendCard(item);

            count = count + 1;
        }
    }
    if (count === 0) {
        let nodataimg = document.createElement("img");
        nodataimg.src = "https://res.cloudinary.com/dldcgj0mx/image/upload/v1666773543/nodata1_z41sip.jpg"
        nodataimg.style.height = "600px"

        cardsContainer.appendChild(nodataimg)
    }
}
// ________________________________________name search function_________________________________________________
function getnamesearch(event) {
    inputvalue = searchbox.value
    createCards();
}
//_______________________________________fetching the hostel cards Data__________________________________________
let url = "https://api.npoint.io/a879d25f90f89e0b8e9c"
let options = {
    method: "GET"
};
let getHostelData = async () => {
    let response = await fetch(url, options);
    hostelsData = await response.json();
    createCards(hostelsData)
}
// _______________________________________________________________________
getHostelData()
searchbox.addEventListener("keyup", getnamesearch)




//_______________________________________hostel detail view js__________________________________________
let registration_message = document.getElementById("registration_message");
let login_message = document.getElementById("login_message");
let user_registration = document.getElementById("user_registration");
let valid_user_mail = document.getElementById("valid_user_mail");
let valid_user_password = document.getElementById("valid_user_password");
let valid_user_number = document.getElementById("valid_user_number");
let valid_user_name = document.getElementById("valid_user_name");


let updated_user_id = document.getElementById("updated_user_id");
let updated_user_name = document.getElementById("updated_user_name");
let updated_user_mail = document.getElementById("updated_user_mail");
let updated_user_mobile = document.getElementById("updated_user_mobile");

let user_registred_data = {
    mail: "",
    password: ""
};
user_registration.onclick = (event) => {
    event.preventDefault()



    updated_user_id.textContent = valid_user_name.value + "-" + random_id;
    updated_user_name.textContent = valid_user_name.value;
    updated_user_mail.textContent = valid_user_mail.value;
    updated_user_mobile.textContent = valid_user_number.value;



    user_registred_data.mail = valid_user_mail.value;
    user_registred_data.password = valid_user_password.value;
    registration_message.innerHTML = "Registration Done Successfully 	&#128512";
    registration_message.classList.add("registration_message_style")
}


let redirect_hostelview = document.getElementById("redirect_hostelview");
redirect_hostelview.onclick = () => {
    let entered_user_mail = document.getElementById("entered_user_mail").value;
    let entered_user_password = document.getElementById("entered_user_password").value;
    console.log(user_registred_data.mail, user_registred_data.password)
    console.log(entered_user_mail, entered_user_password)




    if ((user_registred_data.mail == entered_user_mail) && (user_registred_data.password == entered_user_password) && (entered_user_mail != "") && (entered_user_password != "")) {
        page_1.classList.toggle("make_page_none")
        page_2.classList.toggle("make_page_none");
    } else {
        alert("enter a valid credientiels")

    }
}
let redirect_homepage = document.getElementById("redirect_homepage");
redirect_homepage.onclick = () => {
    page_1.classList.toggle("make_page_none")
    page_2.classList.toggle("make_page_none");


}



//_____________________________________________________chat bot____________________________________________




let chatbotMsgList = {
    "hi": ["need a hostel", "how to use filter option"],
}
let wish = ["hi", "Hi", "goodmorning", "GoodMorning", "good morning", "Goodmorning"]
let user_message = ""
let userInput = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");
let sendButton = document.getElementById("sendMsgBtn");
sendMsgBtn.onclick = function() {
    let userVal = userInput.value;
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContainerEl)
    let myMsg = document.createElement("span");
    myMsg.textContent = userVal;
    myMsg.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(myMsg);
    user_message = userVal
    userInput.value = "";
    msgFromBot();
}

function msgFromBot() {
    let botMsgList = chatbotMsgList.length;
    let randomInd = chatbotMsgList["hi"];
    let botMsgContainer = document.createElement("div");
    botMsgContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(botMsgContainer);
    if (wish.includes(user_message)) {
        let botMsg1 = document.createElement("span");
        botMsg1.classList.add("msg-from-chatbot");
        botMsg1.textContent = "Hi! i am very happy to help u";
        botMsgContainer.appendChild(botMsg1);
        botMsgContainer.appendChild(document.createElement("br"))

        let botMsg2 = document.createElement("span");
        botMsg2.classList.add("msg-from-chatbot");
        botMsg2.textContent = "these are frequently asked questions";
        botMsgContainer.appendChild(botMsg2);
        botMsgContainer.appendChild(document.createElement("br"))
        let msg_count = 1
        for (i of randomInd) {
            let botMsg = document.createElement("span");
            botMsg.classList.add("msg-from-chatbot");
            botMsg.textContent = msg_count + " )" + i;
            botMsgContainer.appendChild(botMsg);
            botMsgContainer.appendChild(document.createElement("br"))
            msg_count += 1
        }
    } else if (user_message == 1) {
        let botMsg = document.createElement("span");
        botMsg.classList.add("msg-from-chatbot");
        botMsg.textContent = "u can visite our website";
        botMsgContainer.appendChild(botMsg);
        botMsgContainer.appendChild(document.createElement("br"))
    } else if (user_message == 2) {
        let botMsg = document.createElement("span");
        botMsg.classList.add("msg-from-chatbot");
        botMsg.textContent = "wait a minute our team member will reach u";
        botMsgContainer.appendChild(botMsg);
        botMsgContainer.appendChild(document.createElement("br"))
    } else {
        let botMsg = document.createElement("span");
        botMsg.classList.add("msg-from-chatbot");
        botMsg.textContent = "thanks feel free to reach us..";
        botMsgContainer.appendChild(botMsg);
        botMsgContainer.appendChild(document.createElement("br"))
    }
}




let chat_bot_message_container = document.getElementById("chat_bot_message_container");
let chat_bot_pop_button = document.getElementById("chat_bot_pop_button");
chat_bot_pop_button.onclick = () => {
    chat_bot_message_container.classList.toggle("make_page_none");
    page_2.classList.toggle("make_page_none")
}
let quit_message_to_detail = document.getElementById("quit_message_to_detail").onclick = () => {
    chat_bot_message_container.classList.toggle("make_page_none");
    page_2.classList.toggle("make_page_none")
}