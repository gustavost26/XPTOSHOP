'use client';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

const MetaMaskConnect = () => {

  // @ts-ignore
  const { account, balance, logout, handleConnect } = useContext(AuthContext);
  
  const formatAccount = (account: string) => {
    return `${account.slice(0, 6)}...${account.slice(account.length - 4)}`;
  }

  return (
    <div>
      {account ? (
        <div>
          <div className='columns-2 h25'>
            <p className='text-[#01080E]'>Conectado: {formatAccount(account)}</p>
              <button
                onClick={logout}
                className="bg-[#01080E] text-white py-2 px-4 rounded ms-3"
              >
                Sair
              </button>
          </div>
          <div className='columns-2'>
            <p className='text-[#01080E]'>Saldo: {balance} KPT</p>
          </div>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-[#01080E] text-white py-2 px-4 rounded ms-3 flex"
        >
          <img src="/metamask.svg" width={24} className="me-3" />
          Conecte sua carteira
        </button>
      )}
    </div>
  );
};

export default MetaMaskConnect;
