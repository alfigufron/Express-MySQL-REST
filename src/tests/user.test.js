/* eslint-disable no-undef */
import chai from "chai";
import chaiHttp from "chai-http";

import { baseUrl } from ".";

chai.should();
chai.use(chaiHttp);

const { expect } = chai;

describe("User Test", () => {
  describe("/api/user", () => {
    it("Get User Succesfully", done => {
      chai
        .request(baseUrl)
        .get("/api/user")
        .end((err, res) => {
          expect(res).have.status(200);
          expect(res.body.data).to.be.an("array");
          expect(res.body.meta).to.deep.include({ status: "success" });

          done();
        });
    });
  });
});
