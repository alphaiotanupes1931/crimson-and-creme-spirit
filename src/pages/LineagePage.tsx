import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import brothersHeader from '@/assets/brothers-header.jpg';
import alphaIotaLogo from '@/assets/alpha-iota-logo.png';

// Founding brothers at Morgan State College in 1927
const foundingBrothers = [
  { name: "Charles Law" },
  { name: "Robert \"Cliff\" Tarter"},
  { name: "Kenneth Broom", chapter: "" },
  { name: "Howard \"Jack\" Spencer", chapter: "" },
  { name: "Thomas \"Rapp\" Wheatley" },
  { name: "Henry Joyce", chapter: "" },
  { name: "Randolph Jefferson", chapter: "" },
];

const charterMembers = [
  "Charles Law",
  "Thomas \"Rapp\" Wheatley",
  "Howard \"Jack\" Spencer",
  "Robert \"Cliff\" Tarter",
];

const firstInitiatedMembers = [
  "John W. Patterson",
  "Herbert Jones",
  "Melvin Roy",
  "Babe Jones",
  "Alphues Edwards",
];

const leadershipPositions = [
  { title: "1x 29th International Grand Polemarch" },
  { title: "1x Junior Grand Vice Polemarch" },
  { title: "2x Past Grand Board Members" },
  { title: "3x Eastern Province Polemarch" },
  { title: "1x North Eastern Province Polemarch" },
  { title: "2x Region 1 Board Members" },
];

const chapterRecognition = [
  { year: "2009", title: "International Chapter of the Year" },
  { title: "8x Eastern Province Chapter of the Year" },
  { title: "10x Junior Vice Polemarch" },
  { title: "10x Mr. Morgan State" },
];

const individualHonors = [
  { title: "1x Byron K. Armstrong Awardee" },
  { title: "1x William L. Crump Awardee" },
  { title: "6x Guy L. Grant Awardee" },
];

const detailedAchievements = [
  { 
    title: "Eastern Junior Vice Polemarch", 
    years: "2001-2002, 2002-2003, 2006-2007, 2007-2008, 2008-2009, 2009-2010, 2010-2011, 2012-2013, 2013-2014, 2024-2025" 
  },
  { 
    title: "Guy L. Grant Awardee", 
    years: "1997, 1998, 2001, 2003, 2011" 
  },
  { 
    title: "Mr. Morgan State", 
    years: "1989-1990, 1992-1993, 1994-1995, 1996-1997, 1999-2000, 2006-2007, 2007-2008, 2012-2013, 2015-2016, 2024-2025" 
  },
];

