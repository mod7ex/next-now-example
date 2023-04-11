import Head from "next/head";
import Clock from "~/components/Clock";
import styles from "~/styles/modules/home.module.scss";
import { fetchNow } from "~/utils";

export async function getServerSideProps() {
  const now = await fetchNow();

  return {
    props: { now },
  };
}

const Home: React.FC<{ now: INow }> = ({ now }) => {
  return (
    <>
      <Head>
        <title>Clock</title>
        <meta name="description" content="API based Clock" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Clock now={now} />
      </main>
    </>
  );
};

export default Home;
