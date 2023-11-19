const chai = require("chai")
const http = require("chai-http")
const server = require("../server");
const expect = chai.expect

chai.use(http)

describe('GET /citas', () => {
   it('Debería retornar el código de estado 200', (done) => {
   chai.request(server)
      .get('/citas')
      .end((err, res) => {
         expect(res).to.have.status(200);
         console.log('Respuesta GET:', res.body);
         done(); 
      });
   });
});

describe('Rutas de Citas', () => {

   describe('POST /citas', () => {
      it('Debería crear una nueva cita', (done) => {
         const nuevaCita = {
            fecha: '2023-11-15',
            paciente: 'Juan Pérez',
            tratamiento: 'Consulta general',
         };

         chai.request(server)
            .post('/citas')
            .send(nuevaCita)
            .end((err, res) => {
               expect(res).to.have.status(201);
               expect(res.body).to.be.an('object');
               expect(res.body).to.have.property('id');
               expect(res.body.fecha).to.equal(nuevaCita.fecha);
               expect(res.body.paciente).to.equal(nuevaCita.paciente);
               expect(res.body.tratamiento).to.equal(nuevaCita.tratamiento);
               console.log('Respuesta POST:', res.body);
               done();
            });
      });
   });

   describe('Citas API', () => {
      it('Debería obtener todas las citas', (done) => {
      chai.request(server)
         .get('/citas')
         .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
         });
      });
   });

   describe('PUT /citas/:id', () => {
      it('Debería modificar una cita existente', (done) => {
         const citaExistenteId = 1;
         const citaModificada = {
            fecha: '2023-11-16',
            paciente: 'Juan Pérez Modificado',
            tratamiento: 'Consulta especializada',
         };

         chai.request(server)
            .put(`/citas/${citaExistenteId}`)
            .send(citaModificada)
            .end((err, res) => {
               expect(res).to.have.status(200);
               expect(res.body).to.be.an('object');
               expect(res.body.message).to.equal('Cita modificada con éxito');
               expect(res.body.cita).to.have.property('id', citaExistenteId);
               expect(res.body.cita.fecha).to.equal(citaModificada.fecha);
               expect(res.body.cita.paciente).to.equal(citaModificada.paciente);
               expect(res.body.cita.tratamiento).to.equal(citaModificada.tratamiento);
               console.log('Respuesta PUT:', res.body);
               done();
            });
      });
   });
});