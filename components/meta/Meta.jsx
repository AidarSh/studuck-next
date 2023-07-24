import Head from "next/head";

export default function Meta({ title, desc, keyword }) {
  return (
    <Head>
      <title>{title || "Studuck - сайт для студентов"}</title>
      <meta
        name="description"
        content={desc || "Студак - универсальный помощник для студента"}
      />
      <meta
        name="keywords"
        content={
          keyword ||
          "studuck, студак, рейтинг вузов, топ вузы, вузы, вузы россии"
        }
      />
      <meta name="yandex-verification" content="e40e9e6f90726afa" />
    </Head>
  );
}
