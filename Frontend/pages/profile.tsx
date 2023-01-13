import Head from "next/head";
import styles from "../styles/Home.module.css";
import Dashboard from "../components/Profile/Dashboard";
import { useContext, useEffect } from "react";
import GithubContext from "../context/app-context";
import { useRouter } from "next/router";

export default function Home() {
  const ctx = useContext(GithubContext);
 

  return (
    <>
      <Head>
        <title>Greple Github Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Dashboard></Dashboard>
      </main>
    </>
  );
}
