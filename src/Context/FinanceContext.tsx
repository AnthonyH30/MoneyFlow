import { createContext, ReactNode, useState } from "react";

type FincanceContextProps ={
    children: ReactNode;
}

const initialValue = {
    description: "",
    setDescription: () => {},
    value: "",
    setValue: () => {},
    type: "Entrada",
    setType: () => {},
    handleSubmit: () => {},
    finance: [{
        id: 1,
        description: "Mercado",
        value: "400",
        type: "Saída",
    }],
    setFinance: () => {},
    handleDelete: () => {},
}

type financeType ={
    id: number;
    description: string;
    value: string;
    type: string;
}

type FincanceContextType = {
    description: string;
    setDescription: (newState: string) => void;
    value: string;
    setValue: (newState: string) => void;
    type: string;
    setType: (newState: string) => void;
    handleSubmit: (e:React.SyntheticEvent) => void;
    finance: financeType[];
    setFinance: (newState: financeType[]) => void;
    handleDelete: (id: number) => void;
}

export const FinanceContext = createContext<FincanceContextType>(initialValue);

export const FinanceContextProvider = ({children}: FincanceContextProps) => {
    const [description, setDescription] = useState(initialValue.description);
    const [value, setValue] = useState(initialValue.value);
    const [type, setType] = useState(initialValue.type);
    const [finance, setFinance] = useState(initialValue.finance)

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        if(description !== "" && !description.match(/^[ \t]+$/) && value !== "" && !value.match(/^[ \t]+$/)){
            const newFinanceItem = {
                id: Date.now(),
                description: description,
                value: value,
                type: type,
            }
            setFinance([...finance, newFinanceItem]);
        }
    }

    const handleDelete = (id: number) => {
        const filterFinance = finance.filter((item) => item.id !== id);
        setFinance(filterFinance);
    }

    return(
        <FinanceContext.Provider value={{ description, setDescription, value, setValue, type,  setType, handleSubmit, finance, setFinance, handleDelete}}>
            {children}
        </FinanceContext.Provider>
    )
}