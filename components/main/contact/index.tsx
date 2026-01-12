import Title from "@/components/common/text/title";
import SocialLink from "./social-link";

const ContactSection = () => {
  return (
    <>
      <Title className="text-center">Let&apos;s Work Together</Title>
      <div className="flex justify-center items-center mb-1">
        <div className="relative text-lg font-bold group w-fit">
          <a
            href="mailto:trivm182003@gmail.com"
            className="group-hover:underline transition duration-100 group-hover:text-blue-400"
          >
            trivm182003@gmail.com
          </a>
          <span className="group-hover:text-blue-400 absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            →
          </span>
        </div>
      </div>

      <div className="flex gap-1 justify-center mb-8 text-sm text-muted-foreground">
        <a
          href="tel:0798078551"
          className="hover:underline transition duration-100 hover:text-blue-400"
        >
          +(84) 798 078 551
        </a>
        <span>|</span>
        <span>Ho Chi Minh City</span>
      </div>
      <div className="flex justify-center sm:gap-16 gap-8 ">
        <SocialLink
          href={"https://www.facebook.com/alex.vo.9212"}
          className="hover:text-blue-500"
        >
          Facebook
        </SocialLink>
        <SocialLink
          href={"https://www.linkedin.com/in/tr%C3%AD-v%C3%B5-3a48352a2/"}
          className="hover:text-blue-700"
        >
          Linkedin
        </SocialLink>
        <SocialLink
          href={"https://github.com/AlexVo18"}
          className="hover:text-muted-foreground"
        >
          GitHub
        </SocialLink>
      </div>
    </>
  );
};

export default ContactSection;
