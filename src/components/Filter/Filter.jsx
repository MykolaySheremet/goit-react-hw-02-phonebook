import { NameField, InputValue } from "./Filter.styled"

export const Filter = ({ value, onChange }) => {
    
    return (
        <NameField>Find contacts by Name
            <InputValue
                type="text"
                value={value}
                onChange={onChange}
            >
            </InputValue>
        </NameField>
        
    )
}