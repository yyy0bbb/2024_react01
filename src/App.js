import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Courseitem from "./components/Courseitem";
import CourseListCard from "./components/course/CourseListCard";

// function Main() {
//   return(
//     <main>
//       <Counter />
//     </main>

//   );
// }

// function Counter() {
//   return(
//     <button>Counter</button>
//   );
// }

// > 리액트에서는 class 예악어기 때문에 사용 못하고,
// > class 대신 className이라고 사용한다.
function App() {
  return (
    <main>
      {/* <Header />
      <Main />
      <Footer /> */}

      {/* <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
             <Courseitem />
            <Courseitem />
            <Courseitem /> 
          </div>
      
        </div>
      </div>  */}

      <CourseListCard />
    </main>
  );
}

export default App;
