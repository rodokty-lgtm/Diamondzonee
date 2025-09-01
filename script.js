// JavaScript Logic for Diamond Zone

// WhatsApp number and game data
const whatsappNumber = "6281410545261"; 
const gamesData = {
    'mlbb': {
        'Diamonds': [
            { 'nominal': '95 Diamond', 'price': 'Rp 27.500' },
            { 'nominal': '170 Diamond', 'price': 'Rp 46.000' },
            { 'nominal': '257 Diamond', 'price': 'Rp 69.500' },
            { 'nominal': '305 Diamond', 'price': 'Rp 80.000' },
            { 'nominal': '500 Diamond', 'price': 'Rp 91.000' },
            { 'nominal': '568 Diamond', 'price': 'Rp 143.500' },
            { 'nominal': '875 Diamond', 'price': 'Rp 230.000' },
            { 'nominal': '1048 Diamond', 'price': 'Rp 270.000' },
            { 'nominal': '1159 Diamond', 'price': 'Rp 299.500' }
        ],
        'Wdp': [
            { 'nominal': 'Wdp', 'price': 'Rp 28.000' }
        ]
    },
    'ff': {
        'Diamonds': [
            { 'nominal': '5 Diamond', 'price': 'Rp 1.000' },
            { 'nominal': '12 Diamond', 'price': 'Rp 2.000' },
            { 'nominal': '50 Diamond', 'price': 'Rp 8.000' },
            { 'nominal': '70 Diamond', 'price': 'Rp 10.000' },
            { 'nominal': '120 Diamond', 'price': 'Rp 19.000' },
            { 'nominal': '355 Diamond', 'price': 'Rp 48.000' },
            { 'nominal': '720 Diamond', 'price': 'Rp 98.000' },
            { 'nominal': '1450 Diamond', 'price': 'Rp 201.000' },
            { 'nominal': '2180 Diamond', 'price': 'Rp 302.000' }
        ],
        'Membership': [
            { 'nominal': 'Membership mingguan lite', 'price': 'Rp 15.000' },
            { 'nominal': 'Membership mingguan biasa', 'price': 'Rp 30.000' },
            { 'nominal': 'Membership bulanan', 'price': 'Rp 86.000' }
        ]
    },
    'roblox': {
        'Via Biasa': [
            { 'nominal': '400 Robux', 'price': 'Rp 85.000' },
            { 'nominal': '800 Robux', 'price': 'Rp 159.000' },
            { 'nominal': '1600 Robux', 'price': 'Rp 310.000' },
            { 'nominal': '400 Robux', 'price': 'Rp 762.000' }
        ],
        'Game Pass': [
            { 'nominal': '100 Robux', 'price': 'Rp 14.000' },
            { 'nominal': '200 Robux', 'price': 'Rp 27.000' },
            { 'nominal': '300 Robux', 'price': 'Rp 40.000' },
            { 'nominal': '400 Robux', 'price': 'Rp 54.000' },
            { 'nominal': '500 Robux', 'price': 'Rp 67.000' },
            { 'nominal': '600 Robux', 'price': 'Rp 80.000' },
            { 'nominal': '700 Robux', 'price': 'Rp 93.000' },
            { 'nominal': '800 Robux', 'price': 'Rp 106.000' },
            { 'nominal': '900 Robux', 'price': 'Rp 120.000' },
            { 'nominal': '1000 Robux', 'price': 'Rp 133.000' }
        ]
    },
    'fcm': {
        'Point': [
            { 'nominal': '40 FC Point', 'price': 'Rp 6.500' },
            { 'nominal': '100 FC Point', 'price': 'Rp 16.000' },
            { 'nominal': '520 FC Point', 'price': 'Rp 78.000' },
            { 'nominal': '1070 FC Point', 'price': 'Rp 156.500' },
            { 'nominal': '2200 FC Point', 'price': 'Rp 232.500' },
            { 'nominal': '5750 FC Point', 'price': 'Rp 785.000' },
            { 'nominal': '12000 FC Point', 'price': 'Rp 1.571.000' }
        ],
        'Silver': [
            { 'nominal': '39 Silver', 'price': 'Rp 6.500' },
            { 'nominal': '99 Silver', 'price': 'Rp 16.000' },
            { 'nominal': '499 Silver', 'price': 'Rp 78.000' },
            { 'nominal': '999 Silver', 'price': 'Rp 156.500' },
            { 'nominal': '1999 Silver', 'price': 'Rp 232.500' },
            { 'nominal': '4999 Silver', 'price': 'Rp 785.000' },
            { 'nominal': '9999 Silver', 'price': 'Rp 1.571.000' }
        ]
    },
    'gt': {
        'Gems': [
            { 'nominal': '3000 Gems', 'price': 'Rp 50.000' },
            { 'nominal': '6000 Gems', 'price': 'Rp 100.000' }
        ],
        'Bundle': [
            { 'nominal': 'Bundle Starter S3', 'price': 'Rp 277.000' },
            { 'nominal': 'Bundle Special Costume', 'price': 'Rp 510.000' },
            { 'nominal': 'Bundle Skip Iklan', 'price': 'Rp 70.000' },
            { 'nominal': 'Paket Special Bulanan', 'price': 'Rp 50.000' }
        ]
    },
    'hok': [
        { 'nominal': '16 Tokens', 'price': 'Rp 3.000' },
        { 'nominal': '80 + 8 Tokens', 'price': 'Rp 15.000' },
        { 'nominal': '240 + 17 Tokens', 'price': 'Rp 44.000' },
        { 'nominal': '400 + 32 Tokens', 'price': 'Rp 73.000' },
        { 'nominal': '560 + 45 Tokens', 'price': 'Rp 102.000' },
        { 'nominal': '800 + 95 Tokens', 'price': 'Rp 146.000' },
        { 'nominal': '1200 + 153 Tokens', 'price': 'Rp 220.000' }
    ],
    'cod': [
        { 'nominal': '33 Garena Shells', 'price': 'Rp 10.000' },
        { 'nominal': '66 Garena Shells', 'price': 'Rp 20.000' },
        { 'nominal': '165 Garena Shells', 'price': 'Rp 50.000' },
        { 'nominal': '330 Garena Shells', 'price': 'Rp 100.000' }
    ],
    'pubg': [
        { 'nominal': '60 UC', 'price': 'Rp 14.500' },
        { 'nominal': '120 UC', 'price': 'Rp 29.000' },
        { 'nominal': '180 UC', 'price': 'Rp 43.000' },
        { 'nominal': '240 UC', 'price': 'Rp 58.000' },
        { 'nominal': '325 UC', 'price': 'Rp 73.991' },
        { 'nominal': '385 UC', 'price': 'Rp 87.500' },
        { 'nominal': '445 UC', 'price': 'Rp 101.910' },
        { 'nominal': '505 UC', 'price': 'Rp 116.500' }
    ]
};

