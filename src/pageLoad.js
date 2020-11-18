//  <div class="header">
//         <img src="styles/medium-size.svg" class="logo">
//     <nav class="right">
//         <ul class="right">
//             <li><a href="#">Menù</a></li>
//             <li><a href='#'>Stories</a></li>
//             <li><a href='#'>Reservations</a></li>
//         </ul>
//     </nav>
//     </div> 

//the above code is gonna be generated by this IFFE
const pageLoad = (function() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.id='container';

    const header = document.createElement('div');
    header.classList.add("header");

    const logoA = document.createElement('a');
    logoA.classList.add('logo-link');
    const logoTop = document.createElement('img');
    logoTop.src = "../dist/styles/medium-size.svg";
    logoTop.classList.add("logo");
    logoA.href='#';
    logoA.appendChild(logoTop);

    const navTop = document.createElement('nav');
    navTop.classList.add("right");

    const li1Top = document.createElement('li');
    const a1Top = document.createElement('a');
    a1Top.innerHTML = "Menù";
    a1Top.id='a1Top';
    a1Top.href = "#";
    li1Top.appendChild(a1Top);

    const li2Top = document.createElement('li');
    const a2Top = document.createElement('a');
    a2Top.innerHTML = "Stories";
    a2Top.id='a2Top';
    a2Top.href = "#";
    li2Top.appendChild(a2Top);

    const li3Top = document.createElement('li');
    const a3Top = document.createElement('a');
    a3Top.innerHTML = "Reservations";
    a3Top.id='a3Top';
    a3Top.href="#"
    li3Top.appendChild(a3Top);

    navTop.appendChild(li1Top);
    navTop.appendChild(li2Top);
    navTop.appendChild(li3Top);

    header.appendChild(logoA);
    header.appendChild(navTop);

    content.appendChild(header);

{
    /* <div class="imagesP">
    <div id="firstImg" class=images>
        <h1>Welcome to Mario's!</h1>
        <p>Modern Italian cuisine, world-class mixology, and dramatic design.<br>
        Mario's is an award-winning restaurant which uses the finest ingredients<br>
        and expert traditional techniques to create timeless yet innovative signature dishes.</p></div>
    <div id="secondImg" class="images"><p><a href='#' >Listen to the <strong>stories</strong> of the people that have exerienced our great cusine</strong></a></p></div>
    <div id="thirdImg" class="images"><p><a href="#" >Take a look at our delicious <strong>menù</strong></a></p></div>
    </div> */
}
//the above code is gonna be generated by this IFFE

    const divImagesPannel = document.createElement('div');
    divImagesPannel.classList.add("imagesP");

    const divFirstImg = document.createElement('div');
    divFirstImg.id = "firstImg";
    divFirstImg.classList.add("images");

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.innerHTML = "Welcome to Mario's!";

    const divFirstImgP = document.createElement('p');
    divFirstImgP.innerHTML = "Modern Italian cuisine, and dramatic design.\<br>Mario's is an award-winning restaurant \<br>which uses the finest ingredients\<br>and expert traditional techniques to create \<br> timeless yet innovative signature dishes.";

    divFirstImg.appendChild(welcomeMessage);
    divFirstImg.appendChild(divFirstImgP);

    const divSecondImg = document.createElement('div');
    divSecondImg.id = "secondImg";
    divSecondImg.classList.add("images");

    const divSecondImgP = document.createElement('p');
    const divSecondImgA = document.createElement('a');
    divSecondImgA.innerHTML = "Listen to the \<strong>stories\</strong> of the people that have exerienced our great cusine";
    divSecondImgA.href = '#';

    divSecondImgP.appendChild(divSecondImgA);
    divSecondImg.appendChild(divSecondImgP)


    const divThirdImg = document.createElement('div');
    divThirdImg.id = "thirdImg";
    divThirdImg.classList.add("images");

    const divThirdImgP = document.createElement('p');
    const divThirdImgA = document.createElement('a');
    divThirdImgA.innerHTML = 'Take a look at our delicious \<strong>menù\</strong>';
    divThirdImgA.href = '#';

    divThirdImgP.appendChild(divThirdImgA);
    divThirdImg.appendChild(divThirdImgP);

    divImagesPannel.appendChild(divFirstImg);
    divImagesPannel.appendChild(divSecondImg);
    divImagesPannel.appendChild(divThirdImg);

    container.appendChild(divImagesPannel);

    content.appendChild(container);
    {
    /* <footer>
    <nav class="left">
        <ul class="left">
            <li><a href="#">Contact</a></li>
            <li><a href='#'><img height="20px" src="styles/instagram.svg"></a></li>
        </ul>
    </nav>
        <img class="logo" src="styles/medium-size.svg">
    <nav class="rightB">
        <ul class="rightB">
            <li><a href='#'>Allergen chart</a></li>
            <li><a href='#'>Accessibility policy</a></li>
        </ul>
    </nav>
    </footer> */
}

//the above code is gonna be generated by this IFFE

    const footer = document.createElement('footer');
    footer.id = "footer";
    const navLeft = document.createElement('nav');
    navLeft.classList.add("left");

    const li1Bot = document.createElement('li');
    const a1Bot = document.createElement('a');
    a1Bot.href = "#";
    a1Bot.innerHTML = "Contact";
    li1Bot.appendChild(a1Bot);

    const li2Bot = document.createElement('li');
    const a2Bot = document.createElement('a');
    a2Bot.href = "#";
    const insta = document.createElement('img');
    insta.src = "../dist/styles/insta.svg";
    insta.classList.add('insta');
    a2Bot.appendChild(insta);
    li2Bot.appendChild(a2Bot);

    navLeft.appendChild(li1Bot);
    navLeft.appendChild(li2Bot);

    const logoBot = document.createElement('img');
    logoBot.src = "../dist/styles/medium-size.svg";
    logoBot.classList.add("logo");

    const navRight = document.createElement('nav');
    navRight.classList.add("rightB");

    const ulRight = document.createElement('ul');
    ulRight.classList.add("rightB");

    const li3Bot = document.createElement('li');
    const a3Bot = document.createElement('a');
    a3Bot.href = "#";
    a3Bot.innerHTML = "Allergen chart";
    li3Bot.appendChild(a3Bot);

    const li4Bot = document.createElement('li');
    const a4Bot = document.createElement('a');
    a4Bot.href = "#";
    a4Bot.innerHTML = "Accessibility policy";
    li4Bot.appendChild(a4Bot);

    navRight.appendChild(li3Bot);
    navRight.appendChild(li4Bot);

    footer.appendChild(navLeft);
    footer.appendChild(logoBot);
    footer.appendChild(navRight);

    content.appendChild(footer);

    return content
})();

export {pageLoad}
