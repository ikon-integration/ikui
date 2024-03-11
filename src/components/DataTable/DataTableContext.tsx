import { Table } from '@tanstack/react-table';
import { createContext, useContext } from 'react';

const DataTableContext = createContext({} as Table<unknown>);

interface IDataTableProviderProps {
  children: React.ReactNode;
  table: Table<any>;
}

export function DataTableProvider({
  children,
  table,
}: IDataTableProviderProps) {
  return (
    <DataTableContext.Provider value={table}>
      {children}
    </DataTableContext.Provider>
  );
}

export function useDataTable() {
  return useContext(DataTableContext);
}
