import Nav from "./nav";

const Header = () => {
  return (
    <>
      <head>
        <title>SeoforHire</title>
        <link rel="stylesheet" href="../src/styles/index.scss" />
        <link rel="icon" href="./logo.png"></link>

        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </head>

      <Nav />
    </>
  );
};

export default Header;
