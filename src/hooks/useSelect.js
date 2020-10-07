import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    // state del custom hook
    const [state, updateState] = useState(stateInicial);

    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => updateState(e.target.value)}
        >
            <option value="">Seleccione</option>
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNews];
}

export default useSelect;