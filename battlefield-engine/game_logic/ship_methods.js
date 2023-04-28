function checkForShip (player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];
        shipPresent = ship.locations.filter(actualCoodinate => {
            return actualCoodinate[0] === coordinates[0] && actualCoodinate[1] === coordinates[1];
        })[0];
        
        if (shipPresent) { return ship };
    }

    return false;
}

function damageShip (ship, coordinates) {
    ship.damage.push(coordinates);
}

function fire(player, coordinates) {
    var ship  = checkForShip(player, coordinates);
    ship && damageShip(ship, coordinates);
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;