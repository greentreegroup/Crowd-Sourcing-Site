//import logo from './logo.svg';
import './Overview.css';

function Overview() {
  return (
    <div className="App">
      <section className="features">
      <div className="feature">
        <div className="icon">
        <img src="world.png" alt="House 1" className="home__img" />
    </div>

          <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
          <p className ="thirdItem"> </p>
          <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
      </div>

      <div className="feature">
        <div className="icon">
          <img src="trophy.png" alt="House 1" className="home__img" />
        </div>
          <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
          <p className ="thirdItem"> </p>
          <p className="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
      </div>

      <div className="feature">
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 14.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
          <h4 className="heading-4 heading-4--dark">All homes in in top locations</h4>
          <p className ="thirdItem"> </p>
          <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
      </div>

      <div className="feature">
        <div className="icon">
          <img src="key.png" alt="House 1" className="home__img" />
        </div>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className ="thirdItem"> </p>
          <p className="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="feature">
        <div className="icon">
          <img src="graph.png" alt="House 1" className="home__img" />
        </div>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className ="thirdItem"> </p>
          <p className="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
      </div>

      <div className="feature">
        <div className="icon">
          <img src="bag.png" alt="House 1" className="home__img" />
        </div>
          <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
          <p className ="thirdItem"> </p>
          <p className="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
      </div>
    </section>

    </div>
  );
}

export default Overview;