// All lines from 1931 to present based on CSV data
const lineageData = [
  { line: "2024 FA", lineName: "11 Survivors of DestruKtion", brothers: ["Kamron Hampton", "Jaden Koranteng", "Lesley Ofusu", "Mohammed Cole", "Christian Sampson", "Anthony Noakes", "David Osadiaye", "Seydina Salla", "Terell Reed", "Marcus McClean", "Demeir Shipley"] },
  { line: "2023 FA", lineName: "The 5 Kombatants of Katastrophe", brothers: ["Corey Green", "Godley Pierre", "Chaz Crocket", "Nicholas Porter", "Amir White"] },
  { line: "2023 SP", lineName: "The 5 Adversaries of Anarchy", brothers: ["Xavier Johnson", "Mohammed Nafiu", "Miles Hooper", "Tyrus Pincham", "Kottrell Davis"] },
  { line: "2021 FA", lineName: "The 8 Krusaders of the Kavalry", brothers: ["Zack Burke", "Zachary Simmons", "Chandler Hines", "Toryron Brown", "Cleveland Horton III", "Rashashim Gafney", "Keith Parker", "Anthony Dow"] },
  { line: "2018 FA", lineName: "The 14 Revenants of Parnassus", brothers: ["Stephen Hunte III", "Joshua Wilks", "Reginald Clemons II", "Justin Spencer", "Jiair Jackson", "Buford Stennis III", "Simphiwe Denalane", "Brandon Holmes", "Cherif Haidara", "Michal Bowry", "Julius Harvey", "Kishore Comrie", "Justyn Alexander", "Javan Stewart"] },
  { line: "2016 FA", lineName: "14 Regents of Reformation", brothers: ["Marquis Irving", "Sean Osborne II", "Jhonathon McKinney", "Emmanuel Shedu", "Thaddaeus Mitchell", "Habib Durodola", "Jarron Williams", "Shawn Elliot", "Justin Moore", "Michael Ragland Jr.", "Daniel Olumese", "Frantz Sabbat", "Oluwatomisine Enitan", "Diara Woodard"] },
  { line: "2013 FA", lineName: "9 ExeKUTioners of Egality", brothers: ["Harold Lamour", "Johnathan Williams", "Joshua N Tutman", "Saquon T Frazier", "Marcus W Clinton", "Michael C James", "Harold O Ogunbo", "Wayne A Mitchell Jr.", "Wesley Redfearn Jr."] },
  { line: "2011 FA", lineName: "19 Guardians of the Gate", brothers: ["Alvin L Hill", "Troy B Griffin Jr.", "Darrel A Walker", "Justin Vasquez", "Ryan J Cobb", "Marques J Smith", "Michael D Brown ♦", "Isaiah O Aina", "Tyrel C Fuentes", "Shawn W Goins Jr.", "Rasheem N Williams", "Steven R Jackson", "Shane Mitchell", "Kaddeem M Myrie", "Donte S Peters", "Timothy C Pitts", "James M Dillard", "Christoper T Hylton", "Cherrod W Roberts Jr"] },
  { line: "2009 FA", lineName: "4 Monarchs of Madness", brothers: ["Orion W Robinson", "Kevon M Carter ♦", "Richard S Mitchell Jr.", "Terrell M Johnson"] },
  { line: "2008 FA", lineName: "5 Radicals of Resilience", brothers: ["Kemoy S Martin", "Anthony R Showell", "Toney N Dixon", "Troy D Leftwich", "Lori Hasani Adams"] },
  { line: "2007 FA", lineName: "The 6 Mercenaries of Mayhem", brothers: ["Carl H Michel", "Marvin D Carr", "Marcus A Neal-Watts", "Edward S Dunn II", "Trumane M Lawrence", "Calvin R Woody"] },
  { line: "2006 FA", lineName: "12 Prodigies of Peril", brothers: ["Andre J Daley", "Curtis A Russell", "Roland Ampadu", "Zakee A Roberts", "Akeem O Croft", "Cenell D Harrell", "Antoine S Jean-Pierre", "Ronald L Goodman", "Anthony D Prescott", "Charles E Sims", "Taylor E Graham", "Alvin L Rudolph IV"] },
  { line: "2005 FA", lineName: "The 4 Emperors Of Endeavor", brothers: ["Emmaus S Ferdinand", "Romell D Sapp", "Godlove K Ntam", "Nathaniel B McDonald"] },
  { line: "2005 SP", lineName: "4 Konquerors of Konstance", brothers: ["Henian J Newsome", "Kian D Gumbs", "Rory E Brooks", "Aaron J Wiggins"] },
  { line: "2003 FA", lineName: "10 Legends of Longevity", brothers: ["Robert L Green", "Cornelius J Hairston IV", "Steven A Cook", "Duane M Cheers", "Justin A Nicholson", "Ian A Grayson", "Michael A Taliaferro", "Ajamu Parry", "Jo'rell H Whitfield", "Larry M Richardson"] },
  { line: "2000 FA", lineName: "7 Titans of Tragedy", brothers: ["Enyinna O Anthony", "Randolph L Jones Jr.", "Brandon M Wylie", "Ifeanyi Nwoko", "Christopher J Holt", "Floyd E Taliaferro IV", "J. Jerhome Petway"] },
  { line: "1999 SP", lineName: "4 Kreators of Konsistency", brothers: ["Israel Y Miller", "Cory M Whitman", "Theodore E Smith", "Andre A Alston"] },
  { line: "1998 SP", lineName: "5 Kings of Konsciousness", brothers: ["Aaron J Burt", "Ahmed K Collins", "Gonzales Cannon II", "Kenneth Newborn", "Michael L Manning"] },
  { line: "1996 SP", lineName: "11 Tyrants of Time and Pain", brothers: ["Jason A Hines", "Eric S Coit", "Rodney T Dixon", "James T Burns", "Derrick S Evans", "Richard E Anderson", "Tendayi S Kumbula", "Kevin F Parker", "Walter M Jones", "Antoine Q Glasgow", "Antonio Church"] },
  { line: "1993 FA", lineName: "7 Gladiators of Grandeur", brothers: ["Marcus G Bazemore", "Byron B Greene", "Kevin M McGhaw", "James M Chavis", "Mark A Ensley", "Airrion K Keenheel", "Ron J Stevenson"] },
  { line: "1992 FA", lineName: "12 Warriors of Wisdom and Desire", brothers: ["Jason M Clinkscale", "Kwenji S Jackson", "Melvin L Jackson II", "Kendrick I Davis", "Renaud J Logan", "Michael C Pratt", "David J Whittington", "Michael A Price Jr.", "Sherwood C Lennon", "Shawn J Maxwell", "Michael J Austin", "Tyrone W Rogers"] },
  { line: "1992 SP", lineName: "The 8 Apostles of the Apocalypse", brothers: ["Dwayne Godwin", "Darrel W Morris", "Charlie C Morgan II", "Kenyatta Bolton", "Charles E Birdsong III", "Eric L Brown", "Ser Greene", "David A Thompson"] },
  { line: "1990 FA", lineName: "10 Lord of Longevity", brothers: ["Charles Neverdon", "John M Hamilton III", "Marc Kornegay", "Terrance Banko", "Sean A Hendricks", "Daryll Griffin", "Chevell L Thomas", "Craig Harcum", "Kenneth C Thomas", "James W Falson"] },
  { line: "1989 FA", lineName: "13 Disciples of Distinctiveness", brothers: ["Roland R Selby Jr.", "Che Marshall Brown", "Shawn D Mendoza", "Jerry Blanding", "Hugh D Watts", "Tyrone J Crabb", "Terence M Brooks Sr.", "Joseph A Clair", "Victor Bibbins Jr.", "Charles S Jones", "Carlos T Goodall", "Derrick Stanford", "Darren L Clinkscale"] },
  { line: "1988 FA", lineName: "16 Prophets of Persistence", brothers: ["Russell Neverdon", "James L Green", "Elmer David Brooks Jr.", "Daryl A Graham", "Rodney Quick", "Marvin E Mingo", "Wesley C Blount Jr.", "Derrick Taliaferro", "Stephen L Brown Jr.", "Tewodross M. Williams", "Jon W Gordon", "Anthony B Clark", "George S Allen III", "Edward A Grant", "Gregory L Alexander"] },
  { line: "1987 FA", lineName: "The 14 Rebels of Righteousness", brothers: ["Rafael Williams", "Duane A. Donaldson", "Kevin M. Douglas", "Spencer T. Allen", "D. Craig Talley, Jr.", "Herman Grace", "Ronald L. Morris", "Anthony R. Murphy", "Gary H. Smith", "Andrae C. Martin", "Kevin E. Peck", "Jeffrey M. Wheaton", "Brent Carter", "Blair C. Smith"] },
  { line: "1986 FA", lineName: "Seven Soldiers of Solitude", brothers: ["Kevin Johnson", "Curtis Clark", "Martin Mannings", "Earle Bannister", "Lloyd Fennell", "Brian Bennett", "Michael Canady"] },
  { line: "1985 FA", lineName: "11 Knights of Terror", brothers: ["Floyd D Majette", "Arnold L Harvey", "Edgar L Chinn", "William E Hudson Jr.", "Sean L Osborne", "Lonnie H Moore", "Michael E Henderson", "Ronald L Watson Jr.", "Rodney D Witherspoon", "Dwayne A Judson", "Virgil O Martin Jr."] },
  { line: "1984 FA", lineName: "The 9 Agents of Arrogance", brothers: ["Mark E Busbee", "Kody Wood", "Phillip David", "Andre Johnson", "Dennis Reddick", "Vander McBride", "Austin W Henderson Jr.", "Marsden S Coates", "Shaun C Alfred"] },
  { line: "1983 FA", lineName: "15 Nomads of Kaos", brothers: ["Paul Johnson", "Vernon L Taylor", "Ronald L Fletcher", "Robert G Ammons III", "David N Jackson", "Tracy Bowers", "Douglas J Owens", "Anthony C Thomas", "Walter W Johnson", "Craig Bunns", "Danilo De Sousa", "Michael A Johnson", "Jonathan Preston", "Al Baker", "Willie J Myers"] },
  { line: "1982 FA", lineName: "7 Pieces of A Dream", brothers: ["Todd Scott", "Kenneth A Conney", "Kirk D Ralls", "James K Turner", "Harold T Fisher", "Martin J McCrae", "John L Nichols"] },
  { line: "1981 FA", lineName: "The Precedence Twelve", brothers: ["Richard Bryant", "Kevin W Moore", "James B Abram III", "Rodney Adkins", "Harry Stewart", "Michael B James", "Walter Swindell", "James K Battle", "Kevin M Richardson", "Mark Jones"] },
  { line: "1980 FA", lineName: "The 11 Authentic Clones", brothers: ["Lloyd L. Celistan", "Lawrence E. Strange", "Prince E. Banks", "Aaron J. Hall", "Randolo B. Cuttino", "Bernard Baskerville", "Shawn A. Pindell", "Darren Jones", "Michael A. Sharp", "Mark C. Williams", "David M. Standford"] },
  { line: "1979 FA", lineName: "15 Disciples of Disaster", brothers: ["Michael C James", "Mark J Leach", "Maurice Franklin", "Robert L German", "Terrence Battle", "George D Wheeler", "Kelvin Brockington", "David H Childs", "Jonathan W Grant", "Joseph Holmes", "Duane R Flowers", "Howard L Tutman III", "Donald T Davenport", "Michael Henderson", "Richard A Vernon Sr."] },
  { line: "1978 FA", lineName: "GENESIS X (TEN)", brothers: ["James E Paige", "Alvin D Thornton", "Ronald J Bethea", "Lawrence Frazier", "Damon Childs", "Fred L Godette", "Roscoe C Webb II", "Audley A Walters", "Hosa B Showell", "Michael S West"] },
  { line: "1977 FA", lineName: "The Treacherous Twenty", brothers: ["John B Sample III", "Johnny Irofuala", "Warren C Johnson Jr.", "Donald B Marshall", "Anthony Williams", "Nelson B Bascome", "Darryl Felder", "Adam Jackson", "Michael R Moore", "Rowland Ugwuezumba", "Jeffrey Robinson", "David C Walker", "Reginald A Landers", "Robert J Elliotte Jr.", "Kevin B Powell", "Parker B Roach", "Anthony Carr", "Gary L Wade", "Douglas E Washington", "Cleophus A Wade"] },
  { line: "1976 FA", lineName: "The 12 Lords of K.A.O.S", brothers: ["Robert T Pugh", "Claude M Ligon Jr.", "Don K Jenkins", "Robert A Hearne", "Arthur E Burrell III", "Richard P Giles", "Bernard D Jones", "Robert L Williams Jr.", "Michael A Greene", "Nathan L Fletcher", "Bernie L Davis", "Melville W Pugh Jr."] },
  { line: "1975 FA", lineName: "", brothers: ["Marion G Batey", "Derrick E Brown", "Arvonette M Burrell", "Jerry E Gantt", "John C Harris", "Gill R Marsh", "Stanley L Mitchell", "Jerry E Morrison", "Shelby M Paige", "Dennis Randall", "Larry D Turner", "McClinton E Williams", "David C Winfield"] },
  { line: "1974 FA", lineName: "", brothers: ["Marcel J Baynes", "Randolph Hemphill", "Rick Huntley", "Claudius F Jorif Sr.", "Gary C Lee", "Henry D Lewis", "Dwight E Mathis", "Reginald M Quick", "Arthur W Sims"] },
  { line: "1973 FA", lineName: "THE ELITE 8", brothers: ["Theodore R Garrett Jr.", "Melvin C Porter", "Willie H Pulliam", "Floyd E Taliaferro III", "Leslie A Williiams", "Michelle A Willis"] },
  { line: "1972 FA", lineName: "", brothers: ["Samuel T Daniels", "Albert T Jacobs", "Charles H Rogers"] },
  { line: "1971 FA", lineName: "", brothers: ["William R Asbury", "Lucian E Brown", "Tony E Fulton", "Martin A Goins III", "Thomas E Hampton", "Frederick Harrod", "Kenneth R Jones", "Ronald G Knight", "Samuel A Labeach III", "Rodger M Matthews", "James A Polk Jr.", "James E Roberts", "Gary K Shaw", "Marshall B Simmons", "Charles H Spriggs", "Roland H Wilson", "Michael L Wright"] },
  { line: "1970 FA", lineName: "The Untouchable 10", brothers: ["John W Brooks", "Walter A Brown", "Ronald H Carroll", "Edward L Davis", "Edward W David", "Vallen L Emery", "Keith S Haynes", "Anthony C Hudgins", "Preston T Hurtt Jr.", "James E Johnson", "Uthman Ray III", "Leon Richardson", "Donald W Thomas", "Arron L Toland"] },
  { line: "1969 FA", lineName: "", brothers: ["Solomon Davis", "Darrick T Estes", "Allan U Forte", "Arthur D Gray", "Randall K Greene", "Peyton Herbert", "Robert Holmes", "Dale Martin", "Lawrence W Monroe", "Franklin T O'Neal", "Robert L Quarles Jr.", "George F Stokes", "Clyde M Tatum"] },
  { line: "1968 FA", lineName: "", brothers: ["Wilbur C Giles Jr.", "Miles G Harrison M.D.", "Arthur A Holland", "Roy R Jeffers", "Frederick M Jones", "Paul L Leath", "Thomas W McPherson III", "Kenneth L Owens", "Claude R Parran", "Alfredy Pinder", "William T Powell", "Warren A Turner", "James E Wood"] },
  { line: "1967 FA", lineName: "", brothers: ["Kenny A Hooper D.D.S.", "Sidney O Johnson", "George Langford", "Charles C Pergerson", "Walter T Pickett", "Theodore A Powell", "Joseph N Yearwood"] },
  { line: "1966 FA", lineName: "", brothers: ["Leslie J Boyd", "Richard J Diehl", "Walter S Lewis Jr.", "James L Pollett III", "Turhan E Robinson", "Kenneth Royster", "Richard A Scott", "Andre' D Summers", "Irving L Taylor", "Earnest Thompson Jr.", "Carl W Turnipseed", "Howard L Tutman Jr.", "Robert H White", "Robert B Young"] },
  { line: "1965 FA", lineName: "", brothers: ["Arthur I Brown", "Thomas E Dunlap", "Ralph Ford", "James H Gilliam Jr.", "Carl E Horton", "Thomas D Lambert", "Rodney A McCloud", "Robert Pratt", "Kenneth Royster", "George M Saunders", "Harry M Valentine"] },
  { line: "1964 FA", lineName: "", brothers: ["James M Clark", "James E Coleman Sr.", "Leroy S Comegys", "Wilbur L Dorsey", "Vananzo H Eaton", "Clarence Scott", "James R Tabron", "Charles E Thompson Jr."] },
  { line: "1963 FA", lineName: "", brothers: ["Wayne Anderson", "Race C Jones", "Arnold H Sampson", "William Smith Jr."] },
  { line: "1962 FA", lineName: "", brothers: ["Thomas M Bryant", "Clarence B Canson M.D.", "James A Carter Sr.", "John R Cooper", "Myles Goodson", "Joseph A Hunter", "George Mitchell Jr.", "William S Tinkler", "Lewis E Williams", "Stephen R Young"] },
  { line: "1961 FA", lineName: "", brothers: ["Earl F Adkins", "Robert D Bagley", "George W Black", "Edward C Davis", "Manuel Deese", "Robert Jones", "Ralph D McCloud", "Clarence L McDonald", "Frank A Sartor Jr.", "Leon Smalls", "Robert Smith", "Allen M Ward"] },
  { line: "1960 FA", lineName: "The Untouchable 10", brothers: ["Henry Johnson Jr.", "Vernon Johnson Jr.", "Robert Limerick Jr.", "Reese Marshall", "Joel E McLeod Jr.", "Benjamin F Page", "Oran C Page Esq.", "James Robinson", "John W Ruffin Jr.", "Bernard Q Wilkes"] },
  { line: "1959 FA", lineName: "", brothers: ["James D Ashford", "Earl T Bowen", "Samuel Brown", "Melvin L Carroll", "Theodore H Daniels", "James Franklin", "Vernard Harden", "Thomas E Henderson", "Carroll H Hynson", "Larry R Jackson", "Frederick W Johnson", "Samuel L Martin", "Clement Milbourne", "Clarence M Mitchell III", "Lawrence M Parker", "Charles A Rice Jr.", "Horace Smith", "Carl E Smith", "Robert A Utley"] },
  { line: "1958 FA", lineName: "", brothers: ["Charles D Bowie Jr.", "Guy Bragg D.D.S.", "Whaleland S Cross", "Brian K Estrada", "David Evans", "Walter A Hairston", "Raymond E Kitz", "John W Patterson", "Robert Ridley III", "Welford C Robinson Ph.D.", "Rufus Scarborough", "George Williams", "Robert L Young"] },
  { line: "1957 FA", lineName: "", brothers: ["Calvin Belton", "Heyward Burrell Jr.", "Herman L Cannon", "Preston T Johnson", "Eugene Merriday", "Ronald B Merriweather", "Donald Richardson", "Jackson E Rozier Jr.", "Robert Sheppard", "John E Simms", "Edgar H Sorrells", "Ivan C Walker"] },
  { line: "1956 FA", lineName: "", brothers: ["Wendell M Baker", "Ammon G Barksdale", "Boyce W Barton Jr.", "Garfield M Bennett", "Joseph Brooks", "Daniel L Comegys", "Ronald Garner", "Thomas Gathers Jr.", "Arnold J Hayes", "Daniel N Howard Jr.", "William Irvin", "Fred T Jones", "Earl K Koger Jr.", "Lawrence Raymond", "Robert J Reed Jr.", "Vernon L Robinson Jr.", "John T Sewell III", "J. R Sullivan", "Kersley M Vauls", "Lewis L Williams", "John S Wood Esq.", "Robert A Yorke"] },
  { line: "1955 FA", lineName: "", brothers: ["Edward L Clapp Jr.", "Leon J Cruise", "Walter E Fowlkes", "Jay A Hendricks", "Patrick W Pannell", "Raymond B Webster"] },
  { line: "1954 FA", lineName: "", brothers: ["Curtis A Brooks", "Ernest J Colvin D.D.S.", "Gerald Davis", "James I Deshields", "James A Dorsey", "Maceo R Dumas Jr.", "Robert G Jacobs", "William C Lawrence", "Robert M Lewis", "Earl S Mello", "Nathaniel R Roache", "Richard L White", "John J Williams", "Lawrence L Wilson"] },
  { line: "1953 FA", lineName: "", brothers: ["Joseph B Berry", "Robert M Bradshaw", "Nesbitt Brown", "Herman L Carter Jr.", "William L Davis", "Rene Etienne", "Nathaniel Jackson Jr.", "Cornelius Johnson III", "L. M Lawrence Jr.", "Donald E Rigby", "Arthur L Scott", "J. T Tildon Ph.D.", "Frank W Washington M.D.", "James S White", "George Williams"] },
  { line: "1952 FA", lineName: "", brothers: ["James L Green"] },
  { line: "1951 FA", lineName: "", brothers: ["Oswald Chisholm", "Herbert L Craig", "John Davis", "Clarence C Jackson III", "Louis W Kane", "Byron T LaBeach", "Russell B Lyles Jr.", "Samuel Moore", "Norman B Poe", "Maurice Rouselle III", "Thomas H Savage", "Eugene D Thomas", "Ralph R Watkins"] },
  { line: "1931 FA", lineName: "First Line", brothers: ["John W. Patterson (\"Pat\")", "Herbert Jones", "Melvin Roy", "Babe Jones", "Alphues Edwards"] },
];