let selectedGame, selectedNominal, selectedPrice;

// Banner Carousel Logic
let currentBanner = 0;
const bannerContainer = document.getElementById('banner-container');
const banners = bannerContainer.querySelectorAll('img');
const totalBanners = banners.length;
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateBanner() {
    const bannerWidth = bannerContainer.offsetWidth / totalBanners;
    bannerContainer.style.transform = `translateX(${-currentBanner * bannerWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentBanner = (currentBanner + 1) % totalBanners;
    updateBanner();
});

prevBtn.addEventListener('click', () => {
    currentBanner = (currentBanner - 1 + totalBanners) % totalBanners;
    updateBanner();
});

// Update banner on window resize
window.addEventListener('resize', updateBanner);

// Modal and ordering logic
function openModal(gameName, gameId) {
    selectedGame = gameName;
    document.getElementById('modalTitle').innerText = `Top Up ${gameName}`;
    
    const idInputSection = document.getElementById('idInputSection');
    const nominalTitle = document.getElementById('nominalTitle');
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const noIdGames = ['roblox', 'fcm', 'gt'];
    if (noIdGames.includes(gameId)) {
        idInputSection.style.display = 'none';
        nominalTitle.innerText = 'Pilih Nominal';
    } else {
        idInputSection.style.display = 'block';
        nominalTitle.innerText = '2. Pilih Nominal';
    }

    const gameOptions = gamesData[gameId];
    if (Array.isArray(gameOptions)) {
        const categoryGrid = document.createElement('div');
        categoryGrid.className = "grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4";
        gameOptions.forEach(option => {
            const button = createOptionButton(option);
            categoryGrid.appendChild(button);
        });
        optionsContainer.appendChild(categoryGrid);
    } else {
        for (const category in gameOptions) {
            const title = category.replace(/_/g, ' ');
            const categoryTitle = document.createElement('h3');
            categoryTitle.className = "text-xl font-bold mt-4 mb-2 text-gray-900";
            categoryTitle.innerText = title;
            optionsContainer.appendChild(categoryTitle);

            const categoryGrid = document.createElement('div');
            categoryGrid.className = "grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4";
            gameOptions[category].forEach(option => {
                const button = createOptionButton(option);
                categoryGrid.appendChild(button);
            });
            optionsContainer.appendChild(categoryGrid);
        }
    }
    
    selectedNominal = null;
    selectedPrice = null;
    
    document.getElementById('topUpModal').style.display = "block";
}

function createOptionButton(option) {
    const button = document.createElement('button');
    button.innerHTML = `<span class="block text-sm font-semibold">${option.nominal}</span><span class="block text-xs text-gray-600">${option.price}</span>`;
    button.className = "w-full p-4 bg-gray-100 rounded-lg text-center hover:ring-2 hover:ring-blue-400 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400";
    button.onclick = () => selectOption(option.nominal, option.price, button);
    return button;
}

function closeModal() {
    document.getElementById('topUpModal').style.display = "none";
}

function selectOption(nominal, price, button) {
    const buttons = document.querySelectorAll('#optionsContainer button');
    buttons.forEach(btn => {
        btn.classList.remove('ring-2', 'ring-blue-400');
    });
    button.classList.add('ring-2', 'ring-blue-400');
    
    selectedNominal = nominal;
    selectedPrice = price;
}

function placeOrder() {
    let message;
    const userId = document.getElementById('userIdInput').value;
    const isIdRequired = document.getElementById('idInputSection').style.display !== 'none';

    if (isIdRequired && !userId) {
        showMessageBox("Mohon masukkan ID Akun Anda.");
        return;
    }
    if (!selectedNominal) {
        showMessageBox("Mohon pilih nominal top up.");
        return;
    }
    
    if (isIdRequired) {
        message = `Halo Diamond Zone, saya ingin top up ${selectedGame} ${selectedNominal} seharga ${selectedPrice}. ID saya: ${userId}.`;
    } else {
        message = `Halo Diamond Zone, saya ingin top up ${selectedGame} ${selectedNominal} seharga ${selectedPrice}.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${6281410545261}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function showMessageBox(message) {
    const modal = document.createElement('div');
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content max-w-sm">
            <span class="close-btn">&times;</span>
            <p class="text-gray-800 text-center">${message}</p>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = "block";

    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.removeChild(modal);
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.removeChild(modal);
        }
    };
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
