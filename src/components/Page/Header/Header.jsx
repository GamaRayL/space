import { HeadBar } from "components/HeadBar";
import { HeadContent } from "components/HeadContent";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <HeadBar />
      </div>
      <HeadContent />
    </header>
  );
};
