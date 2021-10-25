let laptopMouse = {
    size: 'standard',
    color: 'purple',
    accentColor: 'black',
    manufacturer: 'Tecknet',
    new: 'true',
    //array type
}

let bang = {
    color: 'red',
    shape: 'cylinder',
    sugar: true,
    caffeineMg: 300,
    ingredients: ['Taurine', 'BCAA\'s', 'Caffeine', 'Red Dye No 3'],
    manufacturer: {
        name: 'VPX',
        location: '123 Main St, Weston FL'
    }
}



// Access every propery
// This can of bang is (color), and is in a (shape) container, it (is sugar free, has sugar), it also has (caffeineMg) mg of caffeine,
// the main ingredients are (list of ingredients), and it was made by (manufacturer name), at ( manufacturer location)

let message = `This can of bang is ${bang.color}, and is in a ${bang.shape}, it is ${bang.sugar ? 'has sugar' : 'is sugar free'}, it also has ${bang.caffeineMg}. The main ingredients are ${bang.ingredients.join(', ')}, and it was made by ${bang.manufacturer.name}, at ${bang.manufacturer.location}`