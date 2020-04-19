import Link from "next/link";
import { LinkButton } from "./Button";

export default function EventCard({ event }) {
  return (
    <div className="event">
      <div
        className="image"
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className="detail">
        <span className="has-text-success has-text-weight-bold">
          {event.date}
        </span>
        <div>
          <h3
            className="name is-size-6"
            title={event.title}
          >{`${event.title.slice(0, 75)}${
            event.title.length > 75 ? " ..." : ""
          }`}</h3>
        </div>
        <hr />
        <div>
          <div>
            <span title={event.location}>{`${event.location.slice(0, 75)}${
              event.location.length > 75 ? " ..." : ""
            }`}</span>
          </div>
          <Link href="/event/[id]" as={`/event/${event.id}`}>
            <a className="button ava-button btn-primary">Lihat Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
