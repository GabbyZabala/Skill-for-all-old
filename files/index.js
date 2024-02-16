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

const vicon = document.querySelectorAll('[data-view-protocol]');
const vselected = document.querySelectorAll('[data-view-selected]');

    function viewChoice(view) {
        const target = document.querySelector(view.dataset.viewProtocol);
        vselected.forEach(selected => {
            selected.classList.remove('active');
        });
        vicon.forEach(icon => {
            icon.classList.remove('active-icon');
        });
        view.classList.add('active-icon');
        target.classList.add('active');
    }

    vicon.forEach(view => {
        view.addEventListener('click', () => viewChoice(view));
    });

var iCD = document.getElementById("icon-cd");
var iCDland = document.getElementById("icon-landing");
var iCDcounty = document.getElementById("view-main");

    function theVaxIcon() {
        iCDcounty.classList.toggle("view-center-design");
        iCDcounty.classList.toggle("view-design");
        iCDland.classList.toggle("pannyseen");
        iCD.classList.toggle("ico-wid");
        iCD.classList.toggle("Vax");
        iCD.classList.remove("Vee");
        iCD.classList.remove("Val");
    }

    function theVeeIcon() {
        iCDcounty.classList.toggle("view-center-design");
        iCDcounty.classList.toggle("view-design");
        iCDland.classList.toggle("pannyseen");  
        iCD.classList.toggle("ico-wid");
        iCD.classList.remove("Vax");
        iCD.classList.toggle("Vee");
        iCD.classList.remove("Val");
    }

    function theValIcon() {
        iCDcounty.classList.toggle("view-center-design");
        iCDcounty.classList.toggle("view-design");
        iCDland.classList.toggle("pannyseen");
        iCD.classList.toggle("ico-wid");
        iCD.classList.remove("Vax");
        iCD.classList.remove("Vee");
        iCD.classList.toggle("Val");
    }
