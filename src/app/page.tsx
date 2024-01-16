import styles from "./page.module.css";

export default async function Home() {
  const technologies = await getData();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>German Derbes Catoni</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Master FrontEnd Developer Roadmap 2024
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <p className={styles.title}>Frontend Roadmap</p>
      </div>

      <div className={styles.grid}>
        {technologies &&
          technologies?.map((item) => (
            <a key={item.id} href={`/item/${item.id}`} className={styles.card}>
              <h2>
                {item.name} <span>-&gt;</span>
              </h2>
              <p>{item.description}</p>
            </a>
          ))}
      </div>
    </main>
  );
}

const getData = async () => {
  const posts = await import("../../roadMapItems.json");
  return posts?.technologies;
};
