import React, { useState } from "react";
import Button from "../components/Button";

const getPackages = import("../json/packages.json");

export default function AdditionalService() {
  const [additionalService, setAdditionalServices] = useState([]);
  const [isModal, setIsModal] = useState(false);

  getPackages.then((res) =>
    setAdditionalServices(res.default.id.additional_services)
  );

  const toggleModal = () => setIsModal(!isModal);

  const previewPDF = () =>  window.open('/assets/files/layanan_tambahan_2020.pdf');

  return (
    <>
      <Button type="button" className="btn-primary" onClick={previewPDF}>
        Layanan Tambahan
      </Button>
      <div className={`modal ${isModal ? "is-active" : ""}`}>
        <div className="modal-background" onClick={toggleModal} />
        <div className="modal-content">
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={toggleModal}
          >
            Close
          </button>
          <h2>Layanan Tambahan</h2>
          <table>
            <tbody>
              {additionalService.map((service, idx) => (
                <tr key={idx}>
                  <td>{service.name}</td>
                  <td>
                    <ul>
                      {service.services.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
