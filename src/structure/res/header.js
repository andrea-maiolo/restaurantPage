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
const headerGenerator = (function() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add("header");

    const logoTop = document.createElement('img');
    logoTop.src = "styles/img/medium-size.svg";
    logoTop.classList.add("logo");

    const navTop = document.createElement('nav');
    navTop.classList.add("right");

    // const ulTop = document.createElement('ul');
    // ulTop.classList.add("right");

    const li1Top = document.createElement('li');
    const a1Top = document.createElement('a');
    a1Top.innerHTML = "Menù";
    a1Top.href = "#";
    li1Top.appendChild(a1Top);

    const li2Top = document.createElement('li');
    const a2Top = document.createElement('a');
    a2Top.innerHTML = "Stories";
    a2Top.href = "#";
    li2Top.appendChild(a2Top);

    const li3Top = document.createElement('li');
    const a3Top = document.createElement('a');
    a3Top.innerHTML = "Reservations";
    a3Top.href = "#";
    li3Top.appendChild(a3Top);

    // ulTop.appendChild(li1Top);
    // ulTop.appendChild(li2Top);
    // ulTop.appendChild(li3Top);

    // navTop.appendChild(ulTop);

    navTop.appendChild(li1Top);
    navTop.appendChild(li2Top);
    navTop.appendChild(li3Top);

    header.appendChild(logoTop);
    header.appendChild(navTop);

    content.appendChild(header);

    return content
})();

// export {
//     headerGenerator
// }