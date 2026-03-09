// ==========================================
// FOOD DATA
// ==========================================
const foods = [
    {
        id: 1,
        name: "Bánh tráng trộn",
        price: "15k",
        priceNum: 15000,
        image: "images/banh_trang_tron.png",
        emoji: "🥗",
        desc: "Bánh tráng cắt sợi trộn với xoài, rau răm, tôm khô, đậu phộng, sốt me cay ngọt",
        category: ["snack"],
        tags: ["Ăn vặt", "Cay"],
        color: "#ff6b35"
    },
    {
        id: 2,
        name: "Bánh tráng nướng",
        price: "20k",
        priceNum: 20000,
        image: "images/banh_trang_nuong.png",
        emoji: "🫓",
        desc: "Pizza Việt Nam - bánh tráng nướng giòn với trứng, hành lá, tôm khô, phô mai",
        category: ["snack", "night"],
        tags: ["Ăn vặt", "Ăn khuya"],
        color: "#ff4757"
    },
    {
        id: 3,
        name: "Xiên que",
        price: "10k",
        priceNum: 10000,
        image: "images/xien_que.png",
        emoji: "🍢",
        desc: "Xiên que đủ loại: bò, gà, xúc xích, chả cá chiên giòn tẩm sốt cay",
        category: ["snack", "night"],
        tags: ["Ăn vặt", "Chiên giòn"],
        color: "#e91e63"
    },
    {
        id: 4,
        name: "Bò bía",
        price: "5k",
        priceNum: 5000,
        image: "images/bo_bia.png",
        emoji: "🌯",
        desc: "Cuốn bò bía với lạp xưởng, jicama, trứng, rau thơm chấm tương ớt",
        category: ["snack"],
        tags: ["Ăn vặt", "Rẻ nhất"],
        color: "#2ed573"
    },
    {
        id: 5,
        name: "Mì cay",
        price: "25k",
        priceNum: 25000,
        image: "images/mi_cay.png",
        emoji: "🍜",
        desc: "Mì cay Hàn Quốc cấp độ tùy chọn, đầy đủ topping: trứng, xúc xích, phô mai",
        category: ["meal", "night"],
        tags: ["Ăn khuya", "Cay nóng"],
        color: "#ff3838"
    },
    {
        id: 6,
        name: "Bánh mì",
        price: "15k",
        priceNum: 15000,
        image: "images/banh_mi.png",
        emoji: "🥖",
        desc: "Bánh mì Việt Nam giòn rụm nhân thịt, pate, rau sống, đồ chua, sốt ớt",
        category: ["snack", "night"],
        tags: ["Đặc sản", "Nổi tiếng"],
        color: "#ff9f43"
    },
    {
        id: 7,
        name: "Cơm tấm",
        price: "30k",
        priceNum: 30000,
        image: "images/com_tam.png",
        emoji: "🍚",
        desc: "Cơm tấm sườn bì chả, thêm trứng ốp la, nước mắm ngọt đặc trưng Sài Gòn",
        category: ["meal"],
        tags: ["Cơm", "No bụng"],
        color: "#ffa502"
    },
    {
        id: 8,
        name: "Chè",
        price: "15k",
        priceNum: 15000,
        image: "images/che.png",
        emoji: "🍧",
        desc: "Chè thập cẩm mát lạnh: nước cốt dừa, thạch, đậu, trân châu, sương sa",
        category: ["drink"],
        tags: ["Đồ ngọt", "Giải khát"],
        color: "#7bed9f"
    },
    {
        id: 9,
        name: "Trà sữa",
        price: "25k",
        priceNum: 25000,
        image: "images/tra_sua.png",
        emoji: "🧋",
        desc: "Trà sữa trân châu đường đen, nhiều topping: pudding, thạch, kem cheese",
        category: ["drink"],
        tags: ["Đồ uống", "Hot trend"],
        color: "#cd6133"
    },
    {
        id: 10,
        name: "Ốc",
        price: "30k",
        priceNum: 30000,
        image: "images/oc.png",
        emoji: "🐚",
        desc: "Ốc hương xào bơ tỏi / ốc len xào dừa / ốc luộc sả thơm lừng",
        category: ["night"],
        tags: ["Ăn khuya", "Nhậu vặt"],
        color: "#a55eea"
    },
    {
        id: 11,
        name: "Bún bò Huế",
        price: "35k",
        priceNum: 35000,
        image: "images/bun_bo.png",
        emoji: "🍲",
        desc: "Bún bò Huế cay nồng với tô nước lèo đậm đà, thịt bò, chả cua, rau sống",
        category: ["meal", "night"],
        tags: ["Đặc sản Huế", "Cay"],
        color: "#ff6348"
    },
    {
        id: 12,
        name: "Phở",
        price: "35k",
        priceNum: 35000,
        image: "images/bun_bo.png",
        emoji: "🍜",
        desc: "Phở bò/gà truyền thống với nước dùng ninh xương, thịt mềm, rau thơm",
        category: ["meal"],
        tags: ["Đặc sản", "Quốc hồn"],
        color: "#ffc048"
    },
    {
        id: 13,
        name: "Gỏi cuốn",
        price: "20k",
        priceNum: 20000,
        image: "images/goi_cuon.png",
        emoji: "🥬",
        desc: "Gỏi cuốn tôm thịt cuốn cùng bún, rau sống, chấm tương đậu phộng béo ngậy",
        category: ["snack", "meal"],
        tags: ["Healthy", "Thanh mát"],
        color: "#00b894"
    },
    {
        id: 14,
        name: "Bánh xèo",
        price: "25k",
        priceNum: 25000,
        image: "images/banh_xeo.png",
        emoji: "🥞",
        desc: "Bánh xèo giòn rụm nhân tôm, thịt, giá đỗ, ăn kèm rau sống cuốn bánh tráng",
        category: ["meal", "snack"],
        tags: ["Đặc sản", "Giòn rụm"],
        color: "#fdcb6e"
    },
    {
        id: 15,
        name: "Bún chả",
        price: "35k",
        priceNum: 35000,
        image: "images/bun_cha.png",
        emoji: "🍖",
        desc: "Bún chả Hà Nội với chả viên, thịt nướng thơm lừng, nước chấm chua ngọt",
        category: ["meal"],
        tags: ["Đặc sản HN", "No bụng"],
        color: "#e17055"
    },
    {
        id: 16,
        name: "Nem nướng",
        price: "25k",
        priceNum: 25000,
        image: "images/nem_nuong.png",
        emoji: "🥩",
        desc: "Nem nướng Nha Trang cuốn bánh tráng, rau sống, bún, chấm nước mắm pha tỏi ớt",
        category: ["snack", "night"],
        tags: ["Nhậu vặt", "Đặc sản"],
        color: "#d63031"
    },
    {
        id: 17,
        name: "Bánh cuốn",
        price: "20k",
        priceNum: 20000,
        image: "images/banh_cuon.png",
        emoji: "🫔",
        desc: "Bánh cuốn nóng nhân thịt, mộc nhĩ, hành phi, ăn cùng chả lụa, nước mắm",
        category: ["meal"],
        tags: ["Ăn sáng", "Truyền thống"],
        color: "#fab1a0"
    },
    {
        id: 18,
        name: "Trứng vịt lộn",
        price: "10k",
        priceNum: 10000,
        image: "images/xien_que.png",
        emoji: "🥚",
        desc: "Hột vịt lộn nóng hổi ăn với rau răm, muối tiêu chanh, món khuya kinh điển",
        category: ["night", "snack"],
        tags: ["Ăn khuya", "Bổ dưỡng"],
        color: "#6c5ce7"
    },
    {
        id: 19,
        name: "Gà rán",
        price: "30k",
        priceNum: 30000,
        image: "images/banh_trang_nuong.png",
        emoji: "🍗",
        desc: "Gà rán giòn tan phủ sốt cay ngọt kiểu Hàn, thêm phô mai kéo sợi siêu ngon",
        category: ["snack", "meal"],
        tags: ["Chiên giòn", "Hot trend"],
        color: "#e84393"
    },
    {
        id: 20,
        name: "Bánh bông lan trứng muối",
        price: "15k",
        priceNum: 15000,
        image: "images/che.png",
        emoji: "🧁",
        desc: "Bánh bông lan trứng muối mềm xốp, nhân trứng muối béo ngậy tan trong miệng",
        category: ["snack"],
        tags: ["Ăn vặt", "Bánh ngọt"],
        color: "#f0932b"
    },
    {
        id: 21,
        name: "Nước mía",
        price: "10k",
        priceNum: 10000,
        image: "images/tra_sua.png",
        emoji: "🥤",
        desc: "Nước mía tươi ép tại chỗ, thêm tắc, mát lạnh giải nhiệt ngày hè oi bức",
        category: ["drink"],
        tags: ["Giải khát", "Tự nhiên"],
        color: "#badc58"
    },
    {
        id: 22,
        name: "Tokbokki",
        price: "25k",
        priceNum: 25000,
        image: "images/mi_cay.png",
        emoji: "🍡",
        desc: "Bánh gạo Hàn Quốc sốt cay ngọt, thêm chả cá, trứng luộc, phô mai kéo sợi",
        category: ["snack", "night"],
        tags: ["Hot trend", "Cay nóng"],
        color: "#eb4d4b"
    }
];

