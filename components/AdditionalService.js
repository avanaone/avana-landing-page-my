import React, { useState } from "react";
import { Button, LinkButton } from "../components/Button";

const getPackages = import("../json/packages.json");

export default function AdditionalService() {
  const [additionalService, setAdditionalServices] = useState([]);
  const [isModal, setIsModal] = useState(false);

  getPackages.then((res) =>
    setAdditionalServices(res.default.id.additional_services)
  );

  const toggleModal = () => setIsModal(!isModal);

  return (
    <>
      <Button type="button" className="btn-primary" onClick={toggleModal}>
        Layanan Tambahan
      </Button>
      <div className={`modal ${isModal ? "is-active" : ""}`}>
        <div className="modal-background" onClick={toggleModal} />
        <div className="modal-content hf-sticky">
          <div className="modal-header-sticky">
            <h2>Layanan Tambahan</h2>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
          <table>
            <tbody>
              {additionalService.map((service, idx) => (
                <tr key={idx} className="addon">
                  <td>{service.name}</td>
                  <td>
                    <ul>
                      {service.services.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    {Array.isArray(service.price) ? (
                      <>
                        <ul>
                          {service.price.map((item, idx) => (
                            <li key={idx} style={{ listStyle: `none` }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      service.price
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <img
            srcSet={
              require('../public/assets/images/price/Brosur Layanan Tambahan-03.jpg?resize?webp')
                .srcSet
            }
            alt=""
          />
          <img
            srcSet={
              require('../public/assets/images/price/Brosur Layanan Tambahan-04.jpg?resize?webp')
                .srcSet
            }
            alt=""
          /> */}
          <div className="modal-footer-sticky">
            <LinkButton
              href="http://nanya.online/tanya-ava-3"
              target="__blank"
              className="btn-primary btn-middle"
            >
              Hubungi Kami
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
