import styles from "./pageStyles.module.css";


export default async function Page({ params }: { params: { slug: string } }) {
  const tecnologies = await import("../../../../roadMapItems.json");

  const listOfItems = tecnologies?.technologies?.find(
    (i) => i?.id === params?.slug
  );

  return (
    <div className={styles.container}>
      <p>Post {listOfItems?.name}</p>
    </div>
  );
}
