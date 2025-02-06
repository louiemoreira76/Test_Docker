import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const MainComponent = () => {
    const [values, setValues] = useState([]);
    const [value, setValue] = useState('');

    const getAllNumbers = useCallback(async () => {
        // We will use nginx to redirect it to the proper url
        const response = await axios.get('/api/values/all');
        setValues(response.data.rows.map(row => row.number));
    }, []);

    const saveNumber = useCallback(async (event) => {
        event.preventDefault(); // Correção aqui

        await axios.post('/api/values', {
            value
        });

        setValue('');
        await getAllNumbers();
    }, [value, getAllNumbers]);

    useEffect(() => {
        getAllNumbers();
    }, [getAllNumbers]); // Adicionei getAllNumbers como dependência

    return (
        <div>
            <button onClick={getAllNumbers}>Pegar todos números</button>
            <span>Values</span>
            <div>
                {values.map((value, index) => (
                    <div key={index} className='value'>{value}</div> // Adicionei uma chave única
                ))}
            </div>

            <form className='form' onSubmit={saveNumber}>
                <label>Digite seu Valor:</label>
                <input value={value} onChange={(event) => { setValue(event.target.value); }} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default MainComponent;
