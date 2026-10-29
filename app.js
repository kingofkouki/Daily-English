const homeEnglishData = [
  {
    title: "Morning Routine",
    theme: "Aktivitas Bangun Pagi & Persiapan",
    vocab: [
      { en: "Wake up", id: "Bangun tidur" },
      { en: "Make the bed", id: "Merapikan tempat tidur" },
      { en: "Take a bath / shower", id: "Mandi" },
      { en: "Brush my teeth", id: "Menggosok gigi" },
      { en: "Get dressed", id: "Memakai baju" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Good morning! Did you sleep well?\"</span><br>" +
      "  <span class=\"id-text\">\"Selamat pagi! Apakah tidurmu nyenyak?\"</span><br><br>" +
      "• <span class=\"en-text\">\"I need to take a quick shower and get dressed.\"</span><br>" +
      "  <span class=\"id-text\">\"Aku harus mandi sebentar dan bersiap-siap.\"</span>"
  },
  {
    title: "Breakfast & Cooking",
    theme: "Sarapan & Memasak di Dapur",
    vocab: [
      { en: "Prepare breakfast", id: "Menyiapkan sarapan" },
      { en: "Fry an egg", id: "Menggoreng telur" },
      { en: "Boil water", id: "Merebus air" },
      { en: "Set the table", id: "Menata meja makan" },
      { en: "Wash the dishes", id: "Mencuci piring" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"What would you like for breakfast today?\"</span><br>" +
      "  <span class=\"id-text\">\"Kamu ingin makan apa untuk sarapan hari ini?\"</span><br><br>" +
      "• <span class=\"en-text\">\"Please help me set the table before we eat.\"</span><br>" +
      "  <span class=\"id-text\">\"Tolong bantu aku menata meja makan sebelum kita makan.\"</span>"
  }
];

// Generator otomatis untuk sisa hari hingga 30
for(let i = 3; i <= 30; i++) {
  homeEnglishData.push({
    title: `Daily Routine Day ${i}`,
    theme: `Ungkapan & Percakapan Bahasa Inggris Sehari-hari Hari ke-${i}`,
    vocab: [
      { en: `Daily expression ${i}-1`, id: `Ungkapan sehari-hari ${i}-1` },
      { en: `Daily expression ${i}-2`, id: `Ungkapan sehari-hari ${i}-2` },
      { en: `Daily expression ${i}-3`, id: `Ungkapan sehari-hari ${i}-3` }
    ],
    sentences: `• <span class=\"en-text\">"This is an example sentence for day ${i} conversation practice."</span><br>  <span class=\"id-text\">"Ini adalah contoh kalimat untuk latihan percakapan hari ke-${i}."</span>`
  });
}

let selectedDay = 0;
let completedDays = new Set();
let checkedVocabs = {}; 

try {
  completedDays = new Set(JSON.parse(localStorage.getItem("homeEngDone") || "[]"));
  checkedVocabs = JSON.parse(localStorage.getItem("homeEngVocabCheck") || "{}");
} catch(e) {}

function saveStorage() {
  try {
    localStorage.setItem("homeEngDone", JSON.stringify([...completedDays]));
    localStorage.setItem("homeEngVocabCheck", JSON.stringify(checkedVocabs));
  } catch(e) {}
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Browser tidak mendukung fitur suara.");
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  document.getElementById("themeIcon").textContent = isDark ? "☀️" : "🌙";
  document.getElementById("themeLabel").textContent = isDark ? "Light" : "Dark";
  document.getElementById("metaThemeColor").content = isDark ? "#12171D" : "#f5f2eb";
  try { localStorage.setItem("homeEngTheme", theme); } catch(e) {}
}

function initDays() {
  const container = document.getElementById("days");
  homeEnglishData.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.id = "dayBtn-" + i;
    btn.className = "day" + (i === selectedDay ? " active" : "") + (completedDays.has(i) ? " done" : "");
    btn.textContent = i + 1;
    btn.addEventListener("click", () => {
      selectedDay = i;
      renderApp();
    });
    container.appendChild(btn);
  });
}

function renderApp() {
  homeEnglishData.forEach((_, i) => {
    const btn = document.getElementById("dayBtn-" + i);
    if(btn) {
      btn.className = "day" + (i === selectedDay ? " active" : "") + (completedDays.has(i) ? " done" : "");
    }
  });

  const activeBtn = document.getElementById("dayBtn-" + selectedDay);
  if(activeBtn) activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

  const data = homeEnglishData[selectedDay];
  document.getElementById("dayLabel").textContent = `HARI ${String(selectedDay + 1).padStart(2, '0')} DAILY ENGLISH`;
  document.getElementById("dayTitle").textContent = data.title;
  document.getElementById("dayTheme").textContent = data.theme;
  document.getElementById("sampleSentences").innerHTML = data.sentences;

  const vocabListEl = document.getElementById("vocabList");
  vocabListEl.innerHTML = "";
  
  if(!checkedVocabs[selectedDay]) checkedVocabs[selectedDay] = {};

  data.vocab.forEach((v, vIdx) => {
    const isChecked = checkedVocabs[selectedDay][vIdx] || false;
    const itemDiv = document.createElement("div");
    itemDiv.className = "vocab-item";
    itemDiv.innerHTML = `
      <div class="vocab-left">
        <input type="checkbox" id="vocab-${selectedDay}-${vIdx}" ${isChecked ? "checked" : ""}>
        <label for="vocab-${selectedDay}-${vIdx}" style="cursor: pointer; font-size: 0.9rem;">
          <strong style="color: var(--accent);">${v.en}</strong><br>
          <span style="color: var(--muted);">${v.id}</span>
        </label>
      </div>
      <button class="speak-btn" title="Dengarkan pengucapan">🔊</button>
    `;
    
    const checkbox = itemDiv.querySelector("input");
    checkbox.addEventListener("change", (e) => {
      checkedVocabs[selectedDay][vIdx] = e.target.checked;
      saveStorage();
    });

    const speakBtn = itemDiv.querySelector(".speak-btn");
    speakBtn.addEventListener("click", () => {
      speakText(v.en);
    });

    vocabListEl.appendChild(itemDiv);
  });

  document.getElementById("progress").value = completedDays.size;
  document.getElementById("progressText").textContent = `${completedDays.size} dari 30 hari selesai`;
  document.getElementById("progressPercent").textContent = Math.round((completedDays.size / 30) * 100) + "%";

  const markBtn = document.getElementById("markBtn");
  if(completedDays.has(selectedDay)) {
    markBtn.textContent = "Batalkan Selesai Hari Ini";
    markBtn.style.background = "var(--button)";
    markBtn.style.color = "var(--ink)";
  } else {
    markBtn.textContent = "Tandai Hari Ini Selesai";
    markBtn.style.background = "var(--accent)";
    markBtn.style.color = "var(--accent-text)";
  }
}

document.getElementById("markBtn").addEventListener("click", () => {
  if(completedDays.has(selectedDay)) {
    completedDays.delete(selectedDay);
  } else {
    completedDays.add(selectedDay);
    if(typeof confetti === 'function') {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    }
  }
  saveStorage();
  renderApp();
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  const data = homeEnglishData[selectedDay];
  let vocabText = data.vocab.map(v => `- ${v.en}: ${v.id}`).join("\n");
  const plainSentences = data.sentences.replace(/<[^>]*>/g, '');
  const content = `*Daily English at Home - Hari ${selectedDay + 1}: ${data.title}*\n\n${data.theme}\n\n*Daftar Ungkapan:*\n${vocabText}\n\n*Contoh Percakapan & Terjemahan:*\n${plainSentences}`;
  
  try {
    await navigator.clipboard.writeText(content);
    document.getElementById("copyBtn").textContent = "Materi Tersalin ✓";
    setTimeout(() => { document.getElementById("copyBtn").textContent = "Salin Materi Hari Ini"; }, 1600);
  } catch(e) {
    window.prompt("Salin teks di bawah:", content);
  }
});

initDays();
renderApp();