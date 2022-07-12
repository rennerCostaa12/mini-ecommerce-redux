import getData from './data/data';
import Cards from './components/Cards';
import Navigation from './components/Navigation';
import "./App.css";

export default function App() {

  const data = getData();

  return (
    <div >
      <Navigation />
      <div className='content-cards'>
        {data.map((value, key) => {
          return (
            <Cards
              key={value.id}
              nameProduct={value.name_product}
              imageProduct={value.img}
              descriptionProduct={value.description}
              ProductDetails={value}
            />
          )
        })}
      </div>
    </div>
  )
}
