import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          add adventur to your life by joining the #vanlife movement. rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find your Van</Link>
    </div>
  );
}