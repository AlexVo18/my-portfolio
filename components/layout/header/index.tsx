import ContainerWrapper from "../container";
import ThemeButton from "./theme-button";

const Header = () => {
  return (
    <ContainerWrapper
      defaultSpacing={false}
      className="flex items-center justify-between py-4"
    >
      <div className="text-xl">Vo Minh Tri</div>
      <ThemeButton />
    </ContainerWrapper>
  );
};

export default Header;
