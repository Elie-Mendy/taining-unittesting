var expect = require('chai').expect;

/*
Battleship game engine

!Tests on following features 
* Current player and winner 
* Number of ships
* Position of ships
* Status as active or sunk
*/

// Test Suite
describe('checkForShip', function () {
    // Test spec (unit test)
    var checkForShip = require('../game_logic/ship_methods').checkForShip

    it('should correctly report no ship at a given players coordinate', function () {
        player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [9,9])).to.be.false;
    });

    it('should correctly report a ship at a given players coordinate', function () {
        player = {
            ships: [
                {
                    locations: [[9,9]]
                }
            ]
        }
        expect(checkForShip(player, [9,9])).to.be.true;
    });

    it('should handle ships located at more than one coordinate', function () {
        player = {
            ships: [
                {
                    locations: [[0,0], [0,1]]
                }
            ]
        }
        expect(checkForShip(player, [0,1])).to.be.true;
        expect(checkForShip(player, [0,2])).to.be.false;
        expect(checkForShip(player, [9,9])).to.be.false;
    });

    it('should handle checking multiple ships', function () {
        player = {
            ships: [
                {
                    locations: [[0,0], [0,1]]
                },
                {
                    locations: [[3,1], [3,2]]
                },
                {
                    locations: [[9,4], [8,4], [7,4], [6,4]]
                },
            ]
        }
        expect(checkForShip(player, [0,1])).to.be.true;
        expect(checkForShip(player, [0,2])).to.be.false;
        expect(checkForShip(player, [9,9])).to.be.false;
        expect(checkForShip(player, [9,4])).to.be.true;
        expect(checkForShip(player, [9,9])).to.be.false;
    });
});

describe('damageShip', function () {
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a given ship at a given location', function () {
        var ship = {
            locations: [[0,0]],
            damage: []
        };

        damageShip(ship, [0,0]);
        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0,0]);
    });
})
