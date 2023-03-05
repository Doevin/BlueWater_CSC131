import { getEntities } from '@vendia/client';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';

const {entities} = useJaneHopkins()

function labelRandomizer()
{
    let array1=structuredClone(entities.patient.list);
    let array2=structuredClone(entities.drug);
    Array.prototype.push.apply(array1,array2);
    console.log(array1);

    /*const {entities} = useJaneHopkins();

    for(i=0; i<entities.patient.list.length;i++)
    {
        let p = new Array(entities.patient.list.length);
        p.push("Name: " + entities.patient.get[i],entities.drug.getRandomItem + "Drug ID: " + (getRandomItem(entities.drug)));
    }*/
}

function getRandomItem(arr) {

    let array=structuredClone(entities.drug.list);
    array= array.sort(() => Math.random())-0.5);
    
}