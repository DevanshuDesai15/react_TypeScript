import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  const personName={
    first : 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first:'Bruce',
      last: 'Wayne'
    },
    {
      first:'Clark',
      last: 'Kent'
    },
    {
      first:'Diana',
      last: 'Price'
    }
  ]
  
  return (
    <div className="App">
      {/* <Greet name='Devanshu' messageCount={20} isLoggedin={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/> */}
      {/* <Status status='success'/>
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>
          Oscar Goes to Leo Dicaprico
        </Heading>
      </Oscar>
      <Greet name='Devanshu' isLoggedin={false}/> */}
      {/* <Button handleClick={(event,id)=>{
        console.log('Button Clicked', event, id)
      }}/>
      <Input value='' handleChange={event => {
        console.log(event)
      }}/> */}
      {/* <Container styles={{border:'1px solid black', padding:'1rem'}}/> */}
      
    </div>
  );
}

export default App;
