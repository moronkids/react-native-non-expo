import Routes from './routes';
const App = () => {
  try {
    return <Routes />;
  } catch {
    throw Error('routes not found');
  }
};

export default App;
