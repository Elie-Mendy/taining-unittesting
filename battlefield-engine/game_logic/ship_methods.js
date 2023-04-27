function checkForShip (player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];
        shipPresent = ship.locations.filter(actualCoodinate => {
            return actualCoodinate[0] === coordinates[0] && actualCoodinate[1] === coordinates[1];
        })[0];
        
        if (shipPresent) { return true };
    }

    return false;
}

module.exports.checkForShip = checkForShip;