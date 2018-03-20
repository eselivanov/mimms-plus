export class SortingUtil {
  constructor() {  }
  
  public nameCompare = (a, b) => {
    var aName = `${a.getFamilyName()} ${a.getGivenName()}`
    var bName = `${b.getFamilyName()} ${b.getGivenName()}`
    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
  }
}

