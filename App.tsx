import Routes from './routes';
const App = () => {
  try {
    return <Routes />;
  } catch (error) {
    console.log(error, '<<Errk');
  }
};

export default App;
