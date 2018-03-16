export class SortingFunctions {
  nameCompare = (a, b) => {
    var aName = `${this.getFamilyName(a)} ${this.getGivenName(a)}`
    var bName = `${this.getFamilyName(b)} ${this.getGivenName(b)}`
    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
  } 
  getFamilyName(patient): string {
    return (patient.name.length > 0 && patient.name[0].family.length > 0) ? patient.name[0].family[0] : ''
  }

  getGivenName(patient): string {
    return (patient.name.length > 0 && patient.name[0].given.length > 0) ? patient.name[0].given[0] : ''
  }
  
}

