import { RussianRubleIcon } from "lucide-react";
import { FC } from "react";

const PRICES_DATA: PriceItemProps[] = [
  {
    img: "",
    price: 0,
    title: "",
  },
];

const PriceComponent = () => {
  return <section></section>;
};

interface PriceItemProps {
  img: string;
  title: string;
  price: number;
}
const PriceItem: FC<PriceItemProps> = ({ img, title, price }) => {
  return (
    <div className="rounded-lg">
      <span className="">
        от {price}
        <RussianRubleIcon />
      </span>
    </div>
  );
};

export { PriceComponent, PriceItem };
