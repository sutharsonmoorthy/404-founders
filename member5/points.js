document.addEventListener("DOMContentLoaded", () => {

  /* ================= MEN ================= */

  const men2025 = [
    {pos:1,team:"PBKS",p:14,w:9,l:4,nr:1,nrr:0.372,for:"2447",against:"2395",pts:19,form:["W","L","W","W","W"]},
    {pos:2,team:"RCB",p:14,w:9,l:4,nr:1,nrr:0.301,for:"2357",against:"2321",pts:19,form:["W","L","N","W","W"]},
    {pos:3,team:"GT",p:14,w:9,l:5,nr:0,nrr:0.254,for:"2684",against:"2639",pts:18,form:["L","L","W","W","W"]},
    {pos:4,team:"MI",p:14,w:8,l:6,nr:0,nrr:1.142,for:"2472",against:"2301",pts:16,form:["L","W","L","W","W"]},
    {pos:5,team:"DC",p:14,w:7,l:6,nr:1,nrr:0.011,for:"2354",against:"2409",pts:15,form:["W","L","L","N","L"]},
    {pos:6,team:"SRH",p:14,w:6,l:7,nr:1,nrr:-0.241,for:"2519",against:"2451",pts:13,form:["W","W","W","N","L"]},
    {pos:7,team:"LSG",p:14,w:6,l:8,nr:0,nrr:-0.376,for:"2732",against:"2779",pts:12,form:["L","W","L","L","L"]},
    {pos:8,team:"KKR",p:14,w:5,l:7,nr:2,nrr:-0.305,for:"1995",against:"2075",pts:12,form:["L","N","L","W","W"]},
    {pos:9,team:"RR",p:14,w:4,l:10,nr:0,nrr:-0.549,for:"2603",against:"2773",pts:8,form:["W","L","L","L","W"]},
    {pos:10,team:"CSK",p:14,w:4,l:10,nr:0,nrr:-0.647,for:"2441",against:"2461",pts:8,form:["W","L","W","L","L"]}
  ];

  const men2024 = [
    {pos:1,team:"CSK",p:14,w:9,l:5,nr:0,nrr:0.45,for:"2500",against:"2350",pts:18,form:["W","W","L","W","W"]},
    {pos:2,team:"KKR",p:14,w:9,l:5,nr:0,nrr:0.32,for:"2450",against:"2380",pts:18,form:["W","L","W","W","W"]},
    {pos:3,team:"RR",p:14,w:8,l:6,nr:0,nrr:0.21,for:"2420",against:"2390",pts:16,form:["L","W","W","L","W"]},
    {pos:4,team:"RCB",p:14,w:7,l:7,nr:0,nrr:0.10,for:"2380",against:"2360",pts:14,form:["W","L","W","L","W"]},
    {pos:5,team:"DC",p:14,w:7,l:7,nr:0,nrr:-0.05,for:"2300",against:"2320",pts:14,form:["L","W","L","W","L"]},
    {pos:6,team:"SRH",p:14,w:6,l:8,nr:0,nrr:-0.12,for:"2280",against:"2330",pts:12,form:["W","L","L","W","L"]},
    {pos:7,team:"PBKS",p:14,w:6,l:8,nr:0,nrr:-0.18,for:"2260",against:"2340",pts:12,form:["L","L","W","L","W"]},
    {pos:8,team:"MI",p:14,w:5,l:9,nr:0,nrr:-0.25,for:"2240",against:"2380",pts:10,form:["L","W","L","L","L"]},
    {pos:9,team:"LSG",p:14,w:5,l:9,nr:0,nrr:-0.35,for:"2220",against:"2400",pts:10,form:["W","L","L","L","W"]},
    {pos:10,team:"GT",p:14,w:4,l:10,nr:0,nrr:-0.45,for:"2200",against:"2420",pts:8,form:["L","L","W","L","L"]}
  ];

  /* ================= WOMEN ================= */

  const women2025 = [
    {pos:1,team:"MI-W",p:8,w:6,l:2,nr:0,nrr:0.41,for:"1120",against:"980",pts:12,form:["W","W","L","W"]},
    {pos:2,team:"DC-W",p:8,w:5,l:3,nr:0,nrr:0.29,for:"1080",against:"1020",pts:10,form:["L","W","W","W"]},
    {pos:3,team:"RCB-W",p:8,w:4,l:4,nr:0,nrr:0.05,for:"1040",against:"1035",pts:8,form:["W","L","W","L"]},
    {pos:4,team:"UP-W",p:8,w:3,l:5,nr:0,nrr:-0.18,for:"990",against:"1050",pts:6,form:["L","L","W","L"]},
    {pos:5,team:"GG-W",p:8,w:2,l:6,nr:0,nrr:-0.35,for:"960",against:"1100",pts:4,form:["L","L","L","W"]}
  ];

  const women2024 = [
    {pos:1,team:"DC-W",p:8,w:6,l:2,nr:0,nrr:0.38,for:"1100",against:"990",pts:12,form:["W","W","W","L"]},
    {pos:2,team:"MI-W",p:8,w:5,l:3,nr:0,nrr:0.26,for:"1070",against:"1010",pts:10,form:["W","L","W","W"]},
    {pos:3,team:"RCB-W",p:8,w:4,l:4,nr:0,nrr:0.02,for:"1030",against:"1025",pts:8,form:["L","W","L","W"]},
    {pos:4,team:"UP-W",p:8,w:3,l:5,nr:0,nrr:-0.22,for:"980",against:"1060",pts:6,form:["L","W","L","L"]},
    {pos:5,team:"GG-W",p:8,w:2,l:6,nr:0,nrr:-0.44,for:"950",against:"1120",pts:4,form:["L","L","W","L"]}
  ];

  /* ================= PLAYOFFS ================= */

  const playoffs = {
    men: {
      "2025": [
        {pos:1,team:"PBKS",p:1,w:1,l:0,nr:0,nrr:0.45,for:"182",against:"160",pts:"Q",form:["W"]},
        {pos:2,team:"RCB",p:1,w:0,l:1,nr:0,nrr:-0.45,for:"160",against:"182",pts:"Q",form:["L"]},
        {pos:3,team:"GT",p:1,w:1,l:0,nr:0,nrr:0.32,for:"178",against:"165",pts:"E",form:["W"]},
        {pos:4,team:"MI",p:1,w:0,l:1,nr:0,nrr:-0.32,for:"165",against:"178",pts:"E",form:["L"]}
      ],
      "2024": [
        {pos:1,team:"CSK",p:1,w:1,l:0,nr:0,nrr:0.38,for:"185",against:"170",pts:"Q",form:["W"]},
        {pos:2,team:"KKR",p:1,w:0,l:1,nr:0,nrr:-0.38,for:"170",against:"185",pts:"Q",form:["L"]},
        {pos:3,team:"RR",p:1,w:1,l:0,nr:0,nrr:0.22,for:"178",against:"165",pts:"E",form:["W"]},
        {pos:4,team:"RCB",p:1,w:0,l:1,nr:0,nrr:-0.22,for:"165",against:"178",pts:"E",form:["L"]}
      ]
    },
    women: {
      "2025": [
        {pos:1,team:"MI-W",p:1,w:1,l:0,nr:0,nrr:0.41,for:"152",against:"140",pts:"Q",form:["W"]},
        {pos:2,team:"DC-W",p:1,w:0,l:1,nr:0,nrr:-0.41,for:"140",against:"152",pts:"Q",form:["L"]},
        {pos:3,team:"RCB-W",p:1,w:1,l:0,nr:0,nrr:0.19,for:"148",against:"145",pts:"E",form:["W"]},
        {pos:4,team:"UP-W",p:1,w:0,l:1,nr:0,nrr:-0.19,for:"145",against:"148",pts:"E",form:["L"]}
      ],
      "2024": [
        {pos:1,team:"DC-W",p:1,w:1,l:0,nr:0,nrr:0.36,for:"150",against:"138",pts:"Q",form:["W"]},
        {pos:2,team:"MI-W",p:1,w:0,l:1,nr:0,nrr:-0.36,for:"138",against:"150",pts:"Q",form:["L"]},
        {pos:3,team:"RCB-W",p:1,w:1,l:0,nr:0,nrr:0.21,for:"146",against:"140",pts:"E",form:["W"]},
        {pos:4,team:"UP-W",p:1,w:0,l:1,nr:0,nrr:-0.21,for:"140",against:"146",pts:"E",form:["L"]}
      ]
    }
  };

  /* ================= LOGIC ================= */

  const body = document.getElementById("pointsBody");
  const seasonSelect = document.getElementById("seasonSelect");
  const genderSelect = document.getElementById("genderSelect");
  const tabs = document.querySelectorAll(".tab-btn");

  let currentTab = "points";

  function render(data) {
    body.innerHTML = data.map(t => `
      <tr>
        <td>${t.pos}</td>
        <td>${t.team}</td>
        <td>${t.p}</td>
        <td>${t.w}</td>
        <td>${t.l}</td>
        <td>${t.nr}</td>
        <td>${t.nrr}</td>
        <td>${t.for}</td>
        <td>${t.against}</td>
        <td><b>${t.pts}</b></td>
        <td>
          <div class="form">
            ${t.form.map(f => `<div class="circle ${f==="W"?"win":f==="L"?"loss":"draw"}">${f}</div>`).join("")}
          </div>
        </td>
      </tr>
    `).join("");
  }

  function update() {
    const season = seasonSelect.value;
    const gender = genderSelect.value;

    if (currentTab === "playoffs") {
      render(playoffs[gender][season]);
    } else {
      if (gender === "women") {
        render(season === "2024" ? women2024 : women2025);
      } else {
        render(season === "2024" ? men2024 : men2025);
      }
    }
  }

  seasonSelect.addEventListener("change", update);
  genderSelect.addEventListener("change", update);

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentTab = tab.dataset.tab;
      update();
    });
  });

  update();
});

//Navbar 
const searchBtn = document.getElementById('searchBtn');
const searchDropdown = document.getElementById('searchDropdown');
const closeSearch = document.getElementById('closeSearch');
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.getElementById('navbar-links');

// Search bar open
searchBtn.addEventListener('click', () => {
    searchDropdown.classList.add('active');
});

// Search bar close (X button)
closeSearch.addEventListener('click', () => {
    searchDropdown.classList.remove('active');
});

// Mobile Menu toggle
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show-menu');
});

//search bar close (clicked anywhere in screen)
window.addEventListener('click', (e) => {
    if (searchDropdown.classList.contains('active') &&
        !searchDropdown.contains(e.target) &&
        !searchBtn.contains(e.target)) {

        searchDropdown.classList.remove('active');
    }
});