import Blogs from "../Blogs/Blogs";
import styles from "./MainSection.module.scss"

const MainSection = ({title}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <Blogs />
        </div>
    )
}

export default MainSection;