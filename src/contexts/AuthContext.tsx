'use client';

import { createContext, useState, useEffect } from 'react';
import { connectWallet } from '@/lib/wallet';

// @ts-ignore
export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

	useEffect(() => {
		const wallet = localStorage.getItem("wallet");
		const balance = localStorage.getItem("balance");

		if (wallet) {
			setAccount(wallet);
		}

		if (balance) {
			setBalance(balance);
		}

		if (typeof window !== 'undefined' && window.ethereum) {
			window.ethereum.on('accountsChanged', handleAccountsChanged);
		}

		return () => {
			if (typeof window !== 'undefined' && window.ethereum) {
				window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
			}
		};
	}, []);

	const handleAccountsChanged = (accounts) => {
		console.log('accounts: ', accounts);
		if (accounts == "") {
			setAccount(null);
			setBalance(null);
			localStorage.removeItem("wallet");
		} else {
			setAccount(accounts);
			setBalance(balance);

			localStorage.setItem("wallet", accounts);
			// @ts-ignore
			localStorage.setItem("balance", balance);
		}
	};

  const handleConnect = async () => {
    try {
			// @ts-ignore
      const { account, balance } = await connectWallet();
      setAccount(account);
      setBalance(balance);
      localStorage.setItem("wallet", account);
			localStorage.setItem("balance", balance);

    } catch (error) {
      console.error('Falha ao conectar', error);
    }
  };

  const logout = () => {
    setAccount(null);
		setBalance(null);
    localStorage.removeItem("wallet");
		localStorage.removeItem("balance");
  }

	return (
		<AuthContext.Provider value={{ account, balance, setBalance, handleConnect, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
