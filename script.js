// Define color data
const colors = [
    { name: "Black", value: 0, multiplier: 1, tolerance: null },
    { name: "Brown", value: 1, multiplier: 10, tolerance: 1 },
    { name: "Red", value: 2, multiplier: 100, tolerance: 2 },
    { name: "Orange", value: 3, multiplier: 1000, tolerance: null },
    { name: "Yellow", value: 4, multiplier: 10000, tolerance: null },
    { name: "Green", value: 5, multiplier: 100000, tolerance: 0.5 },
    { name: "Blue", value: 6, multiplier: 1000000, tolerance: 0.25 },
    { name: "Violet", value: 7, multiplier: 10000000, tolerance: 0.1 },
    { name: "Gray", value: 8, multiplier: 100000000, tolerance: 0.05 },
    { name: "White", value: 9, multiplier: null, tolerance: null },
    { name: "Gold", value: null, multiplier: 0.1, tolerance: 5 },
    { name: "Silver", value: null, multiplier: 0.01, tolerance: 10 }
];

// Populate dropdowns
function populateSelects() {
    const selects = ["band1", "band2", "multiplier", "tolerance"];
    selects.forEach(id => {
        const sel = document.getElementById(id);
        colors.forEach(c => {
            const opt = document.createElement("option");
            opt.value = c.name;
            opt.text = c.name;
            sel.appendChild(opt);
        });
    });
}

function calculateResistance() {
    const b1 = document.getElementById("band1").value;
    const b2 = document.getElementById("band2").value;
    const mul = document.getElementById("multiplier").value;
    const tol = document.getElementById("tolerance").value;

    if (!b1 || !b2 || !mul || !tol) {
        document.getElementById("result").innerText = "Resistance = —";
        return;
    }

    const band1 = colors.find(c => c.name === b1);
    const band2 = colors.find(c => c.name === b2);
    const multiplier = colors.find(c => c.name === mul);
    const tolerance = colors.find(c => c.name === tol);

    const baseValue = (band1.value * 10) + band2.value;
    const resistance = baseValue * multiplier.multiplier;
    const formatted = formatResistance(resistance);

    document.getElementById("result").innerText = 
        `Resistance = ${formatted} ±${tolerance.tolerance}%`;
}

function formatResistance(val) {
    if (val >= 1e6) return (val / 1e6) + " MΩ";
    if (val >= 1e3) return (val / 1e3) + " kΩ";
    return val + " Ω";
}

window.onload = populateSelects;
