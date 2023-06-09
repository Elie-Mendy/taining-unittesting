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
describe('SHIP METHODS', function() {
    describe('checkForShip', function () {
        // Test spec (unit test)
        var checkForShip = require('../game_logic/ship_methods').checkForShip
        var player;
    
        before(function () {
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
        });
        
        it('should correctly report no ship at a given players coordinate', function () {
            expect(checkForShip(player, [9,9])).to.be.false;
        });
    
        it('should correctly report a ship at a given players coordinate', function () {
            expect(checkForShip(player, [0,0])).to.be.equal(player.ships[0]);
        });
    
        it('should handle ships located at more than one coordinate', function () {
            expect(checkForShip(player, [0,1])).to.be.equal(player.ships[0]);
            expect(checkForShip(player, [0,2])).to.be.false;
            expect(checkForShip(player, [9,9])).to.be.false;
        });
    
        it('should handle checking multiple ships', function () {
            expect(checkForShip(player, [0,1])).to.be.equal(player.ships[0]);
            expect(checkForShip(player, [0,2])).to.be.false;
            expect(checkForShip(player, [9,9])).to.be.false;
            expect(checkForShip(player, [9,4])).to.be.equal(player.ships[2]);
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
    
    describe('fire', function () {
        var fire = require('../game_logic/ship_methods').fire;
        var player;
    
        beforeEach(function () {
            player = {
                ships: [
                    {
                        locations: [[0,0]],
                        damage: []
                    }
                ]
            };
        })
    
        after(function () {
            console.log('entire suite compled')
        });
    
        afterEach(function () {
            console.log('one unit test  completed')
        });
    
        it('should record damage on players ship at a given coordinate', function () {
            fire(player, [0,0]);
            expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
        });
    
        it('should not record damage if there is no ship at my coordinate', function () {
            fire(player, [0,1]);
            expect(player.ships[0].damage).to.be.empty;
        });
    })
})
