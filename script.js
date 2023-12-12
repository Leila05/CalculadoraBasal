const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const INPUT = document.getElementById('peso');

//Para que se pueda apretar el boton con enter.
INPUT.addEventListener("keyup", function (e) {
    if (e.code === 'Enter') {
        CALCULAR.click();
    }
});

//Realiza el calculo cuando se hace click en el botón.
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        calcFlujo(DATO);
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso_inicial){
    if (peso_inicial <= 10) {
        let hid = peso_inicial * 100;
        let flujo = hid / 24;
        FLU.innerHTML = flujo + ' cc/hr';
        let mant_medio = flujo * 1.5;
        MAN.innerHTML = 'm+m/2 ' + mant_medio + ' cc/hr';
    } else if (peso_inicial > 10 && peso_inicial <= 20) {
        let peso1 = peso_inicial;
        while (peso1 > 10) {
            peso1 = peso1 - 1;
        }
        let hid1 = peso1 * 100;
        let peso2 = peso_inicial - peso1;
        let hid2 = peso2 * 50;
        let vol_diario = hid1 + hid2;
        let flujo = vol_diario / 24;
        FLU.innerHTML = flujo + ' cc/hr';
        let mant_medio = flujo * 1.5;
        MAN.innerHTML = 'm+m/2 ' + mant_medio + ' cc/hr';
    } else if (peso_inicial <= 30) {
        let peso1 = peso_inicial;
        while (peso1 > 10) {
            peso1 -= 1;
        }
        let hid1 = peso1 * 100;
        let peso_dif1 = peso_inicial - peso1;
        let hid2 = 0;
        let hid3 = 0;
        if (peso_dif1 > 10) {
            let peso2 = peso_dif1;
            while (peso2 > 10) {
                peso2 -= 1;
            }
            hid2 = peso2 * 50;
            let peso_dif2 = peso_dif1 - peso2;

            if (peso_dif2 <= 10) {
                hid3 = peso_dif2 * 20;
            }
        }

        let vol_diario = hid1 + hid2 + hid3;
        let flujo = vol_diario / 24;
        FLU.innerHTML = flujo + ' cc/hr';
        let mant_medio = flujo * 1.5;
        MAN.innerHTML = 'm+m/2 ' + mant_medio + ' cc/hr';
    } else {
        let sup_corpo = ((peso_inicial * 4) + 7) / (parseInt(peso_inicial) + 90);
        console.log(sup_corpo);
        let resul1 = (sup_corpo * 1500);
        FLU.innerHTML = resul1 + ' cc';
        let resul2 = (sup_corpo * 2000);
        MAN.innerHTML = resul2 + ' cc';
    }
}