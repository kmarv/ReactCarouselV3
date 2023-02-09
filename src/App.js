import "./styles.css";
import Carousel from "./component/Carousel";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  // const images = [
  //   "https://vibrantholidaysafaris.com/wp-content/uploads/2021/04/Honeymoon-Holiday-Murchison-National-Park-570x319.jpg",
  //   "https://vibrantholidaysafaris.com/wp-content/uploads/2021/04/Honeymoon-Holiday-To-Murchison-Falls-National-Park-570x319.jpg",
  //   "https://vibrantholidaysafaris.com/wp-content/uploads/2021/04/Honeymoon-Holiday-Murchison-National-Park-570x319.jpg",
  //   "https://vibrantholidaysafaris.com/wp-content/uploads/2021/04/Honeymoon-Holiday-Murchison-National-Park-570x319.jpg",
  //   "https://vibrantholidaysafaris.com/wp-content/uploads/2021/04/Honeymoon-Holiday-uganda-570x319.jpg"
  // ];

  return (
    <div className="App">
      <Carousel delay={2000} children={numbers} />
    </div>
  );
}
