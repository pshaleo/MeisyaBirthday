const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
});

confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
});

confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
});

let kartu = document.getElementById("kartu");

function ubahKartu() {
    kartu.innerHTML = `
                <h1 class="font-semibold text-wrap animate__animated animate__zoomIn">
                    Selamat ulang tahun! Semoga tahun ini makin banyak kebahagiaan,
                    rezeki lancar, dan segala impian jadi kenyataan. Semoga kita terus bisa
                    bareng-bareng, seru-seruan, dan saling dukung ya! 🎉🎂
                </h1>
                <h2 class="mt-3 animate__animated animate__fadeIn">
                    - Dari: Pasha Leomajesta -
                </h2>
                <button
                    class="p-2 bg-slate-600 text-white rounded mt-5 hover:bg-slate-900 transition ease-in w-full animate__animated animate__delay-1s animate__tada"
                    onclick="refresh()"
                >
                    Tutup
                </button>`;
}

function refresh() {
    location.reload();
}