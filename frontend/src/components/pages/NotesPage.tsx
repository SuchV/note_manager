import { Container } from "react-bootstrap";
import NotesPageLoggedInView from "../NotesPageLoggedInView";
import NotesPageLoggedOutView from "../NotesPageLoggedOutView";
import { User } from "../../models/user";
import styles from "../../styles/Note.module.css";

interface NotesPageProps {
    loggedInUser: User | null,
}

const NotesPage = ({loggedInUser}: NotesPageProps) => {
    return (
        <Container className={styles.NotesPage}>
				<>
					{loggedInUser
						? <NotesPageLoggedInView />
						: <NotesPageLoggedOutView />
					}
				</>
			</Container>
      );
}
 
export default NotesPage;