// ==========================================
// FOOD GRID RENDERING
// ==========================================
const foodGrid = document.getElementById('foodGrid');

function renderFoods(filter = 'all') {
    foodGrid.innerHTML = '';
    const filtered = filter === 'all'
        ? foods
        : foods.filter(f => f.category.includes(filter));

    filtered.forEach((food, index) => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.style.animationDelay = `${index * 0.08}s`;
        card.innerHTML = `
            <div class="food-card-image">
                <img src="${food.image}" alt="${food.name}" loading="lazy" />
                <span class="food-card-badge">${food.tags[0]}</span>
                <span class="food-card-price">${food.price}</span>
            </div>
            <div class="food-card-info">
                <div class="food-card-name">${food.emoji} ${food.name}</div>
                <div class="food-card-desc">${food.desc}</div>
                <div class="food-card-tags">
                    ${food.tags.map(t => `<span class="food-tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

// Filter tabs
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFoods(btn.dataset.filter);
    });
});

// Initial render
renderFoods();

// ==========================================
// SPIN WHEEL
// ==========================================
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');

const wheelColors = [
    '#ff6b35', '#ff4757', '#e91e63', '#2ed573',
    '#ff3838', '#ff9f43', '#ffa502', '#7bed9f',
    '#cd6133', '#a55eea', '#ff6348', '#ffc048',
    '#00b894', '#fdcb6e', '#e17055', '#d63031',
    '#fab1a0', '#6c5ce7', '#e84393', '#f0932b',
    '#badc58', '#eb4d4b'
];

