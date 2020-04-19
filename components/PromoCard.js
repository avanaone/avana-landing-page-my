import Link from "next/link";
import dayjs from "dayjs";

import { LinkButton } from "./Button";

export default function PromoCard({ promo }) {
  dayjs.locale("id");

  let dateEnd = [];

  if (promo.period.end) {
    dateEnd = promo.period.end.match(/\d+/g);
  }

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
            {promo.period.start && promo.period.end ? (
              <>
                {promo.period.start !== promo.period.end
                  ? `${dayjs(promo.period.start, "DD/MM/YYYY").format(
                      "DD MMM"
                    )} - ${dayjs(
                      new Date(dateEnd[2], dateEnd[1], dateEnd[0]),
                      "DD/MM/YYYY"
                    ).format("DD MMM YYYY")}`
                  : `${dayjs(promo.period.start, "DD/MM/YYYY").format(
                      "DD MMMM YYYY"
                    )}`}
              </>
            ) : (
              "Lifetime"
            )}
          </span>
          <Link href="/promo/[code]" as={`/promo/${promo.code}`}>
            <a className="button ava-button btn-primary">Lihat Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
