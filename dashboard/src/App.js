import "./App.css";
import Header from "./Components/Header/Header";
import PrimarySearchAppBar from "./Components/HeadNav/HeadNav";
import VerticalAppBar from "./Components/VerticalNav/VerticalNav";
import Cards from "./Components/Cards/Cards";
import ProfitCard from "./Components/ProfitCard/ProfitCard";
import Activity from "./Components/Activity/Activity";
import Graph from "./Components/Graph/Graph";
import SimpleView from "./Components/simpleView/SimpleView";
import RecentOrdersTable from "./Components/RecentOrdersTable/RecentOrdersTable";
import FeedbackCard from "./Components/FeedbackCard/FeedbackCard";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <PrimarySearchAppBar></PrimarySearchAppBar> {/* top nav bar */}
        <div className="BodyWrapper">
          <VerticalAppBar></VerticalAppBar> {/* side nav bar */}
          <div>
            <Header></Header>
            <div className="allCardsWrapper">
              <div className="cardWrapper">
                <Cards></Cards>
              </div>
              <div className="profitHold">
                <ProfitCard ></ProfitCard>
              </div>
            </div>
            <div className="simpleViewStyle">
              <div className="graphHold">
                <div className="ActivityCardWrapper">
                  <Activity></Activity> {/* middle activity header */}
                </div>
                <div className="ActivityGraphWrapper">
                  <Graph></Graph> {/* middle graph */}
                </div>
              </div>
              <SimpleView className="simpleHold"></SimpleView>{" "}
              {/* middle goal, popular dishes and menus stuff */}
            </div>
            <div className="lastRow">
              <div className="tableStyle">
                <RecentOrdersTable></RecentOrdersTable>{" "}
                {/* recent order table */}
              </div>
              <FeedbackCard className="feedbackHold"></FeedbackCard>{" "}
              {/* Feedback card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
