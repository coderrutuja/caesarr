import React, { useState } from 'react';
import './App.css'; 

const CaesarCipher = () => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(0);
  const [outputText, setOutputText] = useState('');
  const [showCipherPage, setShowCipherPage] = useState(true);

  const handleCipherButtonClick = () => {
    setShowCipherPage(!showCipherPage); // Toggle the state to switch between Caesar Cipher and encryption/decryption page
    setInputText(''); // Clear input and output fields when switching
    setOutputText('');
    setShift(0);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(parseInt(e.target.value));
  };

  const encryptText = (text, shift) => {
    // Encryption logic
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        encryptedText += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedText += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
      } else {
        encryptedText += text[i];
      }
    }
    return encryptedText;
  };

  const decryptText = (text, shift) => {
    // Decryption logic
    return encryptText(text, 26 - shift);
  };

  const encrypt = () => {
    const encryptedText = encryptText(inputText, shift);
    setOutputText(encryptedText);
  };

  const decrypt = () => {
    const decryptedText = decryptText(inputText, shift);
    setOutputText(decryptedText);
  };

  return (
    <div className="container">
      {showCipherPage ? (
        <div>
          <h2>Caesar Cipher</h2>
          <button onClick={handleCipherButtonClick}>Encrypt / Decrypt</button>
        </div>
      ) : (
        <div>
          <label htmlFor="inputText">Enter Text:</label>
          <input type="text" id="inputText" onChange={handleInputChange} value={inputText} />

          <label htmlFor="shiftValue">Select Shift:</label>
          <input type="number" id="shiftValue" onChange={handleShiftChange} value={shift} />

          <button onClick={encrypt}>Encrypt</button>
          <button onClick={decrypt}>Decrypt</button>

          <p id="outputText">{outputText}</p>

          <button onClick={handleCipherButtonClick}>Back to Caesar Cipher</button>
        </div>
      )}
    </div>
  );
};

export default CaesarCipher;
