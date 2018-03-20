//import { HttpHeaders } from "@angular/common/http/src/headers";

export class Constants {
    public static get BASE_URL(): string { return "/mimms"/*"https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir"*/ };
    //public static get JWT_HEADER(): HttpHeaders { return new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1MDg4NTk4NjIsInN1YiI6ImRjYWRtMSIsImlzcyI6IlBIRFA6VG9rZW4iLCJhdWQiOiJQSERQOm1JTU1TIiwianRpIjoiNTE5ODNkZmEtNDIyZi00ZGUyLThmODctMWNkYjA2ZDNjMjI0IiwiaWF0IjoxNTA4NzczNDYyfQ.YFFmPTS1qvJTkvTQ9Ngy2Rj0tp12QP63VSnZ2JJ_N_1JFWjs0gl07FlFGr3d7jciCNfuWHokRGijkmSz6xDDwA]')}
    public static get PATIENT_IDENTFIER_SYSTEM(): string { return "urn:oid:2.16.840.1.113883.3.122.1.1.5" }
    public static get PATIENT_OOID_SYSTEM(): string { return "urn:oid:2.16.840.1.113883.3.122.3.273.11"}
    public static get PATIENT_HCN_SYSTEM(): string { return "urn:oid:2.16.840.1.113883.3.122.3.272"}
    public static get USER_KEY(): string { return "Practitioner" }
    public static get USER_LOGON_KEY(): string { return "userLogonId" }
}