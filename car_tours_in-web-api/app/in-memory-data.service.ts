import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      {"id": 1, "hatchback": true, "name": "Hatch1", "src": "app/img/h1.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 2, "hatchback": true, "name": "Hatch2", "src": "app/img/h2.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 3, "hatchback": true, "name": "Hatch3", "src": "app/img/h3.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 4, "sedan": true, "name": "Sedan1", "src": "app/img/s1.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 5, "sedan": true, "name": "Sedan2", "src": "app/img/s2.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 6, "sedan": true, "name": "Sedan3", "src": "app/img/s3.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 7, "vagon": true, "name": "Vagon1", "src": "app/img/v1.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 8, "vagon": true, "name": "Vagon2", "src": "app/img/v2.jpg", "desc": "Lorem ipsum dolor amet"},
      {"id": 9, "vagon": true, "name": "Vagon3", "src": "app/img/v3.jpg", "desc": "Lorem ipsum dolor amet"}
  ]
    return {cars};
  }
}