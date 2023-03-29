import logo from './logo.svg';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';
import useFDA from './hooks/useFDA';


function LabelRandomizer()
{
  const {entities} = useJaneHopkins()
  const randomize = async() => {
    let patientArray=structuredClone(entities.patient.list);
    let randomDrugArray=structuredClone(RandomizeDrugs(entities.drug));
    Array.prototype.push.apply(patientArray,randomDrugArray);
    console.log(patientArray);

    /*const {entities} = useJaneHopkins();

    for(i=0; i<entities.patient.list.length;i++)
    {
        let p = new Array(entities.patient.list.length);
        p.push("Name: " + entities.patient.get[i],entities.drug.getRandomItem + "Drug ID: " + (getRandomItem(entities.drug)));
    }*/
function RandomizeDrugs(arr) {
    let array=structuredClone(arr);
    array= array.sort(() => Math.random()-0.5);
    console.log(array);
}
  }
return (
    <div className="Randomizer">
     <button onClick={() => randomize()}>Assign Drugs to patients</button>
    </div>
)
}

