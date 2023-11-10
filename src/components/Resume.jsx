import styles from "./resume.module.css";
import eye from "../images/eye.jpg";

export default function Resume({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.profile}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImage}>
            <img src={eye} />
          </div>
          <div className={styles.profileName}>
            <h1>Richard Terrence Go</h1>
            <h5>Front-End Developer</h5>
            <div className={styles.profileSummary}>
              <p>
                A graduate of Bootcamp equipped with coding language as my
                strength.And eager to learn deeper to improve my skill and
                ability to create a quality application if I will be hired by
                your good company for the role. I am passionate to adapt the
                trend technology stacks.
              </p>
              <a href="./cv.pdf">Download</a>
            </div>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.title}>Contact Info</h2>
          <ul>
            <li>+63 960 422 9888</li>
            <li>richardterrencego@gmail.com</li>
            <li>https://facebook/rex14storm/</li>
            <li>Tacloban City,Leyte,Philippines</li>
          </ul>
        </div>
      </div>
      <div className={styles.profileAbout}>
        <h2>Skill</h2>
        <div className={styles.progress}>
          <h3>REACTJS</h3>
          <div className={styles.progressbar1}>
            <div className={styles.progresscolor1}>80%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
