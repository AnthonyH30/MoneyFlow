import { createContext, ReactNode, useEffect, useState } from "react";

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
    data: [] as any,
    setData: () => {},
    finance: [] as any,
    setFinance: () => {},
    handleDelete: () => {},
    total: 0,
    setTotal: () => {},
    currentSelected: "Todos",
    setCurrentSelected: () => {},
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
    data: financeType[];
    setData: (newState: financeType[]) => void;
    finance: financeType[];
    setFinance: (newState: financeType[]) => void;
    handleDelete: (id: number) => void;
    total: number;
    setTotal: (newState: number) => void;
    currentSelected: string;
    setCurrentSelected: (newState: string) => void;
}

export const FinanceContext = createContext<FincanceContextType>(initialValue);

export const FinanceContextProvider = ({children}: FincanceContextProps) => {
    const [description, setDescription] = useState(initialValue.description);
    const [value, setValue] = useState(initialValue.value);
    const [type, setType] = useState(initialValue.type);
    const [data, setData] = useState(initialValue.data);
    const [finance, setFinance] = useState(initialValue.finance);
    const [total, setTotal] = useState(initialValue.total);
    const [currentSelected, setCurrentSelected] = useState(initialValue.currentSelected);

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        if(description !== "" && !description.match(/^[ \t]+$/) && value !== "" && !value.match(/^[ \t]+$/)){
            const newFinanceItem = {
                id: Date.now(),
                description: description,
                value: value,
                type: type,
            }
            setData([...data, newFinanceItem]);
        }
    }

    const handleDelete = (id: number) => {
        const filterdata = data.filter((item: financeType) => item.id !== id);
        setData(filterdata);
    }

    useEffect(() => {
        const filteredEntries = data.filter((item: financeType) => item.type === "Entrada");
        const totalEntries = filteredEntries.map((item: financeType) => Number(item.value)).reduce((acc: number, cur: number) => {
            return acc + cur
        },0);
        
        const filteredSpend = data.filter((item: financeType) => item.type === "Saída");
        const totalSpend = filteredSpend.map((item: financeType) => Number(item.value)).reduce((acc: number, cur: number) => {
            return acc + cur
        },0);

        setTotal(totalEntries - totalSpend);
        setFinance(data);
    },[data])

    useEffect(()=>{
        const filteredEntries: financeType[] = data.filter((item: financeType) => item.type === "Entrada");
        const filteredSpend: financeType[] = data.filter((item: financeType) => item.type === "Saída");

        if(currentSelected === "Todos"){
            setFinance(data)
        }else if(currentSelected === "Entradas"){
            setFinance(filteredEntries);
        }else if(currentSelected === "Saidas"){
            setFinance(filteredSpend);
        }
    },[currentSelected])

    return(
        <FinanceContext.Provider value={{ description, setDescription, value, setValue, type,  setType, handleSubmit, finance, setFinance, handleDelete, total, setTotal, currentSelected, setCurrentSelected, setData, data}}>
            {children}
        </FinanceContext.Provider>
    )
}