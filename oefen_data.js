// Volledige database met alle 26 oefeningen (Pelckmans + KEMIA)
const alleOefeningenPool = [
    // --- REEKS 1: PELCKMANS METHODE ---
    {
        omschrijving: "Vul de coëfficiënten aan voor de ontleding van keukenzout (NaCl).",
        htmlTemplate: `<input type="text" data-ans="2"> NaCl &rarr; <input type="text" data-ans="2"> Na + <input type="text" data-ans="1"> Cl<sub>2</sub>`
    },
    {
        omschrijving: "Vul de coëfficiënten aan voor de verbranding van magnesium.",
        htmlTemplate: `<input type="text" data-ans="2"> Mg + <input type="text" data-ans="1"> O<sub>2</sub> &rarr; <input type="text" data-ans="2"> MgO`
    },
    {
        omschrijving: "Vul de coëfficiënten aan voor de vorming van ammoniak (NH₃).",
        htmlTemplate: `<input type="text" data-ans="1"> N<sub>2</sub> + <input type="text" data-ans="3"> H<sub>2</sub> &rarr; <input type="text" data-ans="2"> NH<sub>3</sub>`
    },
    {
        omschrijving: "Zorg dat de atoomsoorten links en rechts in evenwicht zijn.",
        htmlTemplate: `<input type="text" data-ans="1"> CuO + <input type="text" data-ans="2"> HCl &rarr; <input type="text" data-ans="1"> CuCl<sub>2</sub> + <input type="text" data-ans="1"> H<sub>2</sub>O`
    },
    {
        omschrijving: "Vul de coëfficiënten aan voor de reactie van zwavel met zuurstofgas.",
        htmlTemplate: `<input type="text" data-ans="2"> S + <input type="text" data-ans="3"> O<sub>2</sub> &rarr; <input type="text" data-ans="2"> SO<sub>3</sub>`
    },
    {
        omschrijving: "Balanceer deze ontledingsreactie van kaliumchloraat.",
        htmlTemplate: `<input type="text" data-ans="2"> KClO<sub>3</sub> &rarr; <input type="text" data-ans="2"> KCl + <input type="text" data-ans="3"> O<sub>2</sub>`
    },
    {
        omschrijving: "Vul de ontbrekende coëfficiënten aan.",
        htmlTemplate: `<input type="text" data-ans="1"> Cl<sub>2</sub> + <input type="text" data-ans="2"> KI &rarr; <input type="text" data-ans="2"> KCl + <input type="text" data-ans="1"> I<sub>2</sub>`
    },
    {
        omschrijving: "Balanceer de vorming van ijzer(III)oxide (roest).",
        htmlTemplate: `<input type="text" data-ans="4"> Fe + <input type="text" data-ans="3"> O<sub>2</sub> &rarr; <input type="text" data-ans="2"> Fe<sub>2</sub>O<sub>3</sub>`
    },
    {
        omschrijving: "Een complexere vergelijking. Tel goed alle atomen in en buiten de haakjes!",
        htmlTemplate: `<input type="text" data-ans="2"> H<sub>3</sub>PO<sub>4</sub> + <input type="text" data-ans="3"> Ca(OH)<sub>2</sub> &rarr; <input type="text" data-ans="1"> Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + <input type="text" data-ans="6"> H<sub>2</sub>O`
    },
    {
        omschrijving: "Leid uit deze reactievergelijking de waarden x en y af.",
        htmlTemplate: `C<sub>x</sub>H<sub>y</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O &nbsp;&nbsp;|&nbsp;&nbsp; x = <input type="text" data-ans="3"> , y = <input type="text" data-ans="8">`
    },
    {
        omschrijving: "Leid uit deze reactievergelijking de waarden x, y en z af.",
        htmlTemplate: `3 Ag + 4 HNO<sub>3</sub> &rarr; 3 Ag<sub>x</sub>N<sub>y</sub>O<sub>z</sub> + NO + 2 H<sub>2</sub>O &nbsp;&nbsp;|&nbsp;&nbsp; x = <input type="text" data-ans="1"> , y = <input type="text" data-ans="1"> , z = <input type="text" data-ans="3">`
    },

    // --- REEKS 2: EXTRA OEFENINGEN (KEMIA.NL) ---
    {
        omschrijving: "Maak de verbranding van methaangas (CH₄) kloppend.",
        htmlTemplate: `<input type="text" data-ans="1"> CH<sub>4</sub> + <input type="text" data-ans="2"> O<sub>2</sub> &rarr; <input type="text" data-ans="1"> CO<sub>2</sub> + <input type="text" data-ans="2"> H<sub>2</sub>O`
    },
    {
        omschrijving: "Maak de verbranding van methanthiol (CH₄S) kloppend.",
        htmlTemplate: `<input type="text" data-ans="1"> CH<sub>4</sub>S + <input type="text" data-ans="3"> O<sub>2</sub> &rarr; <input type="text" data-ans="1"> CO<sub>2</sub> + <input type="text" data-ans="2"> H<sub>2</sub>O + <input type="text" data-ans="1"> SO<sub>2</sub>`
    },
    {
        omschrijving: "Ontleding van natriumwaterstofcarbonaat (bakpoeder).",
        htmlTemplate: `<input type="text" data-ans="2"> NaHCO<sub>3</sub> &rarr; <input type="text" data-ans="1"> Na<sub>2</sub>CO<sub>3</sub> + <input type="text" data-ans="1"> CO<sub>2</sub> + <input type="text" data-ans="1"> H<sub>2</sub>O`
    },
    {
        omschrijving: "Onvolledige verbranding van methaangas tot koolstofmonoxide.",
        htmlTemplate: `<input type="text" data-ans="2"> CH<sub>4</sub> + <input type="text" data-ans="3"> O<sub>2</sub> &rarr; <input type="text" data-ans="2"> CO + <input type="text" data-ans="4"> H<sub>2</sub>O`
    },
    {
        omschrijving: "De thermietreactie tussen aluminium en koperoxide.",
        htmlTemplate: `<input type="text" data-ans="2"> Al + <input type="text" data-ans="3"> CuO &rarr; <input type="text" data-ans="1"> Al<sub>2</sub>O<sub>3</sub> + <input type="text" data-ans="3"> Cu`
    },
    {
        omschrijving: "Reactie van kaliumoxide met water tot kaliumhydroxide.",
        htmlTemplate: `<input type="text" data-ans="1"> K<sub>2</sub>O + <input type="text" data-ans="1"> H<sub>2</sub>O &rarr; <input type="text" data-ans="2"> KOH`
    },
    {
        omschrijving: "Reductie van ijzeroxide met koolstofmonoxide in de hoogovens.",
        htmlTemplate: `<input type="text" data-ans="1"> Fe<sub>2</sub>O<sub>3</sub> + <input type="text" data-ans="3"> CO &rarr; <input type="text" data-ans="2"> Fe + <input type="text" data-ans="3"> CO<sub>2</sub>`
    },
    {
        omschrijving: "Redoxreactie tussen jood en natriumthiosulfaat.",
        htmlTemplate: `<input type="text" data-ans="1"> I<sub>2</sub> + <input type="text" data-ans="2"> Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> &rarr; <input type="text" data-ans="2"> NaI + <input type="text" data-ans="1"> Na<sub>2</sub>S<sub>4</sub>O<sub>6</sub>`
    },
    {
        omschrijving: "Neutralisatiereactie tussen zwavelzuur en natriumhydroxide.",
        htmlTemplate: `<input type="text" data-ans="1"> H<sub>2</sub>SO<sub>4</sub> + <input type="text" data-ans="2"> NaOH &rarr; <input type="text" data-ans="2"> H<sub>2</sub>O + <input type="text" data-ans="1"> Na<sub>2</sub>SO<sub>4</sub>`
    },
    {
        omschrijving: "[VWO] Katalytische ammoniakoxidatie (Ostwaldproces).",
        htmlTemplate: `<input type="text" data-ans="4"> NH<sub>3</sub> + <input type="text" data-ans="5"> O<sub>2</sub> &rarr; <input type="text" data-ans="4"> NO + <input type="text" data-ans="6"> H<sub>2</sub>O`
    },
    {
        omschrijving: "[VWO] Reactie van lood(IV)oxide met zoutzuur.",
        htmlTemplate: `<input type="text" data-ans="1"> PbO<sub>2</sub> + <input type="text" data-ans="4"> HCl &rarr; <input type="text" data-ans="1"> PbCl<sub>4</sub> + <input type="text" data-ans="2"> H<sub>2</sub>O`
    },
    {
        omschrijving: "[VWO] Bereiding van chloorgas via kaliumpermanganaat.",
        htmlTemplate: `<input type="text" data-ans="2"> KMnO<sub>4</sub> + <input type="text" data-ans="16"> HCl &rarr; <input type="text" data-ans="2"> KCl + <input type="text" data-ans="2"> MnCl<sub>2</sub> + <input type="text" data-ans="8"> H<sub>2</sub>O + <input type="text" data-ans="5"> Cl<sub>2</sub>`
    },
    {
        omschrijving: "[VWO] Omzetting van fosforzuur naar fosforpentachloride.",
        htmlTemplate: `<input type="text" data-ans="3"> H<sub>3</sub>PO<sub>4</sub> + <input type="text" data-ans="5"> HCl &rarr; <input type="text" data-ans="1"> PCl<sub>5</sub> + <input type="text" data-ans="4"> H<sub>2</sub>O`
    },
    {
        omschrijving: "Reactie van gloeiend ijzer met waterdamp.",
        htmlTemplate: `<input type="text" data-ans="3"> Fe + <input type="text" data-ans="4"> H<sub>2</sub>O &rarr; <input type="text" data-ans="1"> Fe<sub>3</sub>O<sub>4</sub> + <input type="text" data-ans="4"> H<sub>2</sub>`
    },
    {
        omschrijving: "Hydrolyse van fosforoxychloride.",
        htmlTemplate: `<input type="text" data-ans="1"> POCl<sub>3</sub> + <input type="text" data-ans="3"> H<sub>2</sub>O &rarr; <input type="text" data-ans="1"> H<sub>3</sub>PO<sub>4</sub> + <input type="text" data-ans="3"> HCl`
    }
];