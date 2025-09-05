import './screen.css';
export default function Screen({value}){
    return(
        <div className="screen">
      {value || "0"} 
    </div>
    );
}