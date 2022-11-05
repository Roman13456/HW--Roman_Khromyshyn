import './App.css';
import Table from './components/Table/Table';

// Таблица
// Использовать нужно класссовые компоненты.

// Дан массив с работниками (самостоятельно составить). У каждого работника есть имя, 
// фамилия, количество отработанных дней и зарплатная ставка за день. Выведите этих 
// работников на экран в виде таблицы. Используйте разделение ответсвенности и создайте несколько компонентов.
const workers = [
  {
    "id": "63660514d2177e5ecee9819d",
    "name": "Cox Brock",
    "days": 270,
    "salaryPerDay": 50
  },
  {
    "id": "6366051429aad30dcfb48d6f",
    "name": "Brigitte Jefferson",
    "days": 205,
    "salaryPerDay": 23
  },
  {
    "id": "63660514ed22576d7b63fd41",
    "name": "Alta Delaney",
    "days": 294,
    "salaryPerDay": 42
  },
  {
    "id": "63660514298dd57360a8baf1",
    "name": "Jolene Burks",
    "days": 247,
    "salaryPerDay": 79
  },
  {
    "id": "6366051476a16adfbe822e24",
    "name": "Morales Nguyen",
    "days": 107,
    "salaryPerDay": 44
  },
  {
    "id": "6366051473baf35e16ba5db3",
    "name": "Amanda David",
    "days": 151,
    "salaryPerDay": 49
  },
  {
    "id": "636605149aacdd543959ebb4",
    "name": "Wallace Hebert",
    "days": 318,
    "salaryPerDay": 42
  },
  {
    "id": "63660514e9ad609e2fba5e1d",
    "name": "Vicky Mejia",
    "days": 43,
    "salaryPerDay": 57
  },
  {
    "id": "6366051430cedee16a574d3f",
    "name": "Merrill Mendez",
    "days": 141,
    "salaryPerDay": 44
  },
  {
    "id": "636605146f1d00b4b3cf59da",
    "name": "Grant Kelly",
    "days": 273,
    "salaryPerDay": 45
  }
]
function App() {
  return (
    <div className="App">
      <Table list={workers}/>
    </div>
  );
}

export default App;