export const LineagePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredLineage = useMemo(() => {
    if (!searchQuery.trim()) return lineageData;
    
    const query = searchQuery.toLowerCase().trim();
    
    return lineageData.filter(lineData => {
      // Search by year/line
      if (lineData.line.toLowerCase().includes(query)) return true;
      // Search by line name
      if (lineData.lineName.toLowerCase().includes(query)) return true;
      // Search by brother name
      if (lineData.brothers.some(brother => brother.toLowerCase().includes(query))) return true;
      return false;
    });
  }, [searchQuery]);

  const totalBrothersFound = useMemo(() => {
    return filteredLineage.reduce((total, line) => total + line.brothers.length, 0);
  }, [filteredLineage]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={brothersHeader} 
          alt="Alpha Iota Chapter brothers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Chartered May 29, 1931</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              CHAPTER <span className="text-cream">LINEAGE</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              A legacy of brotherhood spanning over 90 years at Morgan State University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter History */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Our Beginning</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-8">
              THE <span className="text-gradient-cream">FOUNDING</span>
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                The campus of Morgan State College in 1927 was a rich environment for academic excellence. 
                The college existed of a robust student body which included men of Kappa Alpha Psi fraternity 
                from other chapters.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {foundingBrothers.map((brother) => (
                  <div key={brother.name} className="bg-background p-4 border border-border">
                    <span className="text-cream font-semibold">{brother.name}</span>
                    {brother.chapter && (
                      <span className="text-muted-foreground ml-2">— {brother.chapter}</span>
                    )}
                  </div>
                ))}
              </div>

              <p>
                With the Lambda, Epsilon and Philadelphia Alumni Chapters of Kappa Alpha Psi Fraternity, Inc. 
                assembled in Philadelphia, December 27-31, 1930, the Twentieth Grand Chapter was authorized 
                for an active chapter at Morgan State College of Baltimore, Maryland.
              </p>

              <p className="text-cream font-semibold text-xl">
                A charter authorization reached maturity on May 29, 1931, with the establishment of 
                The Alpha Iota Chapter, the 32nd undergraduate chapter established by the Fraternity 
                and the first undergraduate chapter in the state of Maryland.
              </p>

              <p>
                Brothers Tarter, Law, Spencer, and Wheatley were charter members. Brother Robert "Cliff" Tarter 
                served as the first Polemarch of the chapter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charter Members & First Initiated */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">May 29, 1931</span>
              <h3 className="font-display text-4xl text-foreground mt-4 mb-8">
                CHARTER <span className="text-cream">MEMBERS</span>
              </h3>
              <div className="space-y-3">
                {charterMembers.map((member) => (
                  <div key={member} className="flex items-center gap-4 p-4 bg-card border border-border">
                    <img src={alphaIotaLogo} alt={member} className="w-12 h-12 object-contain" />
                    <span className="text-foreground font-semibold">{member}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">First Line</span>
              <h3 className="font-display text-4xl text-foreground mt-4 mb-8">
                FIRST <span className="text-cream">INITIATED</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                The first line pledged by the charter members at Morgan College and initiated into the Epsilon Chapter 
                were also listed as charter members.
              </p>
              <div className="space-y-3">
                {firstInitiatedMembers.map((member) => (
                  <div key={member} className="flex items-center gap-4 p-4 bg-card border border-border">
                    <img src={alphaIotaLogo} alt={member} className="w-12 h-12 object-contain" />
                    <span className="text-foreground font-semibold">{member}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 bg-crimson">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl text-cream mb-4">EXCELLENCE</h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              A tradition of achievement and leadership at every level of the Fraternity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Leadership Positions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-crimson-dark/50 p-8 border border-cream/20"
            >
              <h3 className="font-display text-2xl text-cream mb-6">LEADERSHIP POSITIONS</h3>
              <div className="space-y-4">
                {leadershipPositions.map((item, index) => (
                  <div key={index} className="border-b border-cream/10 pb-3">
                    <p className="text-cream font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Chapter Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-crimson-dark/50 p-8 border border-cream/20"
            >
              <h3 className="font-display text-2xl text-cream mb-6">CHAPTER RECOGNITION</h3>
              <div className="space-y-4">
                {chapterRecognition.map((item, index) => (
                  <div key={index} className="border-b border-cream/10 pb-3">
                    {item.year && <span className="text-cream/60 text-sm">{item.year}</span>}
                    <p className="text-cream font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Individual Honors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-crimson-dark/50 p-8 border border-cream/20"
            >
              <h3 className="font-display text-2xl text-cream mb-6">INDIVIDUAL HONORS</h3>
              <div className="space-y-4">
                {individualHonors.map((item, index) => (
                  <div key={index} className="border-b border-cream/10 pb-3">
                    <p className="text-cream font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Achievements */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">The Details</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              DETAILED <span className="text-gradient-cream">ACHIEVEMENTS</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {detailedAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 border border-border"
              >
                <h4 className="font-display text-2xl text-cream mb-4">{achievement.title}</h4>
                <p className="text-foreground/80 leading-relaxed">{achievement.years}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lineage Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Brotherhood Through The Years</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              ALL <span className="text-gradient-cream">LINES</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {lineageData.length} lines of brotherhood from 1931 to present
            </p>
          </motion.div>

          {/* Search/Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, year, or line name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card border-border"
              />
            </div>
            {searchQuery && (
              <p className="text-muted-foreground mt-4 text-center">
                Found {totalBrothersFound} brother{totalBrothersFound !== 1 ? 's' : ''} in {filteredLineage.length} line{filteredLineage.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {filteredLineage.map((lineData, index) => (
              <motion.div
                key={lineData.line}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="bg-card border border-border p-6 hover:border-cream/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl text-cream">{lineData.line}</span>
                    <img 
                      src={alphaIotaLogo} 
                      alt="Alpha Iota Chapter"
                      className="w-10 h-10 object-contain opacity-50"
                    />
                  </div>
                  {lineData.lineName && (
                    <span className="text-cream/70 italic text-lg">"{lineData.lineName}"</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {lineData.brothers.map((brother) => (
                    <span 
                      key={brother} 
                      className={`px-3 py-1.5 text-sm border ${
                        brother.includes('♦') 
                          ? 'bg-crimson/20 border-crimson/50 text-cream' 
                          : 'bg-background border-border text-foreground/80'
                      }`}
                    >
                      {brother}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-muted-foreground text-sm">
                  {lineData.brothers.length} brother{lineData.brothers.length !== 1 ? 's' : ''}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
