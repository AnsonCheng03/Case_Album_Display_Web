import { component$ } from "@builder.io/qwik";
import styles from "./examples.module.css";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$(({ photos }: any) => {
  const loc = useLocation();
  const nav = useNavigate();
  console.log("PATHNAME: ", process?.env?.BASE_URL_PATH);
  return (
    <section class={styles.examples}>
      <h2>案例分享</h2>
      <div class={styles.cards}>
        <div class={styles.cardsContainer}>
          {photos.value.map((photo: any) => {
            return photo.Highlight?.map((photoName: any) => (
              <div
                class={styles.card}
                key={photo.id}
                onClick$={() => {
                  const url = new URL(loc.url.href);
                  // if env is dev, use localhost:8080
                  url.pathname = `${(typeof process !== "undefined" && process?.env?.BASE_URL_PATH) || ""}/example`;
                  url.searchParams.set("type", photo.type);
                  url.searchParams.set("name", photo.name);
                  nav(url.href);
                }}
              >
                <img
                  src={photo.path + "/" + photoName}
                  class={styles.cardImg}
                />
                <div class={styles.cardContent}>
                  {photo.type && (
                    <h3 class={[styles.photoType, styles.photoTitle]}>
                      {photo.type}
                    </h3>
                  )}
                  {photo.data && (
                    <h3 class={[styles.photoData, styles.photoTitle]}>
                      {photo.data}
                    </h3>
                  )}
                  {photo.name && (
                    <h3 class={[styles.photoName, styles.photoTitle]}>
                      {photo.name}
                    </h3>
                  )}
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </section>
  );
});
