let index = require('../index');
let API_CONFIG_PUERTO = index.API_CONFIG_PUERTO;
let API_URL = 'http://localhost:' + API_CONFIG_PUERTO + '';

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('Realizando test unitario', () => {
	it('Deberia devolver 2', (done) => {
		chai.request(API_URL)
            .get('/')
			.end(function(err, res) {
				console.log(res.body)
                expect(res.body.estudiantes.length).to.equal(3); 
				done();
			});
	});
});


  
  