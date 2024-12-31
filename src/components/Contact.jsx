import React, { useState, useRef } from 'react';

const CopyEmailButton = () => {
  const emailRef = useRef("seu-email@exemplo.com");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailRef.current).then(() => {
      setCopied(true); 
      setTimeout(() => setCopied(false), 2000);
    }).catch((error) => {
      console.error("Erro ao copiar o email: ", error);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`px-10 py-10 font-semibold rounded-md text-3xl text-purple-800 cursor-pointer 
        ${copied ? 'bg-green-500' : 'bg-white'} hover:bg-opacity-80`}
    >
      {copied ? "Copiado!" : "Copiar Email"}
    </button>
  );
};

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className="my-10 text-center text-4xl">Contato</h1>
      <div className="text-center tracking-tighter">
        <CopyEmailButton /> 
      </div>
    </div>  
  );
};

export default Contact;
