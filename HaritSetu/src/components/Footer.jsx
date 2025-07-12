
import { FaRecycle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-100 py-8 text-center text-sm text-green-800">
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="mb-2">© 2025 HaritSetu</p>
        <p className="mb-2 flex justify-center items-center gap-1">
          Made with <FaRecycle className="inline text-green-600" /> for a sustainable tomorrow
        </p>
        <p className="underline decoration-dotted">
          contact_haritsetu@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
