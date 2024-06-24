import { Page } from "@components/Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home'
};

const Home = () => {
  return (
      <Page>
        <h2>Home Page</h2>
      </Page>
  )
}

export default Home;
