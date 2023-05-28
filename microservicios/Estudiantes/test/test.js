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
                expect(res.body.estudiantes.length).to.equal(2); // Se espera que el resultado sea 100.
				done();
			});
	});
});

describe('Crear',()=>{
    it('debería crear un nuevo estudiante', (done) => {
        const estudiante = {
            //cambiar los datos al momento de realizar los test
          nombre: 'Juan Perez', 
          edad: 20,
          carrera: 'Ingeniería',
          email: 'juan@example.com',
          telefono: 123456789
        };
  
        chai.request(API_URL)
          .post('/crear')
          .send(estudiante)
          .end((error, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('nombre', estudiante.nombre);
            expect(res.body).to.have.property('edad', estudiante.edad);
            expect(res.body).to.have.property('carrera', estudiante.carrera);
            expect(res.body).to.have.property('email', estudiante.email);
            expect(res.body).to.have.property('telefono', estudiante.telefono);
            done();
          });
      });
    });
  
  