import React from "react";

function Team() {
  return (
    <div className="container p-5">
      <div className="row text-center " style={{color:"#424242"}}>
        <h1>People</h1>
        <div className="col-6 mt-5 mb-3">
          <img src="media\Images\nithinKamath.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"60%"}}/>
          <h3 className="mt-3">Nithin Kamath</h3>
          <p className="text-muted">Founder, CEO</p>
          <p >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry. He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). Playing basketball is
            his zen.
          </p>
        </div>
        
        <div className="col-6 mt-5 mb-3">
          <img src="media\Images\NikhilKamath.jpg" alt="NikhilKamath" style={{borderRadius:"50%",width:"60%"}}/>
          <h3 className="mt-3">Nikhil Kamath</h3>
          <p className="text-muted">Co-founder & CFO</p>
          <p >
          Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.Kamath also co-founded True Beacon In 2020, an asset management company that helps ultra-high-net individuals invest in the Indian markets via privately pooled investment vehicles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
