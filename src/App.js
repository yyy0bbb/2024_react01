import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Courseitem from "./components/Courseitem";
import CourseListCard from "./components/course/CourseListCard";
import Library from "./components/step01/Library";

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
    <div className="APP">
      {/* // <main>
    //   <Header />
    //   <Main />
    //   <Footer /> 

    //    2단계 
    //    <div className="card">
    //     <div className="card__header">강의 목록</div>
    //     <div className="card__body">
    //       <div className="courses">
    //          <Courseitem />
    //         <Courseitem />
    //         <Courseitem /> 
    //       </div>
      
    //     </div>
    //   </div>  

    //    3단계 
    //    <CourseListCard /> 

    //  </main>  */}
      <Library />
    </div>
  );
}

export default App;
