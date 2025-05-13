import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random_color_generator";
import StarRating from "./components/Star-rating";
import ImageSlider from "./components/Image-slider";
import LoadMoreData from "./components/Load-more-button";
import RecursiveMenu from "./components/Recursive Navigation Menu";
import menus from "./components/Recursive Navigation Menu/data";
import QRCodeGenerator from "./components/QR code Generator";
import LightDarkMode from "./components/theme switch";
import ScrollIndicator from "./components/Scroll indicator";
import TabTest from "./components/custom-Tabs/tab-test";

function App() {
  return (
    <div className="App">
      {/* accordian component */}
      {/* <Accordian /> */}

      {/* random color generator */}
      {/* <RandomColor /> */}

      {/* star rating  */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'5'}/> */}

      {/* LoadMoreButton */}
      {/* <LoadMoreData/> */}

      {/* RecursiveMenu / Tree View / Menu UI /*/}
      {/* <RecursiveMenu menu={menus} /> */}

      {/*  QR code Generator */}
      {/* <QRCodeGenerator/> */}

      {/* switch theme light and dark mode using custooom hook  to save in local storage s */}
      {/* <LightDarkMode /> */}


      {/*  scroll indicator  */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}


      {/* custom tabs component */}
      <TabTest/>
       
    </div>
  );
}

export default App;
