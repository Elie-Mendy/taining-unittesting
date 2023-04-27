var expect = require('chai').expect;

function titleCase(title) {
    return title.split(" ").map(word => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.be.equal('A');
expect(titleCase('vertigo')).to.be.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
