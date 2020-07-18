import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'timeago.js';

export default function Toaster({ subscribers }) {
  const [activeToaster, setActiveToaster] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveToaster(10);
      if (activeToaster < 4) {
        setTimeout(() => {
          setActiveToaster(activeToaster + 1);
        }, 4000);
      } else {
        setTimeout(() => {
          setActiveToaster(0);
        }, 4000);
      }
    }, 6000);
    return () => clearInterval(interval);
    // return () => {
    //   clearInterval(interval);
    // };
  });

  return (
    <div className='subscribers'>
      {subscribers.map((subscriber, i) => {
        return (
          <div
            className={`toaster ${i === activeToaster ? 'active' : 'inactive'}`}
          >
            <div className='icon-ava'>
              <img
                srcSet={
                  require('public/assets/images/Toaster-icon.png?resize?webp')
                    .srcSet
                }
                alt='AVA Hi'
              />
            </div>
            <div className='user'>
              <p>
                <span className='name'>
                  {subscriber.first_name} {subscriber.last_name}
                </span>
                <span className='text'>
                  {' '}
                  from{' '}
                  {subscriber.country === 'Indonesia' ||
                  subscriber.country === 'Malaysia' ||
                  subscriber.country === 'Singapore' ? (
                    <img
                      className='flag'
                      srcSet={
                        require(`public/assets/images/country/country-${
                          subscriber.country === 'Indonesia'
                            ? 'ID'
                            : subscriber.country === 'Malaysia'
                            ? 'MY'
                            : subscriber.country === 'Singapore'
                            ? 'SG'
                            : subscriber.country
                        }.png?resize&size=50?webp`).srcSet
                      }
                      alt='AVA Cashier'
                    />
                  ) : (
                    subscriber.country
                  )}{' '}
                  has powered up their business with AVANA!
                </span>
              </p>
              <p className='details'>
                {format(new Date(subscriber.join_date + ' UTC'))}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
