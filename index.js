let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  startDate(date) {
    return new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - startDate().getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    return Math.abs(parseInt(endingLocation.vertical, 10) - parseInt(beginningLocation.vertical, 10)) + Math.abs(eastWest.indexOf(beginningLocation.horizontal) - eastWest.indexOf(endingLocation.horizontal));
  }

  estimatedTime(peakHours) {
    return peakHours ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }

}
