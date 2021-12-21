import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import Navigation from './Components/Pages/Navigation/Navigation';
import Footer from './Components/Pages/Footer/Footer';
import MainPage from './Components/Pages/HomePage/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navigation></Navigation>
        <Switch>
          <Route path="/dashboard">
           <Dashboard></Dashboard>
          </Route>
          <Route path="/home">
           <MainPage></MainPage>
          </Route>
          
       


          {/* <Route path="/Profiles">
           <Profiles></Profiles>
          </Route>

       
          <Route path="/employee">
            <Employee></Employee>
          </Route>

          <Route path="/product">
            <Product></Product>
          </Route>

          <Route path="/category">
          <Category></Category>
          </Route> */}

        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
