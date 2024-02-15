const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const logo = document.querySelector('.logo');
logo.addEventListener('click', returnToHome);

function handleTabClick(tab) {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => handleTabClick(tab))
})

function returnToHome() {
    const homeTab = document.querySelector('[data-tab-target="#home"]');
    const homeSection = document.querySelector('#home');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    homeTab.classList.add('active');
    homeSection.classList.add('active');
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    var accountLine = document.getElementById("account-line");
    var profilePic = document.getElementById("profile-pic");
    dropdown.classList.toggle("showshit");
    accountLine.classList.toggle("bline");
    profilePic.classList.toggle("waiting");
}
