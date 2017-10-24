import{ InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const todos=[
      {
        title: 'Изучить Angular2',
        completed: true
      },
      {
        title: 'Изучить Javascript',
        completed: false
      },
      {
        title: 'Написат приложение',
        completed: false
      },
      {
        title: 'Захватить Вселенную',
        completed: false
      }
      
    ]
    return { todos };
  }
}
