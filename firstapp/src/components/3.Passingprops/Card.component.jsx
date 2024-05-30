
function Card({ children , name}) {
  console.log(children);
  return (
    <div style={{color: "green" , backgroundColor: "lightBlue" , borderRadius: "15px"}}>
       {name = "shariq"}
        {children } 
      
    </div>
  );
}
export default Card;