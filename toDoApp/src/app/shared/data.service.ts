import{ InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const todos=[
      {
        id: 1,
        title: 'Изучить Angular2',
        completed: true
      },
      {
        id: 2,
        title: 'Изучить Javascript',
        completed: false
      },
      {
        id: 3,
        title: 'Написат приложение',
        completed: false
      },
      {
        id: 4,
        title: 'Захватить Вселенную',
        completed: false
      }
      
    ]
    return { todos };
  }
}
