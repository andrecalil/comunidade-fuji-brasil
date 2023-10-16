import { useQuery } from "react-query";
import * as Airtable from 'airtable';
import { LinkType, StoreType, RepairShopType } from "./types";

const loadData = async () => {
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
    });
    var base = Airtable.base(process.env.REACT_APP_AIRTABLE_DB_ID ?? '');

    const repairShops : RepairShopType[] = (await base('Assistências').select({sort: [{field: "name", direction: "asc"}]}).all()).map(i => i.fields as any);
    const stores : StoreType[] = (await base('Lojas').select({sort: [{field: "name", direction: "asc"}]}).all()).map(i => i.fields as any);
    const links : LinkType[] = (await base('Links').select({sort: [{field: "title", direction: "asc"}]}).all()).map(i => i.fields as any);
  
    return { repairShops, stores, links };
};

export default function useData() {
    const now = new Date();
    
    let hour = now.getHours();
    if(hour % 2 !== 0) hour -= 1;

    const lastHour = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${hour}`;

    return useQuery(['site-data', lastHour], loadData);
}