let currentAngle = 0;
let isSpinning = false;
let userName = '';

function drawWheel() {
    const size = canvas.width;
    const center = size / 2;
    const radius = center - 10;
    const sliceAngle = (2 * Math.PI) / foods.length;

    ctx.clearRect(0, 0, size, size);

    // Draw outer ring
    ctx.beginPath();
    ctx.arc(center, center, radius + 5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 107, 53, 0.4)';
    ctx.lineWidth = 4;
    ctx.stroke();

    foods.forEach((food, i) => {
        const startAngle = currentAngle + i * sliceAngle;
        const endAngle = startAngle + sliceAngle;

        // Slice
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();

        // Gradient fill
        const grad = ctx.createRadialGradient(center, center, 0, center, center, radius);
        grad.addColorStop(0, lightenColor(wheelColors[i % wheelColors.length], 30));
        grad.addColorStop(1, wheelColors[i % wheelColors.length]);
        ctx.fillStyle = grad;
        ctx.fill();

        // Border
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Text
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(startAngle + sliceAngle / 2);

        // Emoji
        ctx.font = '16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(food.emoji, radius * 0.65, 5);

        // Name
        ctx.font = 'bold 9px "Be Vietnam Pro", sans-serif';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 4;

        const name = food.name.length > 8 ? food.name.substring(0, 8) + '..' : food.name;
        ctx.fillText(name, radius * 0.42, 4);

        ctx.restore();
    });

    // Center circle
    ctx.beginPath();
    ctx.arc(center, center, 30, 0, 2 * Math.PI);
    const centerGrad = ctx.createRadialGradient(center, center, 0, center, center, 30);
    centerGrad.addColorStop(0, '#ff8c5a');
    centerGrad.addColorStop(1, '#ff4757');
    ctx.fillStyle = centerGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Center text
    ctx.font = 'bold 12px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 3;
    ctx.fillText('QUAY', center, center);
    ctx.shadowBlur = 0;
}

function lightenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return `rgb(${R},${G},${B})`;
}

// Initial draw
drawWheel();

// ==========================================
// SPIN LOGIC
// ==========================================
function spinWheel() {
    if (isSpinning || !userName) return;

    isSpinning = true;
    const spinBtn = document.getElementById('spinBtn');
    spinBtn.classList.add('spinning');
    spinBtn.querySelector('.spin-btn-text').textContent = 'Đang quay...';

    // Random result
    const resultIndex = Math.floor(Math.random() * foods.length);
    const sliceAngle = (2 * Math.PI) / foods.length;

    const targetSliceCenter = resultIndex * sliceAngle + sliceAngle / 2;
    const extraSpins = (5 + Math.random() * 3) * 2 * Math.PI;
    const targetAngle = -(targetSliceCenter) - Math.PI / 2 + extraSpins;

    const startAngle = currentAngle;
    const totalRotation = targetAngle - startAngle;
    const duration = 5000 + Math.random() * 2000;
    const startTime = performance.now();

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function animateSpin(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);

        currentAngle = startAngle + totalRotation * easedProgress;
        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animateSpin);
        } else {
            isSpinning = false;
            spinBtn.classList.remove('spinning');
            spinBtn.querySelector('.spin-btn-text').textContent = 'QUAY NGAY!';

            const selectedFood = foods[resultIndex];
            showResult(selectedFood);
            saveSpinResult(selectedFood);
        }
    }

    requestAnimationFrame(animateSpin);
}

