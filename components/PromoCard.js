import {useState, useEffect} from "react";
import Link from "next/link";
import dayjs from "dayjs";

import { LinkButton } from "./Button";

export default function PromoCard({ promo }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if(localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

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
            title={lang === 'en' ? promo.title.en : promo.title.bm}
          >{`${lang === 'en' ? promo.title.en.slice(0, 75) : promo.title.bm.slice(0, 75)}${
            lang === 'en' && promo.title.en.length > 75 ? " ..." : lang === 'bm' && promo.title.bm.length > 75 ? " ..." : ""
          }`}</h3>
        </div>
        <hr />
        <div>
          <span>
            <b>{lang === 'en' ? 'Validity Period' : 'Bila'}</b>
            <br />
            {promo.period.start && promo.period.end ? (
              <>
                {promo.period.start !== promo.period.end
                  ? `${dayjs(promo.period.start).format("DD MMM")} - ${dayjs(
                      // new Date(dateEnd[2], dateEnd[1], dateEnd[0]
                      promo.period.end
                    ).format("DD MMM YYYY")}`
                  : `${dayjs(promo.period.start).format("DD MMMM YYYY")}`}
              </>
            ) : (
              "Lifetime"
            )}
          </span>
          <Link href="/promo/[code]" as={`/promo/${promo.code}`}>
            <a className="button ava-button btn-primary">{lang === 'en' ? 'See Details' : 'Lagi'}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
