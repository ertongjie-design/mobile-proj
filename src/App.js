import './App.css';
import { Input, Carousel } from 'antd';

const { Search } = Input;
const contentStyle = {
  width: '100%',
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {
  return (
    <div className="App">
      <Search placeholder='🔍  搜索您想要的商品'></Search>
      <Carousel>
        {
          [1,2,3,4].map(item => {
            return <div><div style={contentStyle}></div></div>
          })
        }
      </Carousel>
    </div>
  );
}

export default App;
