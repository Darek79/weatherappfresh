import { ListEntity } from 'types/open_weather';
import { createContext } from 'react';

export const IndexedDayObjectsContext = createContext<Array<ListEntity[]>>([]);
