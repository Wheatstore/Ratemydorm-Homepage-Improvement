import './school.css'
import Typewriter from './typewriter';

function UniversityCard({ name, numReviews, img }) {
    return (
      <div className="card">
        <div className="img-div">
            <img className='university-img' src={img} alt={`${name}-img`} />
        </div>
        <div className="content">
            <Typewriter className='name'text={name}/>   
            <p className='reviews'>Number of Reviews: {numReviews}</p>
        </div>
      </div>
    );
  }

function SchoolCard(){
    const universities = [
        {
            name: "Boston University",
            numReviews: 417,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fuser-photos%252FalIRTuGbpZXrg45s15PoxIGHQZI2%252FalIRTuGbpZXrg45s15PoxIGHQZI2-IMG_7448.j-1682444898705%3Falt%3Dmedia%26token%3Dc804b64f-b2f7-4561-92f8-49f841c2484f&w=1920&q=75'
        },
        {
            name: "Northeastern University",
            numReviews: 359,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252FNortheastern-University.jpg%3Falt%3Dmedia%26token%3D882b2658-602c-4991-aa43-4d2b6b57fd98&w=1920&q=75'
        },
        {
            name: "UC Riverside",
            numReviews: 222,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252FUC-Riverside.jpg%3Falt%3Dmedia%26token%3D9a632368-97c2-4b32-b9c0-9f9180f0ad95&w=1920&q=75'
        },
        {
            name: "Cornell University",
            numReviews: 181,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252FCornell-University.jpg%3Falt%3Dmedia%26token%3D4ae69427-bc50-440c-a31a-59675c81d03d&w=1920&q=75'
        },
        {
            name: "University of Southern California",
            numReviews: 151,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252FUniversity-of-Southern-California.jpg%3Falt%3Dmedia%26token%3D4bf00396-da44-4c2f-badf-87c2812f3471&w=1920&q=75'
        },
        {
            name: "UC Los Angeles",
            numReviews: 142,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252Fuploads%252FalIRTuGbpZXrg45s15PoxIGHQZI2%252Funiversity-of-california-los-angeles-IMG_2198.j1682990653882%3Falt%3Dmedia%26token%3D1ad5486a-a98b-4d70-a59b-085e08e107d9&w=1920&q=75'
        },
        {
            name: "University of Connecticut",
            numReviews: 138,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252FUConn.jpg%3Falt%3Dmedia%26token%3D5850992b-b2d1-4bfc-b34e-5f8ab109bf49&w=1920&q=75'
        },
        {
            name: "UC Berkeley",
            numReviews: 135,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252FUniversity-of-California-Berkeley.jpg%3Falt%3Dmedia%26token%3D6bd49c3a-1a83-4685-991c-50c184e1ac36&w=1920&q=75'
        },
        {
            name: "New York University",
            numReviews: 133,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252Fuploads%252FalIRTuGbpZXrg45s15PoxIGHQZI2%252Fnew-york-university-New-York-U1685205237162%3Falt%3Dmedia%26token%3D69c05f8e-c678-4f66-b9e8-1ec6fb5de716&w=1920&q=75'
        },
        {
            name: "Michigan State University",
            numReviews: 127,
            img: 'https://www.ratemydorm.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fratemydorm-7bc3c.appspot.com%2Fo%2Fcolleges%252Fuploads%252FalIRTuGbpZXrg45s15PoxIGHQZI2%252Fmichigan-state-university-IMG_1155.j1683223521734%3Falt%3Dmedia%26token%3De4de73d1-854a-4484-a157-f003db08360c&w=1920&q=75'
        }
    ];
    
      // Render the first 5 university cards
    
      const universityCards = universities.map((uni, index) => (
        <UniversityCard key={index} img={uni.img} name={uni.name} numReviews={uni.numReviews} />
      ));
    
      return (
        <div className='card-container'>
          {universityCards}
        </div>
      );
    
}

export default SchoolCard