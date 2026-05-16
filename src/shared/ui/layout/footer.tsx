import { appConfig } from "@/shared/config/app";

export function Footer() {
  return (
    <footer className="border-t border-wrapper/20 py-8">
      <div className="container text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} {appConfig.company.name}. Все права
          защищены.
        </p>
        <p className="mt-2">
          <a href="#" className="hover:underline">
            Политика конфиденциальности
          </a>
        </p>
      </div>
    </footer>
  );
}
