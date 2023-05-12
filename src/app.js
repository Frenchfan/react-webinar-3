import React from 'react';
import './styles.css';
import Item from './Item.jsx';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
    const list = store.getState().list;

    return (
        <div className='App'>
            <div className='App-head'>
                <h1>Приложение на чистом JS</h1>
            </div>
            <div className='App-controls'>
                <button onClick={() => store.addItem()}>Добавить</button>
            </div>
            <div className='App-center'>
                <div className='List'>
                    {list.map(item => <Item store={store} key={item.code} item={item}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;