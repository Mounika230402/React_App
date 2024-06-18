export const ListItems = () => {
    const iplTeams = [
      {
        teamsLogo: "../images/csk.jpg",
        teamName: "CSK",
        Captain: "Ruturaj Gaikwad",
        won: 5,
        wonYears: [2010, 2011, 2018, 2021,2023],
        
      },
      {
        teamsLogo:
          "../../images/srh.jpg",
        teamName: "SRH",
        Captain: "Pat Cummins",
        won: 1,
        wonYears: [2016],
        
      },
      {
        teamsLogo: "",
        teamName: "RCB",
        Captain: "Faf du Plessis",
        won: 0,
        wonYears: [],
        
      },
      {
        teamsLogo: "",
        teamName: "RR",
        Captain: "Sanju Samson",
        won: 1,
        wonYears: [2008],
        
      },
      {
        teamsLogo: "",
        teamName: "LSG",
        Captain: "KL Rahul",
        won: 0,
        wonYears: [],
        
      },
      {
        teamsLogo: "",
        teamName: "DC",
        Captain:"Rishabh Pant",
        won: 0,
        wonYears: [],
        
      },
      {
        teamsLogo: "",
        teamName: "GT",
        Captain: "Shubham Gill",
        won: 0,
        wonYears: [2022],
        
      },
      {
        teamsLogo: "",
        teamName: "KKR",
        Captain: "Shreyas Iyer",
        won: 3,
        wonYears: [2012,2014,2024],
        
      },
      {
        teamsLogo: "",
        teamName: "MI",
        Captain: "Hardik Pandya",
        won: 5,
        wonYears: [2013,2015,2017,2019,2020],
        
      },
      {
        teamsLogo: "",
        teamName: "PK",
        Captain: "Shikhar Dhawan",
        won: 0,
        wonYears: [],
        
      },
    ];
    return (
      <div>
        {iplTeams.map((eachTeam) => {
          return (
            <div>
              <img src={eachTeam.teamsLogo} width={100} height={100} />
              <h2>{eachTeam.teamName}</h2>
              <h4>Captain {eachTeam.Captain}</h4>
              <h5>Matches Won {eachTeam.won}</h5>
              {eachTeam.wonYears.map((eachPlayer) => {
                return (
                  <>
                    <h6>{eachPlayer}</h6>
                  </>
                );
              })}
            </div>
          );
        })}
        {/* {fruitList.map((eachFruit) => {
          return <h4>{eachFruit}</h4>;
        })} */}
      </div>
    );
  };