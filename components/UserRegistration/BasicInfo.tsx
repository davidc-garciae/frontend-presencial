import React from 'react';

import { FormData } from './IFormData';
import { InputWLabel } from 'components/components-Auth-a/InputWLabel';
import { SelectInput } from 'components/components-Auth-a/SelectInput';

interface BasicInfoProps {
    formData: FormData,
    setFormData: Function
}

const idTypeOptions = [
    { label: 'Cédula de Ciudadanía', value: 'CC' },
    { label: 'Cédula de Extranjería', value: 'CE' },
    { label: 'Tarjeta de Identidad', value: 'TI' },
    { label: 'Pasaporte', value: 'PAS' },
]

const BasicInfo = ({ formData, setFormData }: BasicInfoProps) => {
    return (
        <div className='form-fields-container gap-4 w-full'>
            <InputWLabel
                label='Nombres'
                id='first-name-input'
                placeholder='John'
                type='txt'
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <InputWLabel
                label='Apellidos'
                id='last-name-input'
                placeholder='Doe'
                type='text'
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <SelectInput
                label='Tipo de documento'
                onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                selectedValue={formData.idType}
                options={idTypeOptions}
            />
            <InputWLabel
                label='Número de identification'
                id='identification-input'
                placeholder='000000000'
                type='number'
                value={formData.idNumber}
                onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
            />
        </div>
    );
}

export { BasicInfo };