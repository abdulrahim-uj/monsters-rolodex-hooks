import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
    const [searchField, setSearchField] = useState('');    //[value, setValue]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        console.log('useEffect fired...');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            return setMonsters(users);
        }, () => {
            console.log('');
        });
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
        console.log('useEffect 2 is fired...');
    }, [monsters, searchField]);    //only runs monsters or searchfiled value changed    
        
    // OnchageHandler:::
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters Functional Components</h1>
            <SearchBox
                className="search-box"
                onChangeHandler={onSearchChange}
                placeHolder="Search Monsters here..."
            />
            <CardList monsters={filteredMonsters} /> 
        </div>
    );
};

export default App;
