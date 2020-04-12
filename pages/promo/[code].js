import { useRouter } from "next/router";
import parser from "html-react-parser";

export default function Promo({ data }) {
  const router = useRouter();

  const promo = data.find((x) => x.code === router.query.code);
  console.log(promo);

  return (
    <div>
      <h3>{promo.code}</h3>
      <p>{parser(promo.description)}</p>
    </div>
  );
}

Promo.getInitialProps = async () => {
  const res = await import("../../json/promo.json");
  const data = res.default;

  return { data };
};
