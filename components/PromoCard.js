import Link from "next/link";

import moment from "moment";

export default function PromoCard({ promo }) {
  moment.locale("id");

  return (
    <div className="promo">
      <div
        className="image"
        style={{ backgroundImage: `url(${promo.image})` }}
      />
      <div className="detail">
        <div>
          <h3
            className="name is-size-6"
            title={promo.title}
          >{`${promo.title.slice(0, 75)}${
            promo.title.length > 75 ? " ..." : ""
          }`}</h3>
        </div>
        <hr />
        <div>
          <span>
            <b>Masa Berlaku</b>
            <br />
            {promo.period.start !== promo.period.end
              ? `${moment(promo.period.start, "DD/MM/YYYY").format(
                  "DD MMM"
                )} - ${moment(promo.period.end, "DD/MM/YYYY").format(
                  "DD MMM YYYY"
                )}`
              : `${moment(promo.period.start, "DD/MM/YYYY").format(
                  "DD MMMM YYYY"
                )}`}
          </span>
          <Link href="/promo/[code]" as={`/promo/${promo.code}`}>
            <a className="ava-btn btn-primary">Lihat Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