// ==========================================
// NAME INPUT
// ==========================================
function confirmName() {
    const input = document.getElementById('userName');
    const name = input.value.trim();

    if (!name) {
        input.style.borderColor = '#ff4757';
        input.placeholder = '⚠️ Vui lòng nhập tên!';
        setTimeout(() => {
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            input.placeholder = 'Nhập tên của bạn...';
        }, 2000);
        return;
    }

    userName = name;
    document.getElementById('nameCard').classList.add('hidden');
    document.getElementById('welcomeCard').classList.remove('hidden');
    document.getElementById('displayName').textContent = name;

    const spinBtn = document.getElementById('spinBtn');
    spinBtn.classList.remove('disabled');
    spinBtn.disabled = false;
    spinBtn.querySelector('.spin-btn-sub').textContent = 'Bấm để quay vòng quay!';
}

function changeName() {
    userName = '';
    document.getElementById('nameCard').classList.remove('hidden');
    document.getElementById('welcomeCard').classList.add('hidden');
    document.getElementById('userName').value = '';

    const spinBtn = document.getElementById('spinBtn');
    spinBtn.classList.add('disabled');
    spinBtn.disabled = true;
    spinBtn.querySelector('.spin-btn-sub').textContent = 'Nhập tên trước nhé!';
}

// Enter key to confirm
document.getElementById('userName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') confirmName();
});

// ==========================================
// RESULT MODAL
// ==========================================
const resultMessages = [
    "Ngon lắm, đi ăn thôi nào! 🏃‍♂️",
    "Món này hợp lắm, thử ngay đi! 😋",
    "Vũ trụ đã chọn cho bạn rồi đó! ✨",
    "Hôm nay phải ăn món này mới đúng! 🎯",
    "Số phận đã an bài, đi ăn thôi! 🍽️",
    "Ngon bổ rẻ, còn chờ gì nữa! 🔥",
    "Đây chính là lựa chọn hoàn hảo! 💯",
    "Bụng đói rồi, lẹ lẹ ăn thôi! ⚡"
];

function showResult(food) {
    const overlay = document.getElementById('resultOverlay');
    overlay.classList.remove('hidden');

    document.getElementById('resultEmoji').textContent = food.emoji;
    document.getElementById('resultTitle').textContent = `${userName} ơi, hôm nay ăn:`;
    document.getElementById('resultFoodName').textContent = food.name;
    document.getElementById('resultPrice').textContent = food.price;
    document.getElementById('resultImage').src = food.image;
    document.getElementById('resultMessage').textContent =
        resultMessages[Math.floor(Math.random() * resultMessages.length)];

    createConfetti();
}

function closeResult() {
    document.getElementById('resultOverlay').classList.add('hidden');
    document.getElementById('confetti').innerHTML = '';
}

function createConfetti() {
    const container = document.getElementById('confetti');
    container.innerHTML = '';
    const confettiColors = ['#ff6b35', '#ff4757', '#ffd200', '#2ed573', '#a55eea', '#ff9f43', '#7bed9f', '#ff3838'];

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';

        const shapes = ['circle', 'square', 'rectangle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'circle') {
            piece.style.borderRadius = '50%';
        } else if (shape === 'rectangle') {
            piece.style.width = '6px';
            piece.style.height = '14px';
        }

        container.appendChild(piece);
    }
}

// Close modal on overlay click
document.getElementById('resultOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeResult();
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeResult();
});

// ==========================================
// HISTORY - FIREBASE REALTIME + LOCALSTORAGE FALLBACK
// ==========================================

// Save spin result
function saveSpinResult(food) {
    const result = {
        name: userName,
        foodName: food.name,
        foodEmoji: food.emoji,
        foodPrice: food.price,
        foodImage: food.image,
        timestamp: Date.now()
    };

    if (typeof firebaseReady !== 'undefined' && firebaseReady && db) {
        // Save to Firebase Realtime Database
        db.ref('spinResults').push(result)
            .then(() => console.log('✅ Saved to Firebase'))
            .catch(err => {
                console.warn('Firebase save failed, using localStorage', err);
                saveToLocalStorage(result);
            });
    } else {
        // Fallback to localStorage
        saveToLocalStorage(result);
    }
}

