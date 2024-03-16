import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page for website  " />
      </Helmet>
      <div>Home</div>
    </>
  );
}
