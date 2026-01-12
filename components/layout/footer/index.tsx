import ContainerWrapper from "../container";

const Footer = () => {
  return (
    <ContainerWrapper
      defaultSpacing={false}
      className="text-center py-10"
      bgClassName="border-t border-foreground/10 dark:border-foreground/20"
    >
      <div>© 2026 Vo Minh Tri. All Rights Reserved.</div>
    </ContainerWrapper>
  );
};

export default Footer;
