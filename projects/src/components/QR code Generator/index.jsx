

import QRCode from 'react-qr-code'
import React,{useState} from 'react'


function QRCodeGenerator() {

    const [qrCode , setQrCode] =useState(' ');
    const [input,setInput]=useState('');

    function handleGenerateQrCode(){
        setQrCode(input)
    }

  return (
    <div>
      <h1> QR Code Generator</h1>
      <div>
        <input  onChange={(e)=> setInput(e.target.value)}  type="text" name="qr-code" placeholder =" enter your value here " />
        <button disabled={input && input.trim() !== '' ? false : true } onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value"
        value={qrCode} 
        size={400}
        bgColor='#fff'
        >
            
        </QRCode>
      </div>
    </div>
  )
}

export default QRCodeGenerator
