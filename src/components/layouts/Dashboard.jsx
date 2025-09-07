import Stats from "../Stats";
import History from "../History";
import Countdown from "../Countdown";

export default function Dashboard(props) {


    return (
        <section id="dashboard">
            <Stats {...props} />
            <Countdown {...props} />
            <History {...props} />
        </section>
    )
}