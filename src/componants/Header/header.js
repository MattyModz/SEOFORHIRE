import Nav from "./nav";

const Header = () => {
  return (
    <>
      <head>
        <title>SeoforHire</title>
        <link rel="stylesheet" href="../src/styles/index.scss" />

        <link rel="icon" href="./logo.png"></link>
        <meta
          name="SEOForHire Recruitment web app"
          content="Seo For Hire Recruitment Homepage"
        ></meta>
      </head>

      <Nav />
    </>
  );
};

export default Header;
