import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LinkButton } from './Button';

export default function EbookCard({ event }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  return (
    <div className={`event`}>
      <div
        className='image'
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className='detail'>
        {/* <span className='has-text-success has-text-weight-bold'>
          {event.date}
        </span> */}
        <div>
          <h3
            className='name is-size-6'
            title={event.title}
          >{`${event.title.slice(0, 75)}${
            event.title.length > 75 ? ' ...' : ''
          }`}</h3>
        </div>
        <hr />
        <div>
          {/* <div>
            <span title={event.location}>{`${event.location.slice(0, 75)}${
              event.location.length > 75 ? ' ...' : ''
            }`}</span>
          </div> */}
          <Link href={`/assets/files/${event.file}`}>
            <a className='button ava-button btn-primary' target='_blank'>
              Download
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
