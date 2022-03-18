import React from "react";
import USAMap from 'react-usa-map';
import Stopwatch from './Stopwatch.jsx';
import DescriptionModal from './DescriptionModal.jsx';
import WinningModal from './WinningModal.jsx';
import axios from 'axios';
//import data from "./data/usa-map-dimensions";
//import USAState from "./components/USAState";

class USAmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      allParks: [],
      totalParks: 0,
      currentPark: {},
      startClock: false,
      remaining: 0,
      count: 0,
      incorrectCount: 0,
      descToggle: false,
      description: '',
      images: [],
      parkName: '',
      winToggle: false,
      colors: ['#EEEEFF', '#7F7CAF', '#9FB4C7', '#28587B', '#9FB798', '#533747', '#DEFFFC', '#E2E4F6', '#E7C8DD', '#DBAFC1', '#86626E', '#FFFFB3', '#E07A5F', '#99C1B9', '#DE7C5A', '#B49FCC', '#EF767A'],
      locations: {
        'AL': false,
        'AK': false,
        'AZ': false,
        'AR': false,
        'CA': false,
        'CO': false,
        'CT': false,
        'DE': false,
        'FL': false,
        'GA': false,

        'HI': false,
        'ID': false,
        'IL': false,
        'IN': false,
        'IA': false,
        'KS': false,
        'KY': false,
        'LA': false,
        'ME': false,
        'MD': false,

        'MA': false,
        'MI': false,
        'MN': false,
        'MS': false,
        'MO': false,
        'MT': false,
        'NE': false,
        'NV': false,
        'NH': false,
        'NJ': false,

        'NM': false,
        'NY': false,
        'NC': false,
        'ND': false,
        'OH': false,
        'OK': false,
        'OR': false,
        'PA': false,
        'RI': false,
        'SC': false,

        'SD': false,
        'TN': false,
        'TX': false,
        'UT': false,
        'VT': false,
        'VA': false,
        'WA': false,
        'WV': false,
        'WI': false,
        'WY': false,
      }
    }
    this.getParks = this.getParks.bind(this);
    this.getParkDescription = this.getParkDescription.bind(this);
    this.next = this.next.bind(this);
    this.changeClock = this.changeClock.bind(this);
    this.selectState = this.selectState.bind(this);
    this.statesCustomConfig = this.statesCustomConfig.bind(this);
    this.changeWinModal = this.changeWinModal.bind(this);
    this.changeDescModal = this.changeDescModal.bind(this);
    this.threeLives = this.threeLives.bind(this);
    this.twoLives = this.twoLives.bind(this);
    this.oneLife = this.oneLife.bind(this);
    this.zeroLives = this.zeroLives.bind(this);
  }


  componentDidMount() {
    this.getParks();
  }


  getParks() {
    axios.get('/parks')
      .then(parkInfo => {
        let randomIndex = Math.floor(Math.random() * parkInfo.data.length);
        this.setState({
          parks: parkInfo.data,
          currentPark: parkInfo.data[randomIndex],
          remaining: parkInfo.data.length,
          totalParks: parkInfo.data.length
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  getParkDescription(parkCode) {
    axios.get(`/description/${parkCode}`)
      .then(desc => {
        this.setState({
          descToggle: true,
          description: desc.data.data.data[0].description,
          images: desc.data.data.data[0].images,
          parkName: desc.data.data.data[0].fullName
        })
      })
  }

  next() {
    let randomIndex = Math.floor(Math.random() * this.state.remaining);
    this.setState({
      currentPark: this.state.parks[randomIndex]
    })
  }

  changeClock() {
    this.setState({
      startClock: true
    })
  }

  selectState(event) {
    if (event.target.dataset.name === this.state.currentPark.loc) {
      this.state.locations[this.state.currentPark.loc] = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
      // this.state.locations[this.state.currentPark.loc] = true
      if (this.state.parks.length === 1) {
        this.setState({
          winToggle: true,
          count: this.state.count + 1
        })
      } else {
        let removed = this.state.parks.splice(this.state.parks.findIndex(obj => { return obj.loc === this.state.currentPark.loc }), 1);
        this.state.allParks.push(removed[0]);
        let randomIndex = Math.floor(Math.random() * (this.state.remaining - 1));
        this.setState({
          currentPark: this.state.parks[randomIndex],
          remaining: this.state.remaining - 1,
          count: this.state.count + 1,
          incorrectCount: 0
        })
      }
    } else if (this.state.locations[event.target.dataset.name]) {
      let index = this.state.allParks.findIndex(obj => { return obj.loc === event.target.dataset.name });
      this.getParkDescription(this.state.allParks[index].code)
    } else {
      // alert('GUESS AGAIN');
      if (this.state.incorrectCount + 1 < 3) {
        alert('GUESS AGAIN');
        this.setState({
          incorrectCount: this.state.incorrectCount + 1
        })
      } else if (this.state.parks.length === 1) {
        this.state.locations[this.state.currentPark.loc] = 'red';
        this.setState({
          winToggle: true,
          incorrectCount: this.state.incorrectCount + 1 // might need to delete this
        })
      } else {
        let removed = this.state.parks.splice(this.state.parks.findIndex(obj => { return obj.loc === this.state.currentPark.loc }), 1);
        this.state.allParks.push(removed[0]);
        this.state.locations[this.state.currentPark.loc] = 'red';
        let randomIndex = Math.floor(Math.random() * (this.state.remaining - 1));

        this.setState({
          currentPark: this.state.parks[randomIndex],
          remaining: this.state.remaining - 1,
          incorrectCount: 0
        })
      }
    }
  }


  threeLives() {
    if (this.state.incorrectCount === 0) {
      return true;
    }
  }

  twoLives() {
    if (this.state.incorrectCount === 1) {
      return true;
    }
  }

  oneLife() {
    if (this.state.incorrectCount === 2) {
      return true;
    }
  }

  zeroLives() {
    if (this.state.incorrectCount === 3) {
      return true;
    }
  }

  statesCustomConfig() {
    let obj = {};
    let i = 0;
    for (let key in this.state.locations) {
      if (this.state.locations[key] !== false) {
        obj[key] = { fill: `${this.state.locations[key]}` }
      }
      // if (this.state.locations[key] === 'red') {
      //   obj[key] = {fill: 'red'};
      // }
      // if (this.state.locations[key] === true) {
      //   obj[key] = { fill: `${this.state.colors[i]}` }
      // }
      if (i === this.state.colors.length - 1) {
        i = 0;
      } else {
        i++;
      }

    }
    return obj;
  }

  changeWinModal(boo) {
    this.setState({
      winToggle: boo
    })
  }

  changeDescModal(boo) {
    this.setState({
      descToggle: boo
    })
  }

  render() {
    return (
      <div className='map-container'>
        <span className='modal-container'>
          {this.state.winToggle
            ? <WinningModal modal={this.changeWinModal} count={this.state.count} parkCount={this.state.totalParks} />
            : null
          }
        </span>
        <span className='modal-container'>
          {this.state.descToggle
            ? <DescriptionModal modal={this.changeDescModal} parkName={this.state.parkName} desc={this.state.description} pics={this.state.images} />
            : null
          }
        </span>
        <div className='actual-park'>
          <div className='current-park'>
            {/* <button onClick={this.startClock}>Start</button> */}
            <Stopwatch clock={this.state.startClock} />
            <div className='park-name'>{this.state.currentPark.park}</div>
            <button className='next' onClick={this.next}>Next</button>
            <div className='count'>{this.state.count} / {this.state.totalParks}</div>
            <div className='emojis'>
              {this.threeLives()
                ? <div>🏔 🏔 🏔</div>
                : null}
              {this.twoLives()
                ? <div>🏔 🏔</div>
                : null}
              {this.oneLife()
                ? <div>🏔</div>
                : null}
              {this.zeroLives()
              ? <div></div>
              : null }
            </div>
          </div>
          <div className='actual-map'>
            <USAMap customize={this.statesCustomConfig()} onClick={this.selectState} />
          </div>
        </div>

      </div>

    )
  }

}

export default USAmap;
