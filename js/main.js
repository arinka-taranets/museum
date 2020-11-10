$(function () {
    // click
    const $header = $(".header");
    $(".js-menu-opener").on("click", function () {
        $header.toggleClass("active");
    });
    $("nav.menu a").on("click", function () {
        $header.removeClass("active");
    });

    const menuBtn = document.querySelector(".menu-btn");
    const subMenuBtn = document.querySelector(".sub-menu-btn");
    const aside = document.querySelector(".aside");
    menuBtn.addEventListener("click", function () {
        aside.classList.toggle("aside-open");
        menuBtn.classList.toggle("close");
    });
    subMenuBtn.addEventListener("click", function () {
        aside.classList.toggle("sub-menu-open");
        removeSubmenu();
    });
});

function toggleSubmenu(el) {
    let subMenu = aside.querySelector(".sub-menu");
    if (el.children[1]) {
        createSubmenu(el);
    } else if (aside.contains(subMenu)) {
        removeSubmenu();
    } else {
        return;
    }
}

function createSubmenu(el) {
    let subMenuContainer = document.createElement("div");
    subMenuContainer.className = "sub-menu";
    let subMenuItem = el.children[1].cloneNode(true);
    let subMenuItemList = [...subMenuItem.children];
    subMenuItemList.forEach((item, index) => {
        item.classList.add("off-menu");
        item.style.setProperty("--delay", `${index * 40}ms`);
    });
    aside.classList.toggle("sub-menu-open");
    aside.appendChild(subMenuContainer);
    subMenuContainer.appendChild(subMenuItem);
    setTimeout(function () {
        subMenuItemList.forEach((item) => {
            item.classList.remove("off-menu");
            item.classList.add("on-menu");
        });
    }, 200);
}
function removeSubmenu() {
    let subMenu = aside.querySelector(".sub-menu");
    let subMenuItemList = [...subMenu.children[0].children];
    if (aside.contains(subMenu)) {
        subMenuItemList.forEach((item) => {
            item.classList.add("off-menu");
            item.classList.remove("on-menu");
        });
        setTimeout(function () {
            aside.removeChild(subMenu);
        }, 500);
    }
}
