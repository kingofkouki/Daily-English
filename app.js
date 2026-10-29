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
  },
  {
    title: "Cleaning the House",
    theme: "Membersihkan Rumah & Merapikan Ruangan",
    vocab: [
      { en: "Sweep the floor", id: "Menyapu lantai" },
      { en: "Mop the floor", id: "Mengepel lantai" },
      { en: "Take out the trash", id: "Membuang sampah" },
      { en: "Wipe the dust", id: "Menglap debu" },
      { en: "Vacuum the rug", id: "Menghisap debu karpet" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Could you please sweep the living room floor?\"</span><br>" +
      "  <span class=\"id-text\">\"Bisakah kamu tolong menyapu lantai ruang tamu?\"</span><br><br>" +
      "• <span class=\"en-text\">\"Don't forget to take out the trash before evening.\"</span><br>" +
      "  <span class=\"id-text\">\"Jangan lupa membuang sampah sebelum malam.\"</span>"
  },
  {
    title: "Laundry & Clothes",
    theme: "Mencuci Pakaian & Urusan Baju",
    vocab: [
      { en: "Do the laundry", id: "Mencuci pakaian" },
      { en: "Wash machine", id: "Mesin cuci" },
      { en: "Hang out the clothes", id: "Menjemur pakaian" },
      { en: "Iron the clothes", id: "Menyetrika pakaian" },
      { en: "Fold the clothes", id: "Melipat pakaian" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"I need to wash a load of laundry today.\"</span><br>" +
      "  <span class=\"id-text\">\"Aku harus mencuci tumpukan pakaian hari ini.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Can you help me fold these clean clothes?\"</span><br>" +
      "  <span class=\"id-text\">\"Bisakah kamu membantuku melipat baju bersih ini?\"</span>"
  },
  {
    title: "Family Interaction",
    theme: "Interaksi & Permintaan Sehari-hari",
    vocab: [
      { en: "Can you help me?", id: "Bisakah kamu membantuku?" },
      { en: "Pass me the salt", id: "Tolong ambilkan garam" },
      { en: "Turn on the TV", id: "Nyalakan televisi" },
      { en: "Turn off the lights", id: "Matikan lampu" },
      { en: "Keep it quiet", id: "Tolong jangan berisik / Tenang" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Could you pass me the remote control, please?\"</span><br>" +
      "  <span class=\"id-text\">\"Bisakah tolong ambilkan aku remote TV?\"</span><br><br>" +
      "• <span class=\"en-text\">\"Please turn off the lights when you leave the room.\"</span><br>" +
      "  <span class=\"id-text\">\"Tolong matikan lampu saat kamu keluar ruangan.\"</span>"
  },
  {
    title: "Living Room & Relaxing",
    theme: "Bersantai di Ruang Keluarga",
    vocab: [
      { en: "Watch a movie", id: "Menonton film" },
      { en: "Sit on the sofa", id: "Duduk di sofa" },
      { en: "Take a nap", id: "Tidur siang" },
      { en: "Read a book", id: "Membaca buku" },
      { en: "Listen to music", id: "Mendengarkan musik" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Let's watch a family movie together tonight.\"</span><br>" +
      "  <span class=\"id-text\">\"Mari kita menonton film keluarga bersama malam ini.\"</span><br><br>" +
      "• <span class=\"en-text\">\"I am so tired, I just want to take a short nap.\"</span><br>" +
      "  <span class=\"id-text\">\"Aku sangat lelah, aku hanya ingin tidur siang sebentar.\"</span>"
  },
  {
    title: "Kitchen & Appliances",
    theme: "Peralatan & Aktivitas di Dapur",
    vocab: [
      { en: "Refrigerator / Fridge", id: "Kulkas" },
      { en: "Microwave", id: "Oven gelombang mikro" },
      { en: "Rice cooker", id: "Penanak nasi" },
      { en: "Blender", id: "Blender jus" },
      { en: "Cutlery", id: "Alat makan (sendok/garpu)" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Please put the leftover food into the fridge.\"</span><br>" +
      "  <span class=\"id-text\">\"Tolong masukkan sisa makanan ke dalam kulkas.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Can you reheat this soup in the microwave?\"</span><br>" +
      "  <span class=\"id-text\">\"Bisakah kamu menghangatkan sup ini di microwave?\"</span>"
  },
  {
    title: "Bathroom & Personal Care",
    theme: "Kamar Mandi & Perawatan Diri",
    vocab: [
      { en: "Mirror", id: "Cermin" },
      { en: "Toothpaste", id: "Pasta gigi" },
      { en: "Shampoo", id: "Sampo" },
      { en: "Soap", id: "Sabun" },
      { en: "Towel", id: "Handuk" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Someone left the bathroom floor wet again.\"</span><br>" +
      "  <span class=\"id-text\">\"Seseorang membuat lantai kamar mandi basah lagi.\"</span><br><br>" +
      "• <span class=\"en-text\">\"We are running out of toothpaste. I need to buy some.\"</span><br>" +
      "  <span class=\"id-text\">\"Pasta gigi kita habis. Aku harus membelinya.\"</span>"
  },
  {
    title: "Bedroom & Sleeping Time",
    theme: "Kamar Tidur & Waktu Istirahat",
    vocab: [
      { en: "Pillow", id: "Bantal" },
      { en: "Blanket", id: "Selimut" },
      { en: "Alarm clock", id: "Jam alarm" },
      { en: "Set an alarm", id: "Mengatur alarm" },
      { en: "Good night", id: "Selamat tidur" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Don't forget to set your alarm for tomorrow morning.\"</span><br>" +
      "  <span class=\"id-text\">\"Jangan lupa atur alarmmu untuk besok pagi.\"</span><br><br>" +
      "• <span class=\"en-text\">\"It's getting late. Time to go to bed. Good night!\"</span><br>" +
      "  <span class=\"id-text\">\"Sudah larut malam. Waktunya tidur. Selamat malam!\"</span>"
  },
  {
    title: "Home Maintenance",
    theme: "Perbaikan & Perawatan Rumah",
    vocab: [
      { en: "Light bulb", id: "Bohlam lampu" },
      { en: "Leaking faucet", id: "Keran bocor" },
      { en: "Locked the door", id: "Mengunci pintu" },
      { en: "Window", id: "Jendela" },
      { en: "Fix / Repair", id: "Memperbaiki" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"The light bulb in the hallway is broken. We need to replace it.\"</span><br>" +
      "  <span class=\"id-text\">\"Lampu di lorong rusak. Kita harus menggantinya.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Did you lock the front door before going to sleep?\"</span><br>" +
      "  <span class=\"id-text\">\"Apakah kamu sudah mengunci pintu depan sebelum tidur?\"</span>"
  },
  {
    title: "Pets at Home",
    theme: "Hewan Peliharaan di Rumah",
    vocab: [
      { en: "Feed the cat / dog", id: "Memberi makan kucing / anjing" },
      { en: "Pet food", id: "Makanan hewan" },
      { en: "Leash", id: "Tali tuntun hewan" },
      { en: "Clean the cage", id: "Membersihkan kandang" },
      { en: "Play with pet", id: "Bermain dengan hewan peliharaan" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Have you fed the cat this morning?\"</span><br>" +
      "  <span class=\"id-text\">\"Sudahkah kamu memberi makan kucing pagi ini?\"</span><br><br>" +
      "• <span class=\"en-text\">\"Let's take the dog for a walk in the yard.\"</span><br>" +
      "  <span class=\"id-text\">\"Mari ajak anjing jalan-jalan di halaman.\"</span>"
  },
  {
    title: "Gardening & Yard Work",
    theme: "Berkebun & Merawat Halaman",
    vocab: [
      { en: "Water the plants", id: "Menyirami tanaman" },
      { en: "Mow the lawn", id: "Memotong rumput" },
      { en: "Flowers", id: "Bunga" },
      { en: "Garden hose", id: "Selang air taman" },
      { en: "Pull weeds", id: "Mencabut rumput liar" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"I need to water the flowers in the front yard.\"</span><br>" +
      "  <span class=\"id-text\">\"Aku harus menyirami bunga-bunga di halaman depan.\"</span><br><br>" +
      "• <span class=\"en-text\">\"The grass is getting tall, we need to mow the lawn.\"</span><br>" +
      "  <span class=\"id-text\">\"Rumputnya sudah tinggi, kita perlu memotong rumput.\"</span>"
  },
  {
    title: "Weather & Atmosphere",
    theme: "Cuaca & Suasana Rumah",
    vocab: [
      { en: "It's raining", id: "Hari sedang hujan" },
      { en: "Close the windows", id: "Tutup jendela-jendela" },
      { en: "Sunny day", id: "Hari yang cerah" },
      { en: "Turn on the AC", id: "Nyalakan AC" },
      { en: "It's hot today", id: "Hari ini panas" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"It looks like it's going to rain. Please close the windows.\"</span><br>" +
      "  <span class=\"id-text\">\"Sepertinya akan turun hujan. Tolong tutup jendela-jendela.\"</span><br><br>" +
      "• <span class=\"en-text\">\"It's so hot inside. Let's turn on the air conditioner.\"</span><br>" +
      "  <span class=\"id-text\">\"Di dalam sangat panas. Ayo nyalakan AC.\"</span>"
  },
  {
    title: "Packages & Delivery",
    theme: "Paket & Kurir Datang ke Rumah",
    vocab: [
      { en: "Delivery courier", id: "Kurir pengiriman" },
      { en: "Knock on the door", id: "Mengetuk pintu" },
      { en: "Sign for a package", id: "Menandatangani paket" },
      { en: "Online shopping", id: "Belanja online" },
      { en: "Box / Parcel", id: "Kotak / Paket" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Someone is knocking on the door. It might be the delivery package.\"</span><br>" +
      "  <span class=\"id-text\">\"Seseorang mengetuk pintu. Mungkin itu paket kiriman.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Can you sign for this package, please?\"</span><br>" +
      "  <span class=\"id-text\">\"Bisakah kamu menandatangani paket ini?\"</span>"
  },
  {
    title: "Trash & Recycling",
    theme: "Sampah & Daur Ulang di Rumah",
    vocab: [
      { en: "Recycling bin", id: "Tempat sampah daur ulang" },
      { en: "Plastic bottle", id: "Botol plastik" },
      { en: "Cardboard box", id: "Kotak kardus" },
      { en: "Sort the trash", id: "Memilah sampah" },
      { en: "Garbage truck", id: "Truk sampah" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Please put the plastic bottles into the recycling bin.\"</span><br>" +
      "  <span class=\"id-text\">\"Tolong masukkan botol-botol plastik ke dalam tempat sampah daur ulang.\"</span><br><br>" +
      "• <span class=\"en-text\">\"The garbage truck comes every Tuesday morning.\"</span><br>" +
      "  <span class=\"id-text\">\"Truk sampah datang setiap Selasa pagi.\"</span>"
  },
  {
    title: "Electricity & Energy",
    theme: "Listrik & Hemat Energi",
    vocab: [
      { en: "Save electricity", id: "Hemat listrik" },
      { en: "Unplug the charger", id: "Mencabut pengisi daya" },
      { en: "Fan", id: "Kipas angin" },
      { en: "Power outlet", id: "Stopkontak" },
      { en: "Switch off", id: "Mematikan saklar" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Remember to unplug your phone charger when it's fully charged.\"</span><br>" +
      "  <span class=\"id-text\">\"Ingat untuk mencabut charger HP-mu ketika sudah penuh.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Switch off the fan if you are not in the room.\"</span><br>" +
      "  <span class=\"id-text\">\"Matikan kipas angin jika kamu tidak sedang di dalam ruangan.\"</span>"
  },
  {
    title: "Studying at Home",
    theme: "Mengerjakan PR & Belajar di Rumah",
    vocab: [
      { en: "Do homework", id: "Mengerjakan PR" },
      { en: "Desk", id: "Meja belajar" },
      { en: "Notebook", id: "Buku catatan" },
      { en: "Pen and pencil", id: "Pulpen dan pensil" },
      { en: "Study room", id: "Ruang belajar" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Have you finished your school homework yet?\"</span><br>" +
      "  <span class=\"id-text\">\"Apakah kamu sudah menyelesaikan PR sekolahmu?\"</span><br><br>" +
      "• <span class=\"en-text\">\"Let's study together at the living room table.\"</span><br>" +
      "  <span class=\"id-text\">\"Mari belajar bersama di meja ruang keluarga.\"</span>"
  },
  {
    title: "Home Safety",
    theme: "Keamanan & Keselamatan di Rumah",
    vocab: [
      { en: "Lock the gate", id: "Mengunci gerbang" },
      { en: "Safety check", id: "Pengecekan keamanan" },
      { en: "Stove", id: "Kompor" },
      { en: "Turn off the stove", id: "Mematikan kompor" },
      { en: "Stranger", id: "Orang asing" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Did you make sure to turn off the stove after cooking?\"</span><br>" +
      "  <span class=\"id-text\">\"Apakah kamu memastikan sudah mematikan kompor setelah memasak?\"</span><br><br>" +
      "• <span class=\"en-text\">\"Never open the door to strangers when you are home alone.\"</span><br>" +
      "  <span class=\"id-text\">\"Jangan pernah membukakan pintu untuk orang asing saat kamu sendirian di rumah.\"</span>"
  },
  {
    title: "Hosting Guests",
    theme: "Menerima Tamu di Rumah",
    vocab: [
      { en: "Welcome in", id: "Silakan masuk" },
      { en: "Make yourself at home", id: "Anggap seperti rumah sendiri" },
      { en: "Serve drinks", id: "Menyajikan minuman" },
      { en: "Living room", id: "Ruang tamu" },
      { en: "Have a seat", id: "Silakan duduk" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Welcome to our house! Please come in and have a seat.\"</span><br>" +
      "  <span class=\"id-text\">\"Selamat datang di rumah kami! Silakan masuk dan silakan duduk.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Would you like a cup of tea or coffee?\"</span><br>" +
      "  <span class=\"id-text\">\"Apakah kamu ingin secangkir teh atau kopi?\"</span>"
  },
  {
    title: "Family Dinner",
    theme: "Waktu Makan Malam Keluarga",
    vocab: [
      { en: "Dinner is ready", id: "Makan malam sudah siap" },
      { en: "Dining table", id: "Meja makan" },
      { en: "Pass the dish", id: "Tolong operkan hidangan" },
      { en: "Delicious food", id: "Makanan yang lezat" },
      { en: "Clean up", id: "Membereskan / Membersihkan" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Dinner is ready! Everyone, please come to the dining table.\"</span><br>" +
      "  <span class=\"id-text\">\"Makan malam sudah siap! Semuanya, silakan datang ke meja makan.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Mom, this chicken soup tastes so delicious!\"</span><br>" +
      "  <span class=\"id-text\">\"Ibu, sup ayam ini rasanya enak sekali!\"</span>"
  },
  {
    title: "Health & Medicine",
    theme: "Kesehatan & Obat-obatan di Rumah",
    vocab: [
      { en: "First aid box", id: "Kotak P3K / Kotak obat" },
      { en: "Medicine", id: "Obat" },
      { en: "Headache", id: "Sakit kepala" },
      { en: "Fever", id: "Demam" },
      { en: "Take a rest", id: "Beristirahat" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"I have a mild headache. Where is the medicine cabinet?\"</span><br>" +
      "  <span class=\"id-text\">\"Aku sedikit sakit kepala. Di mana lemari obatnya?\"</span><br><br>" +
      "• <span class=\"en-text\">\"You should take a rest and drink plenty of warm water.\"</span><br>" +
      "  <span class=\"id-text\">\"Kamu harus beristirahat dan banyak minum air hangat.\"</span>"
  },
  {
    title: "Morning Rush",
    theme: "Kesibukan Pagi Hari & Terburu-buru",
    vocab: [
      { en: "Hurry up", id: "Cepatlah" },
      { en: "Be late", id: "Terlambat" },
      { en: "Where are my keys?", id: "Di mana kunci-kunciku?" },
      { en: "Lunch box", id: "Kotak makan siang" },
      { en: "Ready to go", id: "Siap untuk pergi" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Hurry up or we will be late for school/work!\"</span><br>" +
      "  <span class=\"id-text\">\"Cepatlah atau kita akan terlambat ke sekolah/kerja!\"</span><br><br>" +
      "• <span class=\"en-text\">\"Don't forget to grab your lunch box from the kitchen.\"</span><br>" +
      "  <span class=\"id-text\">\"Jangan lupa ambil kotak makan siangmu dari dapur.\"</span>"
  },
  {
    title: "Weekend at Home",
    theme: "Akhir Pekan Santai di Rumah",
    vocab: [
      { en: "Sleep in", id: "Bangun lebih siang" },
      { en: "Pajamas", id: "Piyama / Baju tidur" },
      { en: "Bake a cake", id: "Memanggang kue" },
      { en: "Board games", id: "Permainan papan" },
      { en: "Family time", id: "Waktu bersama keluarga" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"It's Saturday! We can sleep in and relax all morning.\"</span><br>" +
      "  <span class=\"id-text\">\"Ini hari Sabtu! Kita bisa bangun agak siang dan bersantai sepanjang pagi.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Let's play some board games together this afternoon.\"</span><br>" +
      "  <span class=\"id-text\">\"Mari bermain beberapa permainan papan bersama sore ini.\"</span>"
  },
  {
    title: "Home Decorating",
    theme: "Dekorasi & Merapikan Interior Rumah",
    vocab: [
      { en: "Hang a picture", id: "Menggantung bingkai foto" },
      { en: "Paint the wall", id: "Mengecat dinding" },
      { en: "Rearrange furniture", id: "Menata ulang perabotan" },
      { en: "Curtains", id: "Gorden / Tirai" },
      { en: "Vase of flowers", id: "Vas bunga" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Let's hang this new family picture on the living room wall.\"</span><br>" +
      "  <span class=\"id-text\">\"Mari gantung foto keluarga baru ini di dinding ruang tamu.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Changing the curtains makes the room look brighter.\"</span><br>" +
      "  <span class=\"id-text\">\"Mengganti gorden membuat ruangan terlihat lebih cerah.\"</span>"
  },
  {
    title: "Bedtime with Kids",
    theme: "Rutinitas Pengantar Tidur Anak",
    vocab: [
      { en: "Bedtime story", id: "Cerita pengantar tidur" },
      { en: "Brush teeth", id: "Menggosok gigi" },
      { en: "Put on pajamas", id: "Memakai piyama" },
      { en: "Turn off lights", id: "Mematikan lampu" },
      { en: "Sweet dreams", id: "Mimpi indah" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"It's bedtime. Who wants to hear a bedtime story tonight?\"</span><br>" +
      "  <span class=\"id-text\">\"Sudah waktunya tidur. Siapa yang ingin mendengarkan cerita pengantar tidur malam ini?\"</span><br><br>" +
      "• <span class=\"en-text\">\"Sleep tight and sweet dreams, my little one.\"</span><br>" +
      "  <span class=\"id-text\">\"Tidur yang nyenyak dan mimpi indah, anak kecilku.\"</span>"
  },
  {
    title: "Technology & Wi-Fi",
    theme: "Teknologi Rumah & Jaringan Wi-Fi",
    vocab: [
      { en: "Wi-Fi password", id: "Kata sandi Wi-Fi" },
      { en: "Smart TV", id: "Televisi pintar" },
      { en: "Connect to internet", id: "Menghubungkan ke internet" },
      { en: "Remote control", id: "Kendali jarak jauh / Remot" },
      { en: "Charger cable", id: "Kabel pengisi daya" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"What is the guest Wi-Fi password for our home network?\"</span><br>" +
      "  <span class=\"id-text\">\"Apa kata sandi Wi-Fi tamu untuk jaringan rumah kita?\"</span><br><br>" +
      "• <span class=\"en-text\">\"The internet connection is a bit slow today.\"</span><br>" +
      "  <span class=\"id-text\">\"Koneksi internetnya agak lambat hari ini.\"</span>"
  },
  {
    title: "Water & Plumbing",
    theme: "Air & Masalah Saluran Pipa",
    vocab: [
      { en: "Water tap", id: "Keran air" },
      { en: "Drain", id: "Saluran pembuangan" },
      { en: "Water heater", id: "Pemanas air" },
      { en: "Clogged sink", id: "Wastafel tersumbat" },
      { en: "Turn off tap", id: "Mematikan keran" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"Please make sure to turn off the water tap tightly after use.\"</span><br>" +
      "  <span class=\"id-text\">\"Tolong pastikan untuk menutup keran air dengan kencang setelah dipakai.\"</span><br><br>" +
      "• <span class=\"en-text\">\"The kitchen sink is clogged. We need to unclog it.\"</span><br>" +
      "  <span class=\"id-text\">\"Wastafel dapur tersumbat. Kita harus memperbaikinya.\"</span>"
  },
  {
    title: "Pantry & Groceries",
    theme: "Persediaan Dapur & Belanjaan Rumah",
    vocab: [
      { en: "Grocery shopping", id: "Belanja kebutuhan dapur" },
      { en: "Pantry", id: "Lemari penyimpanan makanan" },
      { en: "Running out of...", id: "Kehabisan..." },
      { en: "Cooking oil", id: "Minyak goreng" },
      { en: "Sugar and salt", id: "Gula dan garam" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"We are running out of cooking oil and sugar. We need to buy some.\"</span><br>" +
      "  <span class=\"id-text\">\"Kita kehabisan minyak goreng dan gula. Kita harus membelinya.\"</span><br><br>" +
      "• <span class=\"en-text\">\"Let's check what we need before going to the supermarket.\"</span><br>" +
      "  <span class=\"id-text\">\"Mari periksa apa yang kita butuhkan sebelum pergi ke supermarket.\"</span>"
  },
  {
    title: "Quiet Time",
    theme: "Waktu Tenang & Privasi di Rumah",
    vocab: [
      { en: "Do not disturb", id: "Jangan diganggu" },
      { en: "Need some privacy", id: "Butuh sedikit privasi" },
      { en: "Lock the door", id: "Mengunci pintu" },
      { en: "Quiet zone", id: "Zona tenang" },
      { en: "Resting", id: "Beristirahat" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"I am working on an important project, please do not disturb me.\"</span><br>" +
      "  <span class=\"id-text\">\"Aku sedang mengerjakan proyek penting, tolong jangan ganggu aku.\"</span><br><br>" +
      "• <span class=\"en-text\">\"I need some quiet time to read my book in my room.\"</span><br>" +
      "  <span class=\"id-text\">\"Aku butuh waktu tenang untuk membaca bukuku di kamar.\"</span>"
  },
  {
    title: "Leaving Home",
    theme: "Berpamitan & Keluar Rumah",
    vocab: [
      { en: "See you later", id: "Sampai jumpa lagi" },
      { en: "Have a nice day", id: "Semoga hari menyenangkan" },
      { en: "Lock up the house", id: "Mengunci rumah" },
      { en: "Drive safely", id: "Berkendara dengan aman" },
      { en: "Be back soon", id: "Segera kembali" }
    ],
    sentences: 
      "• <span class=\"en-text\">\"I am leaving for work now. See you this evening!\"</span><br>" +
      "  <span class=\"id-text\">\"Aku berangkat kerja sekarang. Sampai jumpa sore ini!\"</span><br><br>" +
      "• <span class=\"en-text\">\"Goodbye, honey! Drive safely and have a nice day.\"</span><br>" +
      "  <span class=\"id-text\">\"Dadah sayang! Berkendaralah dengan aman dan semoga harimu menyenangkan.\"</span>"
  }
];

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
  
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");
  if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
  if (themeLabel) themeLabel.textContent = isDark ? "Light" : "Dark";
  
  const metaThemeColor = document.getElementById("metaThemeColor");
  if (metaThemeColor) {
    metaThemeColor.content = isDark ? "#12171D" : "#f5f2eb";
  }
  
  try { 
    localStorage.setItem("homeEngTheme", theme); 
  } catch(e) {}
}

let currentTheme = "dark";
try { 
  currentTheme = localStorage.getItem("homeEngTheme") || "dark"; 
} catch(e) {}

applyTheme(currentTheme);

const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
  });
}

function initDays() {
  const container = document.getElementById("days");
  if (!container) return;
  container.innerHTML = "";
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
