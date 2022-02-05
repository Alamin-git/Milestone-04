
// problem 1
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'please give a positive Number'
    }
    let vori = ana / 16;
    return vori;
}

// problem 2
function pandaCost(singaraPis, somucaPis, jilapiPis) {
    const singara1pis = 7;
    const somuca1pis = 10;
    const jilapi1pis = 15;
    let totalSingaraPrice = singara1pis * singaraPis;
    let totalSonucaPrice = somuca1pis * somucaPis;
    let totalJilapiPrice = jilapi1pis * jilapiPis;
    let totalPrice = totalSingaraPrice + totalSonucaPrice + totalJilapiPrice;

    return totalPrice;
}


// problem 3

function picnicBudget(members) {
    const first100 = 5000;
    const secend100 = 4000;
    const restMem = 3000;
    if (typeof members != 'number') {
        return 'please give a positive Number'
    }
    if (members <= 100) {
        const totalCost = members * first100;
        return totalCost;
    }
    else if (members <= 200) {
        const first100Members = 100 * first100;
        let restMember = members - 100;
        let restMemberCost = restMember * secend100;
        let totalCost = first100Members + restMemberCost;
        return totalCost;
    }
    else {
        const first100Members = 100 * first100;
        const secend100Members = 100 * secend100;
        let restMember = members - 200;
        let restMemberCost = restMember * restMem;
        let totalCost = first100Members + secend100Members + restMemberCost;
        return totalCost;
    }
}


// problem 4
function oddFriend(names) {
    let element = names[0].length;
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.length >= element && name.length % 2 != 0) {
            return name;
        }
    }
}