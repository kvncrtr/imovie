import Ticket from '../images/movie_tickets.jpg';

const Home = () => {
   return (
      <>
         <div className="text-center">
            <h2>Find a movie to watch tonight!</h2>
            <hr></hr>
            <img src={Ticket} alt="movie ticket"></img>
         </div>
      </>
   )
};

export default Home;