import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row'>
                <h2 style={{ color: "#424242" }} className='mt-2 mb-4'>Charges explained</h2>

                <div className='col-6'>
                    <p className='mt-3'>Securities/Commodities transaction tax</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.<br /><br />When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <p className='mt-3'>Transaction/Turnover Charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.<br />BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)<br />BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.<br />BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.<br />BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <p className='mt-3'>Call & trade</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <p className='mt-3'>Stamp charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    <p className='mt-3'>NRI brokerage charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>
                        <ul>
                            <li>₹100 per order for futures and options.</li>
                            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>

                        </ul>
                    </p>
                    <p className='mt-3'>Account with debit balance</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    <p className='mt-3' >Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>
                        <ul>
                            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>
                    </p>

                </div>
                <div className='col-6'>
                    <p className='mt-3' >GST</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <p className='mt-3' >SEBI Charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <p className='mt-3' >DP (Depository participant) charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.<br/><br/>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.<br/><br/>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    <p className='mt-3' >Pledging charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>₹30 + GST per pledge request per ISIN.</p>
                    <p className='mt-3' >AMC (Account maintenance charges)</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA,<br/>
For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, </p>
                    <p className='mt-3' >Corporate action order charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console</p>
                    <p className='mt-3' >Off-market transfer charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>₹25 or 0.03% of the transfer value (whichever is higher).</p>
                    <p className='mt-3' >Physical CMR request</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                    <p className='mt-3' >Payment gateway charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>₹9 + GST (Not levied on transfers done via UPI)</p>
                    <p className='mt-3' >Delayed Payment Charges</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.</p>
                
                </div>
                <div>
                    <p className='mt-3'>Disclaimer</p>
                    <p style={{ fontSize: "0.85rem" }} className='text-muted'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </div>
                
            </div>
            <h3 className='mt-4 mb-4'>Charges for account opening</h3>
            <div className='row border mb-5'>
               
                <div className='col-10  p-2'>
                    <p className='border-bottom mt-2'>Type of account</p>
                        <p>Online account</p>
                        <p>Offline account</p>
                        <p>NRI account (offline only)</p>
                        <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
                    
                </div>
                <div className='col-2 p-2'>
                <p className='border-bottom mt-2 '>Charges</p>
                        <p>Free</p>
                        <p>Free</p>
                        <p>₹500</p>
                        <p>₹500</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Brokerage;