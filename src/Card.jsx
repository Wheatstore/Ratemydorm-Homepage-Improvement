import './school.css'

function UniversityCard({ name, numReviews }) {
    return (
      <div className="card">
        <h3>{name}</h3>
        <p>Number of Reviews: {numReviews}</p>
      </div>
    );
  }

function SchoolCard(){
    const universities = [
        {
          name: "Boston University",
          numReviews: 417
        },
        {
          name: "Cornell University",
          numReviews: 181
        },
        {
          name: "Michigan State University",
          numReviews: 127
        },
        {
          name: "New York University",
          numReviews: 133
        },
        {
          name: "Northeastern University",
          numReviews: 359
        }
      ];
    
      // Render the first 5 university cards
    
      const universityCards = universities.slice(0, 5).map((uni, index) => (
        <UniversityCard key={index} name={uni.name} numReviews={uni.numReviews} />
      ));
    
      return (
        <div>
          {universityCards}
        </div>
      );
    
}

export default SchoolCard