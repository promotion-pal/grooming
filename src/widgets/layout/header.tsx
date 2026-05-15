import { appConfig } from "@/shared/config/app";

const Header = () => {
  return (
    <header>
      <p className="">{appConfig.company.name}</p>
    </header>
  );
};

export { Header };
