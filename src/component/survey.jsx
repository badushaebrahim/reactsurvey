import axios from 'axios';
import React,{useState} from 'react'

function Suveyform() {
  let sreg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const[name,setName]=useState('')
  const [namer,setNamer]=useState('')
  const [namerstatus,setNamerstatus]=useState(false)

  const[email,setEmail]=useState('')
  const[emailr,setEmailr]=useState('')  
  const[emailrstat,setEmailrst]=useState(false)
   
  const[agyoue,setYou]=useState('')
  const[agyouer,setYour]=useState('') 
   const[agyouerstat,setYourst]=useState(false)

const[sel,setSel] = useState('select')
const[selr,setSelr] = useState('')
const[selrstat,setSelrst] = useState(false)

  const[reco,setReco]=useState('')
  const[recor,setRecor]=useState('')  
  const[recorstat,setRecorst]=useState(false)

  const[cho,setCho]=useState('')
  const[chor,setChor]=useState('')  
  const[chorstat,setChorst]=useState(false)

  const[texts,setTexts]=useState('')
  const[textsr,setTextsr]=useState('')  
  const[textsrstat,setTextsrst]=useState(false)

//end
function senddata(){
var options = {
  method: 'POST',
  url: 'http://localhost:8081/survey/',
  headers: {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'Content-Type': 'application/json'
  },
  data: {
    name: name,
    email: email,
    age: agyoue,
    role: sel,
    status: null,
    sugestions: null,
    c: 0,
    cpp: 0,
    java: 0,
    python: 0,
    csharp: 0
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
}
const addname = (e)=>{setName(e.target.value.trim())
  checkname();}

const addemail = (e)=>{setEmail(e.target.value.trim())
checkemail()}

const addage =(e)=>{setYou(e.target.value)
checkage()}

const addsel = (e)=>{setSel(e.target.value)
checksel()}

const addrec=(e)=>{setReco(e.target.value)
checkrec()}

const addche=(e)=>{setCho(e.target.value)
checkche();}
const addtexts = (e)=>{setTexts(e.target.value.trim())
checktexts();}
function checkname(){
  let namereg = /^[a-zA-Z]+$/;
  let sreg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  console.log(name)
  if(name===""){
    setNamer("Empty name")
  }
  else if(!name.match(namereg)){
    setNamer("Invalid input ")
  }
  else if(name.match(sreg)){
    setNamer("no special charecters allowed")
  }
  else{
    setNamer("")
    setNamerstatus(true)
  }
}

function checkemail(){let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//regex from email
if(email===""){setEmailr("Email is Required")}
else if(!email.match(sreg)){
  setNamer("Invalid input")
}
else if(!email.match(mailformat)){setEmailr("Email is Invalid")}
else{setEmailr("")}}

function checkage (){
  let reg =/^[0-9]*$/;
  if(agyoue === ""){
    setYour("Empty age")
  }else if(!agyoue.match(reg)){
    setYour("invalid input")
  }
  else if(agyoue===0){ setYour("invalid input")}
  else{setYour("")}
}
function checksel(){
  // console.log("sel"+sel)
if (sel==="select"){setSelr(" make select")}
else{setSelr("")}
}

function checkrec(){
  console.log("reco"+reco)
  if(reco===""){
    setRecor("Make selection")
  }else{setRecor("")}
}

function checkche(){
  // console.log(cho)
  if(cho===""){
    setChor("Make selection")
  }else{setChor("")}
}
function checktexts(){
  if(texts===""){
    setTextsr("Empty input")
  }else{setTextsr("")}
}
//
const allcheck=()=>{checkemail();
checkname();
checkage();
checksel();
checkrec();
checkche();
senddata();
}
//st
  return (
    <div>{/*root*/}
      <center><h1>Survey Forms</h1></center>

      <div className="wrap">{/*root*/}
<br/>
<div className="card">

<form>
<div >
<h4>Name</h4>
<input type="text" onBlur={addname} onChange={addname} id="name" placeholder="Enter your name"/><br/>
<small className='errors'>{namer}</small>

</div>

<div>
<h4>Email</h4>
<input type="text" id="email" onBlur={addemail} onChange={addemail} placeholder="Enter your Email"/><br/>
<small className='errors'>{emailr}</small></div>


<div>
<h4>Age</h4>
<input type="text" id="age" onBlur={addage} onChange={addage}   placeholder="Enter your Age"/><br/>
<small className='errors'>{agyouer}</small>
</div>
<div>
<h4>Which Option best describes you ?</h4>
<select onBlur={addsel} onChange={addsel} id="cho" >
<option value="select" >select</option>

<option >Student</option>
<option >Non-Student</option>

</select><br/>
<small className='errors'>{selr}</small>
</div>

<div>
<h4>Would you recomend acabes training  to your friends ?</h4>
<input type="radio" value="yess" onBlur={addrec} onClick={addrec} id="ra" name="ch"/>Yes<br/>
<input type="radio" value="no" onBlur={addrec}  onClick={addrec} id="ra" name="ch"/>No<br/>
<input type="radio" value="may" onBlur={addrec}  onClick={addrec} id="ra" name="ch"/>Maybe<br/>
<small className='errors'>{recor}</small>
</div>

<div>
<h4>Languages and Frameworks Known ?</h4>
<input type="checkbox" onBlur={addche}  onClick={addche} />c<br/>
<input type="checkbox" onBlur={addche} onClick={addche} />c++<br/>
<input type="checkbox" onBlur={addche} onClick={addche} />c#<br/>
<input type="checkbox" onBlur={addche} onClick={addche} />java<br/>
<input type="checkbox" onBlur={addche} onClick={addche} />Python<br/>
<small className='errors'>{chor}</small>
</div>
<h4>Any comments or sugestions ?</h4>
<textarea onChange={addtexts} />
<small className='errors'>{textsr}</small>
<br/>
<input onClick={allcheck} type="button" id="button" value="Submit"></input>

</form>
</div>
      {/*new */}
      </div>{/*wrap*/}
    </div>
  )
}

export default Suveyform