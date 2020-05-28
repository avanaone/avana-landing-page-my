import {useState, useEffect} from "react";
import Link from 'next/link';
import { LinkButton } from './Button';

export default function EventCard({ event }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if(localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <div className={`event`}>
      <div
        className='image'
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className='detail'>
        <span className='has-text-success has-text-weight-bold'>
          {event.date}
        </span>
        <div>
          <h3
            className='name is-size-6'
            title={lang === 'en' ? event.title.en : event.title.bm}
          >{`${lang === 'en' ? event.title.en.slice(0, 75) : event.title.bm.slice(0, 75)}${
            lang === 'en' && event.title.en.length > 75 ? " ..." : lang === 'bm' && event.title.bm.length > 75 ? " ..." : ""
          }`}</h3>
        </div>
        <hr />
        <div>
          <div>
            <span title={event.location}>{`${event.location.slice(0, 75)}${
              event.location.length > 75 ? ' ...' : ''
            }`}</span>
          </div>
          <Link href='/event/[id]' as={`/event/${event.id}`}>
            <a className='button ava-button btn-primary'>{lang === 'en' ? 'See Details' : 'Lagi'}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