function saveToLocalStorage(result) {
    const history = JSON.parse(localStorage.getItem('spinHistory') || '[]');
    history.unshift(result);
    // Keep max 50 results in localStorage
    if (history.length > 50) history.pop();
    localStorage.setItem('spinHistory', JSON.stringify(history));
    renderHistory(history);
}

// Listen for realtime updates from Firebase
function initFirebaseListener() {
    if (typeof firebaseReady !== 'undefined' && firebaseReady && db) {
        db.ref('spinResults')
            .orderByChild('timestamp')
            .limitToLast(30)
            .on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const results = Object.values(data).sort((a, b) => b.timestamp - a.timestamp);
                    renderHistory(results);
                }
            });
    } else {
        // Load from localStorage
        const history = JSON.parse(localStorage.getItem('spinHistory') || '[]');
        renderHistory(history);
    }
}

// Render history cards
function renderHistory(results) {
    const grid = document.getElementById('historyGrid');

    if (!results || results.length === 0) {
        grid.innerHTML = `
            <div class="history-empty">
                <span class="history-empty-icon">🎡</span>
                <p>Chưa có ai quay. Hãy là người đầu tiên!</p>
            </div>
        `;
        document.getElementById('totalSpins').textContent = '0';
        document.getElementById('totalUsers').textContent = '0';
        document.getElementById('topFood').textContent = '---';
        return;
    }

    // Update stats
    document.getElementById('totalSpins').textContent = results.length;

    const uniqueUsers = [...new Set(results.map(r => r.name))];
    document.getElementById('totalUsers').textContent = uniqueUsers.length;

    // Find most popular food
    const foodCount = {};
    results.forEach(r => {
        foodCount[r.foodName] = (foodCount[r.foodName] || 0) + 1;
    });
    const topFoodName = Object.entries(foodCount).sort((a, b) => b[1] - a[1])[0];
    if (topFoodName) {
        const topFoodData = results.find(r => r.foodName === topFoodName[0]);
        document.getElementById('topFood').textContent = `${topFoodData.foodEmoji} ${topFoodName[0]}`;
    }

    // Render cards (max 20 shown)
    const displayResults = results.slice(0, 20);
    grid.innerHTML = displayResults.map((result, index) => {
        const timeAgo = getTimeAgo(result.timestamp);
        return `
            <div class="history-card" style="animation-delay: ${index * 0.05}s">
                <div class="history-card-header">
                    <div class="history-card-avatar">${getAvatarEmoji(result.name)}</div>
                    <div class="history-card-user">
                        <span class="history-card-name">${escapeHtml(result.name)}</span>
                        <span class="history-card-time">${timeAgo}</span>
                    </div>
                </div>
                <div class="history-card-result">
                    <span class="history-card-emoji">${result.foodEmoji}</span>
                    <span class="history-card-food">${escapeHtml(result.foodName)}</span>
                    <span class="history-card-price">${result.foodPrice}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Helper: time ago
function getTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 10) return 'Vừa xong';
    if (seconds < 60) return `${seconds}s trước`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} phút trước`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} giờ trước`;
    const days = Math.floor(hours / 24);
    return `${days} ngày trước`;
}

// Helper: avatar emoji based on name
function getAvatarEmoji(name) {
    const emojis = ['😀', '😎', '🤩', '🥳', '😋', '🤤', '😜', '🧑‍🍳', '👨‍🎓', '👩‍🎓', '🦊', '🐱', '🐶', '🐼', '🦁', '🐸'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return emojis[Math.abs(hash) % emojis.length];
}

// Helper: escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize history on page load
initFirebaseListener();

// ==========================================
// NAVIGATION
// ==========================================
function scrollToSpin() {
    document.getElementById('spin').scrollIntoView({ behavior: 'smooth' });
}

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Active nav link
    const sections = ['home', 'menu', 'spin', 'history'];
    const navLinks = document.querySelectorAll('.nav-link');

    for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        }
    }
});

// ==========================================
// RESIZE HANDLER FOR CANVAS 
// ==========================================
function resizeCanvas() {
    const container = canvas.parentElement;
    const size = Math.min(container.offsetWidth, 440);
    canvas.width = size;
    canvas.height = size;
    drawWheel();
}

window.addEventListener('resize', resizeCanvas);
setTimeout(resizeCanvas, 100);
