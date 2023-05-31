let index = require('../index');
let API_CONFIG_PUERTO = index.API_CONFIG_PUERTO;
let API_URL = 'http://localhost:' + API_CONFIG_PUERTO + '';

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('Realizando test unitario de biblioteca... ', () => {
	it('Deberia devolver 8', (done) => {
		chai.request(API_URL)
            .get('/')
			.end(function(err, res) {
				console.log(res.body)
                expect(res.body.libros.length).to.equal(9); // Se espera que el resultado sea 100.
				done();
			});
	});
});


