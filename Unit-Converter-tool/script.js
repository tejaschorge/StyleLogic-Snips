const units = {
    length: ["meters", "feet", "inches"],
    weight: ["kilograms", "pounds"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"]
};

const conversions = {
    length: {
        meters: v => v,
        feet: v => v * 3.28084,
        inches: v => v * 39.3701
    },

    weight: {
        kilograms: v => v,
        pounds: v => v * 2.20462
    },

    temperature: {
        Celsius: v => v,
        Fahrenheit: v => (v * 9/5) + 32,
        Kelvin: v => v + 273.15
    }
};

const inverse = {
    length:{
        meters: v => v,
        feet: v => v / 3.28084,
        inches: v => v / 39.3701
    },

    weight: {
        kilograms: v => v,
        pounds: v => v / 2.20462
    },

    temperature: {
        Celsius: v => v,
        Fahrenheit: v => (v - 32) * 5/9,
        Kelvin: v => v - 273.15
    }
};

function updateUnits(){
    const type = document.getElementById("type").value;
    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");
    from.innerHTML = "";
    to.innerHTML = "";
    units[type].forEach(u => {
        from.innerHTML +=  `<option value="${u}">${u}</option>`;
        to.innerHTML += `<option value="${u}">${u}</option>`;
    });
}

function convert(){
    const type = document.getElementById("type").value;
    const value = parseFloat(document.getElementById("inputValue").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const resultBox = document.getElementById("result");
    if(isNaN(value)){
        resultBox.textContent = "Enter a valid number.";
        resultBox.style.display = "block";
        return;
    }

const inBase = inverse[type][from](value);
const finalVlaue = conversions[type][to](inBase);
resultBox.textContent = `${value} ${from} = ${finalVlaue.toFixed(2)} ${to}`;
resultBox.style.display = "block";

}

updateUnits();