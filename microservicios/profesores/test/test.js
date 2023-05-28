const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../index');

chai.use(chaiHttp);

describe('Microservicio', () => {
  it('debería devolver una lista de profesores con longitud 10', function (done) {
    this.timeout(5000); // Aumentar el límite de tiempo a 5 segundos

    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(10);
        done();
      });
  });
});

