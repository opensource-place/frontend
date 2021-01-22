import { BrowserRouter, Route } from "react-router-dom";
import {
    Projects,
    LandingPage,
    Start,
    Doc,
    Login,
    ProjectDetail,
} from "./pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
            <Route path="/projects" component={Projects} />
            <Route
                path="/project/:projectname/:reponame"
                component={ProjectDetail}
            />
            <Route path="/start" component={Start} />
            <Route path="/doc" component={Doc} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
};

export default Router;
