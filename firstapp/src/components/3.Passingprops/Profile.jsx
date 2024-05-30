

import GetImageUrl from "../../utils/ExtractingComponent";

function Profile({maria , katsuko}) {
  console.log(maria);
  console.log(katsuko);
  return (
    <>

      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{maria.name}</h2>
        
        <img
          className="avatar"
          src={GetImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {maria.profession}
          </li>
          <li>
            <b>Awards: 4 </b> 
            {maria.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {maria.discovery}
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>{katsuko.name}</h2>
        <img
          className="avatar"
          src={GetImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {katsuko.profession}
          </li>
          <li>
            <b>Awards: 2 </b> 
            {katsuko.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {katsuko.discovery}
          </li>
        </ul>
      </section>

    </>
  )
}

export default Profile;